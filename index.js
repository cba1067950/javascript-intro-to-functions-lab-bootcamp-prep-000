function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  var lowercase = string.toLowerCase();
  var uppercase = string.toUpperCase();
  var youToo = "I love you, Grandma."
  if(string === lowercase){
    return "I can't hear you!"
  } 
  if(string === uppercase){
    return "YES INDEED!"
  }
  if(string === youToo){
    return "I love you, too."
  }
}

function logShout(string){
  console.log(shout);
}

function logWhisper(string){
  console.log(whisper);
}
