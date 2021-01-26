## 浏览器渲染
> url http 请求 -> HTML 解析 -> DOM 解析 -> CSS 解析 -> layout 布局树 -> Bitmap 位图
## 有限状态机处理字符串
## reconsume
## HTTP协议解析
### ISO-OSI七层网络模型
* 应用 - HTTP
* 表示 - HTTP
* 会话 - HTTP: require("http")
* 传输 - TCP/IP: require("net")
* 网络 - Internet
* 数据链路 - 4G/5G/WIFI
* 物理层 - 4G/5G/WIFI


#### 实现一个http请求
1. 设计一个http请求的类
* 设计一个 http 请求的类
* content type 是一个必要的字段，要有默认值
* body 是一个kv的格式
* 不同的content-type 影响 body 的格式
2. send函数
3. 发送请求
4. ResponseParser
* 分段处理 ResponseText，用状态机来分析文本结构
5. BodyParse 
