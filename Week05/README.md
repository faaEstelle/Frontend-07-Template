### Proxy
  > Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。可以理解为在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一中机制，可以对外界的访问进行过过滤和改写。
  1. 生成proxy实例：new Proxy(target, handler),target表示所要拦截的目标对象，handler用来定制拦截行为
  ```javascript
    //给空对象架设一层拦截，重新定义set、get
    let proxy = new Proxy({},{
      set(target,prop,value){
        console.log(`setting${prop}`)
        target[prop] = value
        return target[prop] 
      },
      get(target,prop){
        console.log(`getting${prop}`)
        return target[prop]
      }
    })
  ```
  2. 要使得Proxy起作用必须针对**Proxy实例**（上述中的proxy）进行操作，而不是针对目标对象（上述中的空对象）进行操作。若handler中未设置人格拦截，那就等同于直接通向原对象。
  3. Proxy实例也可以作为其他对象的原型对象，当对象无某个属性时会根据原型链在proxy实例对象上读取该属性，导致被拦截。
  4. 同一个拦截器可设置多个拦截操作。对于可以设置但没有设置的拦截操作则直接按照目标对象的原先方式生产结果。    
      - get(target,prop) 拦截读取
      - set(target,prop,value) 拦截设置
      - has(target,prop) 拦截prop in target 操作
      - apply(target,ctx,args) 拦截函数的调用、call和apply操作，接收三个参数：目标对象、目标对象的上下文对象（this）和目标对象的参数数组
      - 更多拦截操作详见 <https://es6.ruanyifeng.com/#docs/proxy>

### proxy与双向绑定 | reactivity响应式对象
  > 核心：通过函数reactive()给对象新增一个Proxy对象监听内部的属性来实现数据监听

### Range对象
  > Range对象代表页面上一段连续区域。如鼠标拖动选中的区域，可通过Window.getSelection获取之后创建Range对象，或通过指定区域创建Range对象，的到Range的起点和终点、修改或复制里面的文本，甚至是html。在富文本编辑器开发中经常使用。在元素拖拽功能中可使用Range对象实现跟灵活的拖拽。
  #### 创建方式
    1. Document.createRange()方法创建
    2. new  Range()

### CSSOM(CSS对象模型)
  > 一组允许用JavaScript操纵CSS的API。 它是继DOM和HTML API之后，又一个操纵CSS的接口，从而能够动态地读取和修改CSS样式


