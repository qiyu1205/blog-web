---
title: 'Git 相关'
date: '2017-12-26'
tags: 'Git, Gitflow'
quote: 'Gitflow 工作流定义了一个围绕项目发布的严格分支模型。虽然比功能分支工作流复杂几分，但提供了用于一个健壮的用于管理大型项目的框架。'
titlePic: 'http://images.qiyu1205.top/post-planet.jpg'
---

# 常见Git命令

`git branck <branckName>`   新建分支

`git checkout -b <branchName>`   切换分支并新建

`git push origin <branchName>`   提交代码到远程分支

`git pull`   迁代码

`git push --set-upstream origin <branchName>`   关联并 push 到远程分支

`git branch -D <branchName>`   删除本地分支

`git push origin --delete <branchName>`   删除远程分支 

`git push origin --delete tag <tagname>`   删除 tag

`git log`   列出 commit

`git reset –hard <commit hash>`  回滚到某一次 commit

`git checkout master`   切换到主分支

`git merge <branchName>`   合并分支到当前分支

`git rebase <branchName>`   衍和分支到当前分支

`git status`   查看冲突文件

`git add / commit / push`

`git rebase --continue`   提交更改 分支衍合不会保留合并的日志

<!-- more -->

# 分支作用

`master` 负责发版，一般用于线上环境

新功能开发完会合并到 `develop` 分支上

测试完成合并回 `master` 分支并发版

起新功能新版本是基于 `develop` 分支新建一个 `feature` 分支开发

开发完成合并回 `develop` 分支

在项目中一般使用 [Gitflow 工作流](https://github.com/oldratlee/translations/blob/master/git-workflows-and-tutorials/workflow-gitflow.md)

modules 模块：包含业务逻辑，与页面一一对应。由一个或多个 component 组成

components 组件：与业务逻辑分离的公共组件

# Comit message 的格式

commit message 都包括三部分： header， body 和 footer

其中，header 是必须的，body 和 footer 可以省略。

## Header

Header 部分只有一行，包括三个字段： `type` (必需)、 `scope` (可选)、`subject` (必需)。

## type

用于说明 commit 的类别，只允许使用下面7个标示。

- feat: 新功能 （feature）

- fix: 修补 bug

- docs: 文档（documentation）

- style：格式（不影响代码运行的变动）

- refactor：重构（即不是新增功能，也不是修改 bug 的变动）

- test： 测试

- chore： 构建过程或辅助工具的变动

## scope

scope 用于说明 commit 影响的范围

## subject

subject 是 commit 目的的简短描述，不超过50个字符。
