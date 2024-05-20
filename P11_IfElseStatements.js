// 11. kosullu ifadeler

// 11.1 Bagimsiz kosullu ifadeler (if Statements)
let sayi = 34;
if (sayi>10){console.log("Sayi 10'dan buyuktur")}
// bagimsiz if durumlarinda sadece kosul dogrulaninca sonuc doner

// Soru: Kullanicinin yasini sisteme girdigimizde 18 yasindan buyuk ise 
// "Ehliyet basvurunuz kabul edildi" uyarisini versin
// 18 yasindan kucuk ise "Ehliyet basvurunuz reddedildi.    .... yil sonra vasvurmalisiniz."

let age = 12;
if (age>18){console.log("Ehliyet basvurunuz kabul edildi")}
if (age<18){console.log("Ehliyet basvurunuz reddedildi "+(18-age)+' yil sonra yeniden basvurunuz')}

if(age%2===0){
    console.log("Girilen yas bir cift sayidir")
    // console.log(age+" bir cift sayidir")

}

// 11.2 if else statements

// Soru: Kullanicinin yasini sisteme girdigimizde 18 yasina esit ya da buyuk ise
// "Ehliyet basvurunuz kabul edildi" uyarisini versin
// 18 yasindan kucuk ise "Ehliyet basvurunuz reddedildi.    .... yil sonra vasvurmalisiniz."

let age2=17;
if(age2>=18){
    console.log("Ehliyet basvurunuz kabul edildi");
}else{
    console.log("Ehliyet basvurunuz reddedildi "+(18-age2)+' yil sonra yeniden basvurunuz');
}

// && AND Operatoru sagindaki ve solundaki kosullardan en az biri false ise false olur
// || OR Operatoru sagindaki veya solundaki ifadelerden en az biri dogru ise true verir

// Soru: Emeklilik hesabi:
// kadinlar 60 yasinda
// erkekler 65 yasinda emekli olabilir
// yasini ve cinsiyetini sisteme girdigimiz kisiye
// emakli yasina gelmisse "Emekli olabilirsiniz"
// emeklilik yasina gelmemisse "Emekli olabilmek icin .... yil daha calismalisiniz"
// yazdiran javascript kodunu yazdiriniz