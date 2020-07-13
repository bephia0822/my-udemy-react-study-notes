//今天要寫的筆記是"..."，對，就是三個點

//第一：用在spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
//[1, 2, 3, 4]     ...會幫你重複之前寫的


//第二：用在rest
const filter = (...args) => {               //args是argument的縮寫，可以寫隨便自己想要的名字
    return args.filter(el => el === 1);     //el是element的縮寫，因為設定element為1，所以用filter篩掉所有不是1的，最後只得1
}

console.log(filter(1, 2, 3));
//[1]