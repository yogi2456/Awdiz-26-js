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


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 28 },
  ];
  
  const Averagecalc = function (people) {
    let total = 0;
    for (const { age } of people) {
      total += age;
    }
    return total / people.length;
  };
  
  console.log(Averagecalc(people));


//   const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];

// const countNames = function (names, letter = "A") {
//   let total = 0;
//   for (const name of names) {
//     if (name.toUpperCase()[0] === letter) {
//       total += 1;
//     }
//   }

//   return total;
// };

// console.log(countNames(names));

const numbers = [10, -2, 8, 15, -5, 20, 3];

const findMaxSumPair = function (numbers) {
  if (numbers.length < 2) {
    return "Array should contain at least two numbers";
  }

  return numbers.sort((a, b) => a - b).slice(-2);
};

console.log(findMaxSumPair(numbers));


const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];

const countNames = function (names) {
let count=0;
for(i=0;i<names.length;i++){
    if(names.toUpperCase()[0] === "A"){
        count++;
    }
}
    return count;
};

console.log(countNames(names));