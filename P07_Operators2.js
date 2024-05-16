// increment

let a=10;
a++;
console.log(a); // 11

a+=5
console.log(a); // 16

a*=2;
console.log(a); // 32

++a;
console.log(a); // 33
console.log(a++); // 33 cunku once a degerini yazdirdi sonra 1 artirdi. Post-increment
console.log(a); // 34 cunku bir onceki satirda a degeri 1 artirildi
console.log(++a); // 35 cunku once a degerini artirdi, sonra yazdirdi. Pre-increment
console.log(a); // 35 cunku bir onceki satirda a degeri 1 artmisti

// Decrement
let b=20;
console.log(b); // 20
console.log(b--); // 20 Post decrement
console.log(b); // 19
console.log(--b); // 18 Pre decrement
console.log(b); // 18
console.log(b-=2); // 16
console.log(b=b-2); // 16
console.log(b/=4); // 3.5

