/*
Data casting (veri donusturme) isleminde 
bir veri turunun baska bir veri turune donusturme islemidir.
Bu islem genellikle data'lari kullanim senaryosuna uygun hale getirmek icin yapilir
*/

// String'den Number'a
let str='123';
let num=Number(str);
console.log(str)
console.log('typeof str: '+typeof str)
console.log(num)
console.log('typeof num: '+typeof num )
console.log('--------------------------------')

//Number to String
let str2=String(num); // (String)num =>java'da bu sekilde
console.log (str2)
console.log('typeof str2: '+typeof str2)

//String to Boolean
let str3='true';
let bool1=Boolean(str3)
console.log (bool1)
console.log('typeof str: '+typeof bool1)


//Number to Boolean
let num1=215;
let bool2=Boolean(num1);

console.log(bool2); 
//javascript'te bir sayının değeri sıfır veya not a number(NaN) ise boolean'a cast edilirse false döndürür
// Eğer sıfırdan farklı bir sayı atanırsa  bu sefer bize true döndürür.



//Boolean to Number
let bool3=false;
let num2=Number(bool3);
console.log(num2); //true ise 1 false ise 0 döndürür

