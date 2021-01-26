function match(str){
  let state = start
  for(let c of str){
    state = state(c)
  }
  return state === end
}

function start(c){
  if(c === "a"){
    return foundA
  }else{
    return start(c)
  }
}

function end(c){
  return end
}

function foundA(c){
  if(c === "b"){
    return foundB
  }else{
    return start(c)
  }
}
function foundB(c){
  if(c === "c"){
    return foundC
  }else{
    return start(c)
  }
}
function foundC(c){
  if(c === "d"){
    return end
  }else{
    return start(c)
  }
}

//寻找abcd
console.log(match("aabcdfeg"))