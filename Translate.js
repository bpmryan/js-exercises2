// initial idea 
// function camelize(str) {
//     const target = "-";
//     for (let i = 0; i < str.length; i++) {
//         if (target == true) {
//             const splitStr = str.split('-');
//         }
//         return splitStr;
//     }
// }

// solution 
function camelize(str) {
    return str
        .split('-') // takes out '-' in any word given
        .map(
            // capitalizes the first letter of every new word, except the first word 
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) 
        )
        .join('');
}