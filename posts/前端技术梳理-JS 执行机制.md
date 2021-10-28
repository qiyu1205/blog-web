---
title: '前端技术梳理-JS 执行机制'
date: '2021-10-01'
tags: '代理'
quote: '一些外部服务的接口会向我们自己的应用提供的接口发出请求，或是必须是线上服务器调用比如微信的 `jssdk` ，但是我们开发都是在本地完成...'
titlePic: 'http://images.qiyu1205.top/post-road.jpg'
---

# JS运行机制

## 单线程

> 如何理解js的单线程？

**进程**：描述了 CPU 在**运行指令及加载和保存上下文所需的时间**，放在应用上来说就代表了一个程序。进程是 CPU 资源分配的最小单位

在浏览器中，打开一个tab就是创建了一个进程

**线程**：是进程中的更小单位，描述了执行一段指令所需的时间。

**一个进程中可以有多个线程**，如渲染线程、JS 引擎线程、HTTP 请求线程等等。

JS 引擎线程和渲染线程是互斥的，因为 JS 可以修改 DOM，如果 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。

JS 单线程带来的好处： 节约内存、节约上下文切换时间、没有锁的问题。

> 为什么说 DOM 操作很慢？
> 
> 操作 DOM 涉及渲染引擎跟 JS 引擎两个线程之间的通信，加上操作 DOM 还可能带来重绘回流的情况，所以也就导致了性能上的问题。

## Event Loop

> 涉及面试题：
> 
> 1. 什么是 Event Loop？
> 
> 在 JS 执行过程中，遇到异步代码会被挂起，并在需要执行的时候加入 Task（任务）队列中。不同的任务源会分配到不同的 Task 队列中，任务源可分类微任务（microtask）和宏任务（macrotask）Event Loop 的执行顺序如下
> 
> 首先会执行同步代码
> 
> 查询是否有异步代码需要执行
> 
> 执行所有的微任务，如有必要会渲染页面
> 
> 再执行一个宏任务，因为宏任务执行的过程中可能会产生微任务，所以会再次执行所有的微任务，以此循环，直到执行完为止。
> 
> **微任务**包括 `process.nextTick` ，`promise` ，`MutationObserver`，其中 `process.nextTick` 为 Node 独有。
> 
> **宏任务**包括 `script` ， `setTimeout` ，`setInterval` ，`setImmediate` ，`I/O` ，`UI rendering`

## 异步

异步触发条件：

1. **DOM 事件**

2. **Promise**

3. **setTimeout、setInterval**

异步编程

回调函数（Callback）

> 涉及面试题： 
> 
> 1. 什么是回调函数？
> 
> 2. 回调函数有什么缺点？
> 
> 3. 如何解决回调地狱的问题？

回调地狱

```js
ajax(url, () => {
    // 处理逻辑
    ajax(url1, () => {
        // 处理逻辑
        ajax(url2, () => {
            // 处理逻辑
        })
    })
})
```

不利于维护阅读

嵌套函数存在耦合性

不好处理错误

解决方案

Generate

Promise

async/await

await 就是 Generate 和 Promise 的语法糖，且内部实现了自动执行 Generate。

定时器函数

setTimeout, setInterval,requestAnimationFrame

