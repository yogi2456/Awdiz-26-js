// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12

// function FindTargetedValues(array, target) {
//     for (var i = 0; i < array.length - 1; i++) {
//         for (var j = i + 1; j < array.length; j++) {
//             if(array[i] + array[j] == target) {
//                 console.log(array[i], array[j])
//             }
//             // console.log(array[i], array[j])
//         }
//     }
// }


// FindTargetedValues(array, target)

// Q. Create a function that takes a string and returns a count of unique words. (, . are not words)

// String = “Hi, My name is Awdiz, I  am located at Vashi.” 

// Output :  { Hi : 1, My : 1, name : 1, is : 1 …   }

var string = "Hi, My name is Awdiz, I am located at Vashi."
count = 0;

function FindString(string) {
    // for (var i = 0; i < string.length; i++) {
    //     // console.log(string[i])
    //     // if(string[i] == string[i]) {
    //     //     count += i;
    //     // }
    //     // return string.split(' ').length;
    // }
    // // return count;
    return string.split(' ').length;
}

FindString(string)