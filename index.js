function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  var lowercase = string.toLowerCase();
  var uppercase = string.toUpperCase();
  if(string === lowercase){
    return "I can't hear you!"
  } 
  if(string === uppercase){
    return "YES INDEED!"
  }
}