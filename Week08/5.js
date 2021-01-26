function findStr(str){
  let isA = false
  let isB = false
  let isC = false
  let isD = false
  let isE = false

  for(let c of str){
   
    if(c === "a"){
      isA = true
    }else if(isA && (!isB) && c !== "b"){
      isB = true
    }else if(isB && (!isC) && c === "c"){
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