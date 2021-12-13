---
title: '前端技术梳理-JS 执行机制'
date: '2021-10-02'
tags: 'Event Loop'
quote: 'JavaScript 作为浏览器的脚本语言，主要是实现用户与浏览器的交互以及操作 DOM； 这决定了它只能是单线程...'
titlePic: 'http://images.qiyu1205.top/post-road.jpg'
---

# JS执行机制

`JavaScript` 作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作 DOM； 这决定了它只能是 `单线程`，在运行时 `JS 引擎线程` 和 `渲染线程` 是**互斥**的，因为 JS 可以修改 DOM，如果 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。

## 进程和线程

**进程**：是 CPU 资源分配的最小单位;

在浏览器中，打开一个tab就是创建了一个进程。

**线程**：是 CPU 调度的最小单位；

**一个进程中可以有多个线程**，如渲染线程、JS 引擎线程、HTTP 请求线程等等。

## JS 单线程带来的好处

节约内存、节约上下文切换时间、没有锁的问题。

## Event Loop

`JavaScript` 所有的任务都会放到 `call-stack` 调用栈等待  `main thread`  主线程执行。

在执行过程中，遇到异步代码会被挂起，并在需要执行的时候加入 Task（任务）队列中。不同的任务源会分配到不同的 Task 队列中，任务源可分为 `微任务（microtask）`和 `宏任务（macrotask）`

Event Loop 的执行顺序如下：

  首先会执行同步代码

  查询是否有异步代码需要执行

  执行所有的微任务，如有必要会渲染页面

  再执行一个宏任务，因为宏任务执行的过程中可能会产生微任务，所以会再次执行所有的微任务，以此循环，直到执行完为止。

这就是 `Event Loop 事件循环`。

## 宏任务和微任务

**微任务**包括 `process.nextTick` ，`promise` ，`MutationObserver`，其中 `process.nextTick` 为 Node 独有。

**宏任务**包括 `script` ， `setTimeout` ，`setInterval` ，`setImmediate` ，`I/O` ，`UI rendering`。
