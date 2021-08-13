# 开发文档
## git 工作流

commit 提交使用以下 type 描述：
- feat: 增加新功能
- fix: 修复bug
- docs: 文档（documentation）
- style：格式（不影响代码运行的变动，例如去掉空格、改变缩进、增删分号）
- refactor：重构（即不是新增功能，也不是修改bug的变动）
- test： 测试
- chore： 构建过程或辅助工具的变动
- perf： 提高性能的改动
- ci: 与CI（持续集成服务）有关的改动
- revert: 执行 git revert 打印的 message

## 开发规范

## 项目结构概览
|-- blog-web
    |-- components                                  #公共组件
    |   |-- date.tsx 
    |   |-- layout.module.css
    |   |-- layout.tsx
    |-- lib                                         #库
    |   |-- posts.js                                #文章数据解析生成
    |-- pages
    |   |-- _app.tsx
    |   |-- index.tsx                               #首页
    |   |-- posts
    |       |-- [id].tsx                            #博客文章页
    |-- posts                                       #以 .md 结尾的 markdown 文件列表
    |   |-- pre-rendering.md
    |   |-- ssg-ssr.md
    |-- public                                      #静态资源
    |   |-- favicon.ico
    |   |-- vercel.svg
    |   |-- images
    |       |-- profile.jpg
    |-- styles                                      #公共样式
        |-- global.css
        |-- utils.module.css
    |-- .gitignore
    |-- README.md
    |-- development.md                              #开发文档
    |-- next-env.d.ts
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- yarn.lock
    |-- .github
    |   |-- workflows
    |       |-- ci.yml                              #持续集成
    |-- .next

## 博客页面
- index 首页
- blog 文章列表页
- timeline 文章更新时间线
- about 关于

