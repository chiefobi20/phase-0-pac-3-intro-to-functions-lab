function shout(string) {return string.toUpperCase()} "Hello!".toUpperCase()

function whisper(string) {return string.toLowerCase()} "Hello".toLowerCase()

function logShout(string) {console.log(string.toUpperCase())} logShout(spyON('hello'))

function logWhisper(string) {console.log(string.toLowerCase())} logWhisper(spyOn('hello'))

function sayHiToHeadphonedRoommate(string) {

if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
} 

if (string === string.toUpperCase()) {
    return "YES INDEED!"
}

else if (string === "Let's have dinner together!") {
    return "I would love to!"
}

}

