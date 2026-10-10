"""Independent exact arithmetic audit; no binary-float rounding."""
import ast
import json
import subprocess
from fractions import Fraction
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = root / 'unit3/data.js'
data = json.loads(subprocess.check_output(['node', '-e',
    "global.window={};require(process.argv[1]);process.stdout.write(JSON.stringify(window.DECIMAL3));", str(source)]))

def exact(expr):
    tree = ast.parse(expr, mode='eval')
    def visit(n):
        if isinstance(n, ast.Expression):
            return visit(n.body)
        if isinstance(n, ast.Constant) and type(n.value) in (int, float):
            return Fraction(ast.get_source_segment(expr, n))
        if isinstance(n, ast.UnaryOp) and isinstance(n.op, ast.USub):
            return -visit(n.operand)
        if isinstance(n, ast.BinOp):
            a, b = visit(n.left), visit(n.right)
            if isinstance(n.op, ast.Add): return a + b
            if isinstance(n.op, ast.Sub): return a - b
            if isinstance(n.op, ast.Mult): return a * b
            if isinstance(n.op, ast.Div): return a / b
        raise ValueError(expr)
    return visit(tree)

def apply_rule(value, rule, dp=0):
    assert value >= 0
    if rule == 'floor': return Fraction(value.numerator // value.denominator)
    if rule == 'ceil': return Fraction(-(-value.numerator // value.denominator))
    if rule == 'round':
        scaled = value * 10 ** dp
        return Fraction((scaled + Fraction(1, 2)).numerator // (scaled + Fraction(1, 2)).denominator, 10 ** dp)
    assert rule == 'exact'
    return value

qs = [q for l in data['levels'] for q in l['questions']]
assert len(data['levels']) == 28 and len(qs) == 168
assert len({q['id'] for q in qs}) == 168
numbers = 0
for level in data['levels']:
    assert len(level['questions']) == 6
    assert len(level['notes']) >= 3
    for q in level['questions']:
        assert q['stem'] and q['why'] and q['page']
        assert '上题' not in q['stem'] and '前两题' not in q['stem']
        if q['type'] == 'choice':
            assert len(set(q['options'])) == len(q['options']) == 3
            assert q['answer'] in q['options']
        if q['type'] == 'number':
            a = q['audit']
            computed = apply_rule(exact(a['expr']), a['rule'], a['dp'])
            assert computed == Fraction(q['answer']), (q['id'], q['stem'], computed, q['answer'])
            if q.get('precision') is not None:
                assert len(q['answer'].split('.')[1]) == q['precision']
            for step in q.get('steps', []):
                assert apply_rule(exact(step['expr']), step['rule']) == Fraction(str(step['answer']))
            numbers += 1

# Independently verify cycle positions and comparisons, including the non-cyclic prefix.
def digit(prefix, cycle, position):
    if position <= len(prefix): return int(prefix[position-1])
    return int(cycle[(position-len(prefix)-1) % len(cycle)])
indexed = {q['id']: q for q in qs}
for qid, prefix, cycle, pos in [('u3-28-2','1','25',20),('u3-28-3','1','25',21),('u3-28-5','34','56',100)]:
    assert int(indexed[qid]['answer']) == digit(prefix,cycle,pos)
def cycle_value(integer, prefix, cycle):
    return Fraction(integer) + Fraction(int(prefix or '0'),10**len(prefix)) + Fraction(int(cycle),(10**len(cycle)-1)*10**len(prefix))
assert Fraction('0.33') < cycle_value(0,'','3')
assert cycle_value(1,'2','3') > cycle_value(1,'','23')
assert cycle_value(1,'4','5') > cycle_value(1,'','45')
assert cycle_value(0,'','45') < Fraction('0.455')
assert cycle_value(7,'1','45') == exact('78.6/11')
assert (cycle_value(6,'9','258') * 10**7).numerator // (cycle_value(6,'9','258') * 10**7).denominator == 69258258
assert cycle_value(0,'','54') == exact('6/11')
assert cycle_value(0,'','72') == exact('8/11')
assert Fraction('2.95') * Fraction('0.6') == Fraction('1.77')
assert apply_rule(Fraction('2.95'),'round',1)==Fraction('3.0')
assert apply_rule(Fraction('3.04'),'round',1)==Fraction('3.0')
assert apply_rule(Fraction('3.05'),'round',1)==Fraction('3.1')
# Verify price ranges: 3kg costs24, while (3,3.5]kg costs27 in the half-kg example.
for weight, fee in [('3',24),('3.01',27),('3.5',27),('3.51',30)]:
    assert 12 + apply_rule((Fraction(weight)-1)/Fraction('.5'),'ceil')*3 == fee
print(json.dumps({'levels':28,'questions':168,'independentNumericAudits':numbers,'exactFractions':True,'cycleComparisons':True,'chargeBoundaries':True},ensure_ascii=False))
