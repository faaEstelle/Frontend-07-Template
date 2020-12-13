### 数组方法
  * arry.fill(value,start,end)，用固定的值填充数组索引范围内的值，当start<0或者end<0时自动计算成len+start/end 改变数组本身[start,end)
  * arry.shift() 移除索引为0的元素（第一个），并返回被移除的元素，其他元素的索引值随之减1,改变数组本身
  * arry.pop() 移除索引为0的元素（第一个），并返回被移除的元素，其他元素的索引值随之减1,改变数组本身;若数组为空，则不改变数组，并返回 undefined

### inline-block元素存在间隙解决办法
  * 父元素设置font-size:0px
  * 父元素设置line-height:0px

### contextmenu
  * contextmenu 元素的右键上下文菜单

### queue集合--广度优先搜索shift+push


### stack栈--深度优先搜索pop+push
  * 启发式搜索
    1.对无序数组做某个值的剔除，可先将剔除值及其下标保存，将数组中的最后一个元素赋值到剔除值的位置，再使用pop方法，可避免O(n)操作
