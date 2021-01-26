# BNF产生式
  * 用尖括号括起来的名称来表示语法结构名
  * 语法结构分成基础结构和需要用其他语法结构定义的复合结构
      - 基础结构称终结符：Number、+ - * /
      - 复合结构称非终结符：MultiplicativeExpression、AddtiveExpression
  * 引号和中间的字符来表示终结符
  * 可以有括号
  * \* 表示多次 
  * | 表示或
  * \+ 表示至少一次

  
  ## BNF定义下的基本语法
    运算表达式：<Expression> ::= <AdditiveExpression><EOF>    
    加法表达式：<AdditiveExpression> ::= <MultiplicativeExpress> | <AdditiveExpression><+><MultiplicativeExpress> | <AdditiveExpression>
    乘法表达式：<MultiplicativeExpression> ::= <Number> | <MultiplicativeExpression><*><Number> | <MultiplicativeExpression></><Number>

  
  ----------------------------------------------
# 一般命令是编程语言的五个层级
  * Atom 原子。如关键字、字符串/数字直接量、变量名、空格等
  * Expression 表达式。原子加上操作符构成表达式
  * Statement 语句。 表达式加上特定的标识符、特定的关键字、特定的符号
  * Structure 结构化。语句加上特定的关键字如function、class
  * Program 程序

## JavaScript基本类型
  * Number
  * String
  * Boolean
  * Object
  * Null
  * Undefined
  * Symbol

### JavaScript--Number
  > 根据ECMAScript标准，JavaScript中数字是双精度浮点类型（Double Float），64位二进制，符合IEEE754格式的值。一个符号位+11个指数位+52个精度位    
     
|  符号位   |     指数位    |       指数位     |
| :-----:  | :----------: | :--------------:|
|    0     | 00000000000  |  00000...00000  |

```javascript
  //代码实现数字的存储的位模式
  function to64bitFloat(number) {
    var i, result = "";
    var dv = new DataView(new ArrayBuffer(8));

    dv.setFloat64(0, number, false);

    for (i = 0; i < 8; i++) {
        var bits = dv.getUint8(i).toString(2);
        if (bits.length < 8) {
            bits = new Array(8 - bits.length).fill('0').join("") + bits;
        }
        result += bits;
    }
    return result;
  }
  to64bitFloat(1) //--> "0011111111110000000000000000000000000000000000000000000000000000"
```

#### Number语法
  * 十进制：允许有小数，只要小数点前或者后一面有数字就行，支持科学计数法。0、0.、.2、1e3    
  * 二进制：只支持整数，以0b开头，后跟0或1，不能有空格。0b111
  * 八进制：以0o开头，后面只能有0～7。0o10
  * 十六进制：以0x开头，用A～F表示10到16的值。0xAA
  > 类型转换
  ```javascript
    0..toString() //--->"0"
    0..toString() //--->"0"
    0.toString() //--->Uncaught SyntaxError: Invalid or unexpected token
  ```
  > NaN (Not A Number)，宇任何值都不相等，包括它自己，只能通过isNaN来判断。但通过Object.is(NaN,NaN)比较，返回的结果为true
  ```javascript
    NaN == NaN //-->false
    NaN == NaN //-->false
    isNaN(NaN) //-->true
    isNaN("AA") //-->true
    isNaN(124) //-->false
    Object.is(NaN,NaN) //-->true
  ```   


### JavaScript--String
  > Character 字符 --- "a"    
  Code Point 码点 用来表示字符 --- 97   
  Encoding 编码 用来存储码点    

  #### 编码格式种类
  * ASCII：规定了127的字符，26大小写字符、数字0～9、制表符、换行、空格等各种常见的字符，无法表示中文，是其他编码方式的基础。
  * Unicode：字符数量庞大，被化成各种片区表示各种语言字符。
  * UCS：只有0000～FFFF范围内的字符。
  * GB（国标）
  * ISO-8859
  * BIG5（大五码）

  #### Unicode中的Encoding
  * UTF
    - UTF8
    - UTF16



  #### JavaScript--Null和Undefined
    * null，空指针，是关键字，原型链终点
    * undefined，声明未定义，是全局变量，非关键字，一般用void 0来代替undefined
    ```javascript
      Number(null) //-->0
      Number(undefined) //-->NaN
    ```


  #### JavaScript--Object
    