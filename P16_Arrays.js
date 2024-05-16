// Arraylar, icerisinde birden cok ogeyi saklayabilen yapilardir

// 1-Array olusturma

let meyveler=['Armut','Elma', 'Portakal', 'Muz', 'Cilek', 'Mangostan']

// 2- dizinin her hangi bir elemanina erisim

console.log(meyveler[5])

// Array methods

// push() methodu: dizinin sonuna bir eleman ekler

meyveler.push('Kivi')
console.log(meyveler);

// pop() methodu : Dizinin sonuna bir veya daha fazla oge ekler

let sonEleman= meyveler.pop()
console.log(sonEleman)
console.log(meyveler);

// shift() methodu
 
let ilkEleman=meyveler.shift()
console.log(ilkEleman)
console.log(meyveler);

// unshift() methodu


// splice() methodu: belirli bir index'ten itibaren ogeleri kaldiri veya ekler
console.log(meyveler);
meyveler.splice(2,4,'Avakado', 'Mango')

console.log(meyveler);

// indexOf methodu: ogenin index numarasini getirir
console.log(meyveler.indexOf('Mangostan'));2662


// slice  methodu: bu method dizinin elemanlarini kopyalamaya yarar