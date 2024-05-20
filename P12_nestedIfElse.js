// Nested If Else Statement 

/*
soru:
Kullanicininn girdigi sayinin negatif/pozitif ve cift/tek sayi oldugunu yazdirin
Girilen sayi pozitif cift sayidir

*/
let sayi=15;

if (sayi>0){
    if(sayi%2===0){
        console.log('Girilen sayi pozitif cift sayidir')
    }else{
        console.log('Girilen sayi pozitif tek sayidir')
    }

}else if(sayi<0){
    if(sayi%2===0){
    console.log('Girilen sayi negatif cift sayidir')
    }else{
        console.log('Girilen sayi negatif tek sayidir')
    }
}else{
    console.log('Girilen sayi sifirdir')
}