function kmp(source, pattern) {
  //计算跳转表格
  let table = new Array(pattern.length).fill(0)
  {
    let i = 1, j = 0  //i自重复串的开始位置，已重复的位置用j表示
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        //有自重复
        ++j, ++i;
        table[i] = j
      } else {
        if (j > 0)
          j = table[j]
        else
          ++i
      }
    }
  }

  console.log(table)


  //匹配
  {
    let i = 0, j = 0
    while (i < source.length) {

      if (pattern[j] === source[i]) {
        ++i, ++j
      } else {
        if (j > 0)
          j = table[j]
        else
          ++i
      }
      if (j === pattern.length) return { flag: true, index: i }
    }
    return false
  }
}

// kmp("","abcdabce")
console.log(kmp("abcdabcf", "abc"))
// kmp("","abababc")


function findStr(str){
  let isA = false
  let isB = false
  let isC = false
  let isD = false
  let isE = false

  for(let c of str){
   
    if(c === "a"){
      isA = true
    }else if(isA && !isB && c !== "b"){
      isB = true
    }else if(isB && !isC && c === "c"){
      isC = true
    }else if(isC && !isD && c === "d"){
      isD = true
    }else if(isD && !isE && c === "e"){
      isE = true
    }else if(isE && c === "f"){
      return true
    }else{
      isA = false
      isB = false
      isC = false
      isD = false
      isE = false
      isF = false
    }
  }
  return false
}
findStr("aaabcdefghi")
