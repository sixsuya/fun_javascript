// todo__1218.js


function scoreInfo(n) {
    let a = Math.random() * 100
    console.log(a)
    if (a >= 0.3) {
        let b = Math.ceil(a)
        console.log(b)
    }
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        sum += i * b;
        console.log(`합계는 ${sum}`)
        let average = 0;
        average = sum / n
        console.log(`평균은 ${average}`)
        let max = 0;
        if (max < b) {
            max = b;
        console.log(`최대값은 ${max}`)    
        }
    }
}
scoreInfo(5)