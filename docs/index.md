---
home: true
heroText: zhrx
tagline: 前端编码规范工程化

features:
  - title: 实现编码风格统一
    details: 梳理团队内部规范，制定相关lint工具的约束。
  - title: 提供线上文档说明
    details: 为小组开发人员提供完善的前端开发手册，方便快速入手项目。
  - title: 告别复制式前端配制
    details: 自定义脚手架，实现存量项目、新项目一键接入前端编码规范配制文件。
---

# 纲领

## :star: 痛点

* 项目中的编码异味，导致代码阅读成本、维护成本上升。（eg:无效变量、错误代码等）
* 代码风格不一致，导致git冲突特别多（eg:缩进，末尾有分号或逗号等）
* 从已有的项目，找各种配制文件，进行复制粘贴。
* svn上用word写前端开发手册，编写体验差，阅读体验差。

## :bulb: 涉及知识

* lerna和pnpm
* eslint、stylelint、markdownlint、prettier、cspell
* husky
