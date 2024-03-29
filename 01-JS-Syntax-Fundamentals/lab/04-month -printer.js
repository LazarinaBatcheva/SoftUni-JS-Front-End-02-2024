function solve(number) {
    const months = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    if (number < 1 || number > 12) {
        console.log('Error!');
    } else {
        console.log(months[number - 1]);
    }
}



// function solve(month) {
//     switch(month) {
//         case 1:
//             console.log('January');
//             break
//         case 2:
//             console.log('February');
//             break
//         case 3:
//             console.log('March');
//             break
//         case 4:
//             console.log('April');
//             break
//         case 5:
//             console.log('May');
//             break
//         case 6:
//             console.log('June');
//             break
//         case 7:
//             console.log('July');
//             break
//         case 8:
//             console.log('August');
//             break
//         case 9:
//             console.log('September');
//             break
//         case 10:
//             console.log('October');
//             break
//         case 11:
//             console.log('November');
//             break
//         case 12:
//             console.log('December');
//             break
//         default:
//             console.log('Error!');
//     }
// }


// test code

solve(1)
solve(4)
solve(12)
solve(0)
solve(13)