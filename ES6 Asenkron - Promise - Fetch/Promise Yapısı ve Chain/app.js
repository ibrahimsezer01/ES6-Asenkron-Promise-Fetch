// function getData(data) {        // Promise döndüren func --- return ile new promise diyerek yeni bir promise objesi gönderebiliriz --- 2 farklı değer alır olumlu ve olumsuz dönüşler içim
//     return new Promise(function(resolve,reject) {       // Promise resolve ve reject bizim js'te hazır olan 2 tane fonksiyonumuz
//         setTimeout(() => {
//             // resolve("işlem başarili");    // promise value için işlem başarili yazısı yazıdrdık
//             // reject("olumsuz işlem");

//             // resolve("Olumlu Sonuc");
//             reject("Olumsuz sonuc");
//         }, 5000);
//     });
// }

// Konsola yazdırılan getData 5 saniye içinde açarsak promiseStatu değernini pending aşamasında olduğunu görürüz, 5 saniye bekletip goruntuledikten sonra ise çalış resolve yani olumlu sınuçlandı şeklinde görürüz
// console.log(getData("Hello World"));     // fullfiled şeklinde de görülebilir

// konsola reject için yazdırmış olduk bu sefer 5 saniye bekledikten sonra hata mesajı ile karşılaşıyoruz, bu hata Uncaught (in promise) olarak gelir bunun nedeni hatayı catch ile yakalamadıüımzıdan dolayı
// console.log(getData("Hello World"));

// Peki biz bu olumlu ve olumsuz sonuçları nasıl alacaz --- bunları than ve catch yapısı ile 2 tane funcla almaya çalışacağız

// then kullanırsak eğer resolve veya fullfiled oldupunda bu then bloğu çalışacak
// getData("Hello World").then(function(response) {        // burda ki response resolve ile dönen "Olumlu sonuc" değerini responsa gönderir
//     console.log(response);
// });

// reject için catch özelliğini kullanırız
// getData("Hello World").catch(function(err) {        // err parametresi bizim reject ile gönderdiğmiz sonuçtur --- 5 saniye bekledikten sonra bu işlemlerin sonuçlandığını görürüz
//     console.log(err);
// })

/* -------------------- Örnek ---------------------- */

// function getData(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 // reject("Please Enter String Value");
//                 // Error mesajımızı daha güzel yazdırabiliriz --- Javascripte Error şeklinde bi tane obje var
//                 reject(new Error("Please Enter String Value"));
//             }
//         }, 4000);

//     });
// };

// getData("Hello World").then(function(responsa){console.log("Gelen Değer: ",responsa);});
// getData("Hello World").catch(function(responsa){console.log("Gelen Değer: ",responsa);});

// Bunları beraber kullanalım --- değer olarak string girersek resolve çalıacak , başka bir veri tipi girersek reject çalışacak
// getData(33)
//     .then( responsa => console.log("Gelen Değer: ", responsa))
//     .catch( responsa => console.error(responsa));
// console.log(responsa); yazmak yerine bunu console.error(response); şeklinde reject'ten gelen hata mesajımızı kırmızı renk ile yazdırabiliriz
// getData değerine string yerine number gönderirsek reject sonucu ile karşılarşırız

/* -------------------- Örnek ---------------------- */

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Please Enter a Number"));
      }
    }, 3000);
  });
}

// Promise Chain --- Promise Zinciri
addTwo(10)
  .then((response) => {
    console.log(response); // girdiğimiz 10 değerine resolve ile 2 artırarak 12 yazdırdık
    return response + 2; // ardından yazdırdığımız 12 değerini 2 artırarak değeri geri döndürüyoruz
  })
  .then((response2) => {
    // retunr ile gelen değerimizi alıyoruz
    console.log(response2); // ardından sonucu 14 olan değerimizi yazıdırıyoruz
  })
  .catch((err) => {
    console.error(err);
  });
