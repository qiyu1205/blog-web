---
title: '我不知道的 NPM'
date: '2020-12-22'
tags: 'NPM'
quote: '对于 npm 之前一直停留来使用层面，没有做过多的了解。最近由于项目原因补了一些相关知识，烂笔头记下以防忘记...'
titlePic: 'http://images.qiyu1205.top/GU2A4110.jpg'
---

对于 `NPM` 之前一直停留来使用层面，没有做过多的了解。最近由于项目原因补了一些相关知识，烂笔头记下以防忘记。

蛤 ？ Github 收购了 NPM （雾）

让我们从 `package.json` 开始，`package.json` 是我们打开新项目的万能钥匙，项目启动脚本、业务依赖、技术栈在这里可以一窥究竟。

# 依赖包的分类

`package.json` 文件中的我们常用的依赖是 `dependencies` 和 `devDependencies` ，作为包的发布者可能还需要了解其他三种依赖。

## dependencies

dependencies（业务依赖）属于线上代码的一部分，比如 `vue` , `Ant Design` 。我们可以通过命令 `npm install packageName -S/--save`把包安装在此依赖项中

## devDependencies

devDependencies（开发依赖）只是开发时需要，比如构建工具 `webpack`、编译转换 `babel`、测试工具 `jest` 等。我们可以通过命令 `npm install packageName -D/--save-dev`来安装开发依赖。

## peerDependencies

peerDependencies（同伴依赖）的作用是提示宿主环境去安装插件在peerDependencies中所指定依赖的包，然后插件所依赖的包永远都是宿主环境统一安装的npm包，最终解决插件与所依赖包不一致的问题。

## bundledDependencies

bundledDependencies（打包依赖）

optionalDependencies

optionalDependencies（可选依赖），如果有一些依赖包即使安装失败，项目仍然能够运行或者希望 `npm` 继续运行，就可以使用 `optionalDependencies`。注意：( `optionalDependencies` 会覆盖 `dependencies` 中的同名依赖包，所以不要在两个地方都写)

# node_modules 的目录结构

`npm install xxx` 后发生了什么呢？在我们输入安装命令后，npm 会把安装过程 log 输出到 terminal 和 npm-debug.log 中，我们可以很直观的看到当前安装的进度。

NPM 会按照 `package.json` 中的 `dependencies` 来下载依赖包，把它们塞进 `node_modules` 文件夹中，不同的npm版本处理 node_modules 目录结构的方式不同：

**npm 2.x**

`npm 2.x` 会直接以递归的方式来安装包依赖，目录结构呈嵌套形式，虽然结构清晰但会有相同模块包冗余的情况，比如 a，b，c 都依赖 d ，那么2.x 会在a，b，c 的目录下都安装 d，整个依赖树会非常冗余。

**npm 3.x**

`npm 3.x` 采用了扁平化的结构来组织 `node_modules` 。当解析到新的包就把它安装在第一级目录，后续安装如果遇到一级目录已经存在的包，会先按照约定判断版本，符合则忽略，否则会按照npm 2.x 的方式挂载在依赖包目录下。

**npm 5.x**

`package.json` 文件只能锁定大版本，我们每次 `npm install` 后拉取的都是 **依赖包大版本下的最新的版本** ，所以可能会出现依赖包不一致的问题。虽然npm规范规定了小版本minor和补丁patch的版本必需是向下兼容的改动，但是也并不安全，所以依赖包版本不一致可能会导致项目报错，加班，脱发甚至可能猝死（吓）。

所以 `npm 5.x` 在 `3.x` 的基础上最大的变动是增加了 `package-lock.json` 文件。这份文件用来记录当前状态下实际安装的各个 npm package 的具体来源和版本号来确保你重新安装时所有包与你上次安装的完全一样。所以在多人协同开发时，这份文件务必上传到 `git`，确保大家的依赖包一致。

# NPM SCRIPTS 脚本

package.json 中的 script 可以用来自定义脚本命令。

```json
"scripts": {
    "compiler": "babel src --out-dir lib",
    "test": "jest --coverage"
}
```

当我们在终端输入 `npm run compiler` 时，实际上执行的是我们在 `script` 中定义的命令 `babel src --out-dir lib` , 省心多了。

我们也可以让命令串行执行，这样在上一个任务执行完后会紧接着执行下一个任务

```bash
npm run compiler && npm run test
```

# 如何发布一个 NPM 包？

## 开发一个包

打开终端，依次输入

```bash
mkdir myPackage
cd myPackage
npm init -y
```

## package.json

在生成的 `package.json` 文件中编辑

```json
{
  "name": "@hapig/myPackage",
  "version": "1.0.0",
  "description": "包的简介",
  "license": "MIT",
  "repository": "仓库的 GitHub 地址",
  "main": "./lib/index.js",
  "keywords": [
    "Storage",
    "npm",
    "package"
  ]
}
```

简单解释一下上面配置属性：

`name` : NPM 包名

`version` : 版本

`description` : 包的简介

`license` : 开源协议，这里是 MIT 认证

`repository` : 仓库的 GitHub 地址

`main` : 包的入口文件

`keywords` : 提高搜索命中率的关键词

## 功能与单元测试

添加实际的代码功能后需添加单元测试验证代码的健壮性，避免线上事故。

## README.md

README.md 会展示在已发布包的页面，用来介绍当前包的简介，API 等。

## 注册 NPM 账号

[NPM官网](https://www.npmjs.com/) 注册一个账号并到邮箱激活

## 登录

如果是本机第一次发包，在终端输入 `npm adduser` 按照提示输入账号密码邮箱即可。

非首次在终端输入 `npm login` 输入账号密码邮箱即可

## 更改版本号

包的版本号为 `MAJOR.MINOR.PATCH` 的形式，如 `"vue": "2.6.11"`，每个号含义是：

- `MAJOR` **主版本号** (大版本) ：新版本产生了不兼容低版本的 API 等，如 `Vue2.x` 到 `3.x` 的改动
- `MINOR` **次版本号** (小版本) ： 在以向后兼容的方式添加功能
- `PATCH` **修订号** (补丁) ： 在新版本中做了向后兼容的 bug 修复或细微的改动。

```bash
npm version prerelease --preid=alpha  # 内部测试版本号 +1，如0.0.1-alpha.4
npm version patch # z 补丁 +1 
npm version minor # y 小版本 +1，并且重置 z 位的数字为 0
npm version major # x 大版本 +1，并且重置 y 和 z 位的数字为 0
```

在 `git` 环境中，执行 `npm version` 后，除了会帮我们修改版本号外，还会默认执行`git add` -> `git commit` -> `git tag` 操作。需要注意的是执行 `npm version` 之前需要将 `git` 工作区的修改提交，否则会执行失败。

## 发包

发包之前我们要在根目录下创建 `.gitignore` 或 `.npmignore` 将不需要发布的文件写入其中。默认 NPM 发包会忽略 node_modules 文件夹，所以可不写。

我们需要将开发环境中测试、源码、配置文件等在业务环境中不需要的文件添加到`.npmignore` 中。一般来说发布的包中只有代码模块、package.json 和 README.md 文件

`.npmignore` 文件

```bash
src/
test/
coverage/
.*
babel.config.json
yarn.lock
jest.config.js
```

`.gitignore` 文件

```bash
.DS_Store
node_modules
/lib
/dist
/coverage
# local env files
.env.local
.env.*.local
# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

现在我们就可以 `npm publish` 来发布包了。

```bash
npm publish
```

需要注意的是如果当前用的是 `NPM` 的镜像源如淘宝则需切换回 `NPM` 的源地址再发布，否则会发布失败。

`nrm ( npm registry manager )` 是 `NPM` 的镜像源管理工具，可以帮助我们快速的切换 NPM 源。执行 `npm install -g nrm` 来全局安装 `nrm` 。

```bash
nrm ls
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
  test ------- http://localhost:4873/
nrm use npm
   Registry has been set to: https://registry.npmjs.org/
```

没有安装 `nrm` 可以通过 `set registry` 来切换回官方源

```bash
npm config set registry https://registry.npmjs.org/
```

发布成功后在 [NPM官网](https://www.npmjs.com/) 上可以搜索到刚刚发布的包。

## 撤销发布的包

如果发现 bug，需要紧急撤销已经发布的包，可执行 `npm unpublish` 命令，注意：只能撤销 24 小时内发布的包。

```bash
npm unpublish --force
```

或加上@版本号可删除对应的版本

```bash
npm unpublish my-package-name@1.3.2
```

# 如何快速搭建一个 NPM 离线服务器？

npm离线服务器的好处是速度快，并且可以使用公司团队内部的私有包。

下面使用 `verdaccio` 来搭建：

## 安装

```bash
npm install -global verdaccio
```

## 运行

```bash
verdaccio
```

## 添加定制的源并切换

我们可以通过执行命令 `nrm add <registry> <url>` 来添加定制的源，其中 `reigstry` 为源名， `url` 为源的路径。

```bash
nrm add verdaccio http://localhost:4873nrm use verdaccio
```

我们可以在用户根目录的 `.config / verdaccio / storage` 文件夹中添加我们自己的 `npm` 包文件，如果当前npm源是 `verdaccio` ，当我们通过 `npm install xxx` 时，首先会在该文件夹上查找，如果没有再向 `verdaccio` 配置中指定的 `NPM 源`（默认为 `https://registry.npmjs.org` ）去获取，获取到文件也会缓存到该文件夹。