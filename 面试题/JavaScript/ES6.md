# Promise
## 什么是Promise？Promise有什么优缺点？什么是Promise链？Promise构造函数执行与then函数执行有什么区别？

 `Promise` 翻译过来就是承诺的意思，是异步编程的一种解决方案，它有以下两个特点：
 
  >* 对象内部的状态不受外部影响，Promise内部有三种状态：pending(进行中)、fulfilled(已成功)、rejected(已失败)。只有异步操作的结果才能决定内部的状态，任何其他操作都无法改变这个状态。
  >* 状态改变后就无法改变
    Promise内部的状态只会由pending变成fulfilled或者rejected，一旦状态改变，就无法在变。

 当我们在构造 `Promise` 对象的时候，构造函数内部的代码是立即执行的

```javascript
  new Promise((resolve, reject) => {
    console.log('new Promise')
    resolve('success')
  })
  console.log('finifsh')
  // new Promise -> finifsh
```
* `Promise` 实现了链式调用，也就是说每次调用`Promise` 的 `then` 方法之后返回的也是一个 `Promise` 对象，如果在 `then` 使用 `return` 语句，那么 `return` 的值会被 `Promise.resolve()` 包装。

* `Promise` 的缺点

 `Promise` 一旦建立无法取消，错误需要使用 `catch` 方法处理
 # `async` 和 `await` 的特点？有什么优缺点？原理是什么？

  如果函数加上async,那么函数就会返回一个 `Promise` 对象

  ```javascript
  async function test(){
    return 1
  }
  console.log(test()) // -> Promise {<resolved>: "1"}
  ```
Promise内部的返回值会被Promise.resolve()包装，并且await只能在async声明的函数内部使用。

async相对于Promise来说，优势在于处理then的调用链，能比较优雅的解决回调地狱问题。毕竟写一大堆then也不够优雅。

async的缺点：
  <!-- await 将异步代码改造成同步代码，如果多个异步代码没有依赖性却使用了await,会导致性能上的降低。 -->

```javascript
  async function test() {
    // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
    // 如果有依赖性的话，其实就是解决回调地狱的例子了
    await fetch(url)
    await fetch(url1)
    await fetch(url2)
  }
```
  
  