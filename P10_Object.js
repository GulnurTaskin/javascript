let ogrenci1={
ad: "Ahmet",
soyad: "Bulut",
numara: 712,
sinif: '9A'

}

let ogrenci2={
    ad: "Esma",
    soyad: "Yigit",
    numara: 886,
    sinif: "9A"

}
// nesnelere erisim
console.log(ogrenci1.ad);
console.log(ogrenci1.soyad);
console.log(ogrenci1.numara);
console.log(ogrenci1.sinif);
console.log("------------------------------");

// nesnelerin tamamina erisim
console.log(Object.values(ogrenci2)); // objenin degerlerine ulasiyoruz

console.log(Object.keys(ogrenci1)); // objenin keylerine ulasiyoruz

console.log(Object.entries(ogrenci1)); // key ve value birlikte

delete ogrenci1.sinif; // silme islemi
console.log(Object.values(ogrenci1)) // objenin her hangi bir degerini siliyoruz

// ogrenci1'in sinif degeri var mi diye soruyoruz 
console.log(ogrenci1.hasOwnProperty("sinif")) 


