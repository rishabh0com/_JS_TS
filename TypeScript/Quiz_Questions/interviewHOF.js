let interview = [23, 300, 10, 15, 50, 70, 200, 35];

let ans = interview.reduce((acc, ele) => {
    if (ele >= 50 && ele % 2 === 0) {
        console.log(ele)
       acc += ele;
    }
    return acc;
}, 0)

console.log(ans)