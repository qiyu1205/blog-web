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

## React

fiber

hooks

状态管理 Redux