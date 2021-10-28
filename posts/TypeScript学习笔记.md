---
title: 'TypeScript学习笔记'
date: '2021-10-01'
tags: '代理'
quote: '一些外部服务的接口会向我们自己的应用提供的接口发出请求，或是必须是线上服务器调用比如微信的 `jssdk` ，但是我们开发都是在本地完成...'
titlePic: 'http://images.qiyu1205.top/post-home.jpg'
---

# TypeScript

原始数据类型：`boolean` `number` `string` `void` `null` 和 `undefined`

`null` 和 `undefined` 是所有类型的子型，也就是说 undefined 类型的变量，可以赋值给 number 类型的变量

```typescript
let number: number = undefined;
// 或这样
let u: undefined;
let num: number = u;
```

**任意类型 `any`**： 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

```typescript
let something;
something = 'seven';
something = 7;


something.setName('Tom');
```

**类型推论**：TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

**联合类型**：表示取值可以为多种类型中的一种

```typescript
let a: string | number;
a = 'seven';
a = 7;
```

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**

**接口**

```typescript
interface Person {
    name: string;
    age: number;
}


let tom: Person = {
    name: 'Tom',
    age: 25,
}
```

**可选属性**

```typescript
interface Person {
    name: string;
    age?: number;
}


let tom: Person = {
    name: 'Tom',
};
```

**任意属性**

```typescript
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}


let tom: Person = {
    name: 'Tom',
    gender: 'male',
}
```

**只读属性**

**注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**

```typescript
interface Person {
    readonly id: number;
    name: string;
}


let tom: Person = {
    id: 123,
    name: 'Tom',
}

tom.id = 345; // 报错 error
```

数组的类型

```typescript
// 「类型 + 方括号」 表示法
let fibonacci: number[] = [1,2,3,5];
// 数组范型
let fibonacci: Array<number> = [1,2,3,5];
```

函数的类型

```typescript
// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}
// 函数表达式
let mySum = function (x: number, y: mumber) {
    return x + y;
}
// 接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch =function(source, subString) {
    return source.search(subString) !== -1;
}
```

可选参数及默认值

```typescript
function buildName(firstName?: string, lastName: string = 'Cat') {
    return firstName + lastName;
}
```

剩余参数

```typescript
function push(array: any[], ...items: any[]) {
        items.forEach(function(item) {
        array.push(item);
    });
}

push([], 1, 2, 3);
```

重载

```typescript
// 前两次是函数定义，最后一次是函数实现
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

类型断言

```typescript
// 语法
 值 as 类型


// 栗子
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    // 需要在还不确定类型的时候就访问其中一个类型特有的属性或方法,此时可以使用类型断言
    // 将 animal 断言成 Fish
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```



声明文件

声明语句

当我们引用第三方库，如jQuery时，直接使用 `$` 或 `jQuery` 会报错

```typescript
jQuery('#foo'); // ERROR: Cannot find name 'jQuery'.

// 声明定义 jQuery 的类型
declare var jQuery: (selector: string) => any;
jQuery('#foo'); 
```

声明文件

通常我们会把声明语句发到一个单独的文件(jQuery.d.ts)中，这就是声明文件:

```typescript
// src/jQuery.d.ts

declare var jQuery: (selector: string) => any;
```

声明文件必需以 `.d.ts` 为后缀。

一般来说，ts 会解析项目中所有的 `*.ts` 文件，当然也包含以 `.d.ts` 结尾的文件。所以当我们将 `jQuery.d.ts` 放到项目中时，其他所有 `*.ts` 文件就都可以获得 `jQuery` 的类型定义了。

第三方声明文件

更推荐的是使用 `@types` 统一管理第三方库的声明文件

```bash
npm install @types/jquery --save-dev
```