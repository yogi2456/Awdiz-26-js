var string = "Hi, My name is Awdiz, I am located at Vashi."

function findStringCount() {
    var object = {}
    var word = "";
    for (var i = 0; i < string.length; i++) {
        // console.log(string[i])
        if(string[i] === " " || string[i] === "," || string[i] === ".") {
            if(word != "") {
                if(object[word]) {
                    object[word]++
                } else {
                    object[word] = 1
                }
                word = ""
            }
        } else {
            word += string[i]
            console.log(string[i], "string[i]")
        }
        console.log(word, "word")
    }
    console.log(object)
}

findStringCount(string)