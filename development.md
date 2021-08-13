# 开发文档
## git 工作流

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

