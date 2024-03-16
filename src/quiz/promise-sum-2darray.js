const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumArray(arr) {
    return new Promise((resolve) => {
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        resolve(sum)
    })
}

function sum2Darray(arr) {
    let promises = arr.map(row=>sumArray(row))

    return Promise.all(promises).then(sum =>{
        return sum.reduce((total, cur) =>
        total + cur, 0)
    })
}

sum2Darray(array2D).then(sum => {
    console.log(`Sum: ${sum}`)
})

//Add async functions