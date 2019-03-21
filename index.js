var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'
var youToo = "I love you, Grandma."

function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string){
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
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

logShout(uppercase)

