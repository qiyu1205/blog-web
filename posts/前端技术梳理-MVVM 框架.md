---
title: '前端技术梳理-MVVM 框架'
date: '2021-10-03'
tags: 'web, 梳理'
quote: 'xxxxxxxxxxxx'
titlePic: 'http://images.qiyu1205.top/post-planets.jpg'

---

什么是 MVVM ？

Virtual DOM

相对于直接 DOM 来说，操作 JS 对象会快很多，所以我们可以用对象来模拟 DOM

HTML:

```html
<ul class='list'>
  <li>1</li>
</ul>
```

对象表示：

```js
const ul = {
  tag: 'ul',
  props: {
    class: 'list'
  },
  children: [{
    tag: 'li',
    children: 1
  }],
}
```

diff 对比两颗树的差异

O(n) 的复杂度：只对比同层节点

优点：

1. 将 Virtual DOM 作为一个兼容层，让我们还能对接非 Web 端的系统，实现跨端开发。

2. 

## Vue

双向绑定的原理？

生命周期

设计模式-观察者模式

源码相关：

Object.defineProperty

状态管理： vuex

组件通信

父子组件

父组件通过 props 传递数据给子组件，子组件通过 emit 发送事件传输数据给父组件

兄弟组件

```js
this.$parent.$children.componentName.xx
```

跨多层级组件

provide / inject

```js
// 父组件 A
export default {
  provide: {
    data: 1
  }
}
// 子组件 B
export default {
  inject: ['data'],
  mounted() {
    // 无论跨几层都能获得父组件的 data 属性
    console.log(this.data) // => 1
  }
}
```

任意组件

`Vuex` 或 `Event Bus`

computed 和 watch 的区别

`computed` 是计算属性，依赖其他属性计算值，并且 `computed` 的值有缓存，只有当计算值变化才会返回内容。

`watch` 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。

keep-alive

v-show 和 v-if

v-show 只是在 `display: none` 和 `display: block` 之间切换。 初始渲染开销更高，但切换开销很小，适合经常切换的场景

v-if 只有在值为 true 时才渲染，并且切换条件时会触发销毁/挂载组件，所以总的来说在切换时开销更高，更适合不经常切换的场景。这种惰性渲染机制，可以在必要的时候才去渲染组件，减少整个页面的初始渲染开销。

data 为什么是一个函数返回对象？

组件复用时所有组件实例都会共享 `data`，如果 `data` 是对象的话，就会造成一个组件修改 `data` 以后会影响到其他所有组件，所以需要将 `data` 写成函数，每次用到就调用一次函数获得新的数据。

对 Vue2 和 Vue3 响应式变化的理解

Vue3 使用 Proxy API 代替了 Vue2 中的 defineProperty API,

defineProperty API 的局限性在于它只能针对单例属性做监听。

Proxy API 可以监听对象下所有属性的操作，这会带来很大的性能提升。

nextTick 原理

nextTick 用于获取数据更新后的 DOM 

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

v-model 原理

本质上是语法糖，父组件上使用`v-model`, 子组件默认会利用名为 `value` 的 `prop` 和名为 `input` 的事件，当然像`select`表单会以其他默认事件的形式存在。

自定义指令

`$set` 使用场景

## React

fiber

hooks

状态管理 Redux