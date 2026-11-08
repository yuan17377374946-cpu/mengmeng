# 梦梦课堂 · 五年级英语与数学

这里整理五年级英语单元练习、新概念英语语法和数学分章练习。[仓库的网页首页](https://yuan17377374946-cpu.github.io/mengmeng/)是小数除法应用题专项。其他课程可以直接从下表打开。

## 英语

| 内容 | 在线入口 |
| --- | --- |
| Unit 2 · A Green Life | [单元闯关与课堂测试](https://yuan17377374946-cpu.github.io/mengmeng/english-unit2/) · [绿色生活写作训练](https://yuan17377374946-cpu.github.io/mengmeng/english-unit2/writing/) |
| Unit 3 · Happy Together | [单元首页](https://yuan17377374946-cpu.github.io/mengmeng/english-unit3/) · [词组结构](https://yuan17377374946-cpu.github.io/mengmeng/english-unit3/phrase-01.html) · [重点句型](https://yuan17377374946-cpu.github.io/mengmeng/english-unit3/sentences.html) · [朋友问答](https://yuan17377374946-cpu.github.io/mengmeng/english-unit3/questions.html) |
| 新概念英语 1 | [语法练习簿与课次索引](https://yuan17377374946-cpu.github.io/mengmeng/new-concept-english-1/) |

## 数学

| 内容 | 在线入口 |
| --- | --- |
| 第三单元 · 小数除法 | [全章闯关](https://yuan17377374946-cpu.github.io/mengmeng/unit3/) · [10 关应用题](https://yuan17377374946-cpu.github.io/mengmeng/) · [分类应用题](https://yuan17377374946-cpu.github.io/mengmeng/classified-practice/) · [应用题巩固练习](https://yuan17377374946-cpu.github.io/mengmeng/weekly-practice/) |
| 第四单元 · 图形的运动 | [互动课堂](https://yuan17377374946-cpu.github.io/mengmeng/unit4/) |
| 第五单元 · 用字母表示数 | [数学实验室](https://yuan17377374946-cpu.github.io/mengmeng/unit5/) · [分类练习](https://yuan17377374946-cpu.github.io/mengmeng/unit5/practice.html) · [应用题专项](https://yuan17377374946-cpu.github.io/mengmeng/unit5-applications/) |

## 使用与备课

- 下载完整仓库后，用浏览器打开对应目录的 `index.html`。保留 HTML、JavaScript、CSS 和素材的相对位置，无需安装依赖或构建。
- 学习记录保存在当前浏览器。换设备、浏览器或从本地文件切换到线上页面时，原记录不会自动同步。
- 英语 Unit 2 包含拼写、错题复练与 30 题课堂测试。发音使用浏览器语音，写作由教师评阅。
- 数学第三单元有 28 关、168 题和 30 题综合测试。课本覆盖、课时安排与资料依据见 [第三单元备课说明](unit3/teacher-notes.md)。
- [18 关旧版](archive/index-18-level-backup-2026-10-10.html) 保存在 `archive/`，供查找历史内容。

## 复核第三单元

- 算术检查使用 `python tests/unit3-audit.py`。
- 交互检查使用 `node tests/unit3-check.cjs`，需要 Node.js 和 `linkedom`。可通过 `NODE_PATH` 指向已安装的依赖目录。
