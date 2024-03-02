// JavaScript'te asenkron işlemleri daha iyi yönetmek için kullanılan bir yapıdır.
// Bir işlemin sonucunu temsil eden ve bu sonucun başarılı veya başarısız olabileceği bir nesnedir.
// Promise, bir işlemin sonucunun gelecekte tamamlanacağını temsil eder.

// Promise oluşturma
const myPromise = new Promise((resolve, reject) => {
  // Asenkron işlemler burada yapılır
  // İşlem başarılıysa resolve() çağrılır
  // İşlem başarısızsa reject() çağrılır
});
// Asenkron işlemleri Promise içinde gerçekleştirin. İşlem başarılıysa resolve() çağrılmalıdır, aksi halde reject() çağrılmalıdır.

// Kullanımı
myPromise
  .then((result) => {
    // Promise başarıyla tamamlandı
    console.log("Başarili:", result);
  })
  .catch((error) => {
    // Promise başarısız oldu
    console.log("Hata:", error);
  });

// Promise Ne için kullanılır
// Asenkron işlemleri daha düzenli ve okunabilir hale getirir.
// Birden çok asenkron işlemi sıralı bir şekilde yönetmek için kullanılabilir.
// Ağ istekleri, dosya okuma/yazma işlemleri gibi zaman alan işlemleri yönetmek için idealdir.
// Callback cehennemine (callback hell) düşmeden karmaşık asenkron kodlarını yönetmek için kullanılabilir.

/* ---------------- Promise Chain ---------------------- */

// bir Promise dönüş değeri olan bir işlevin ardından bir veya daha fazla Promise'in ardışık olarak bağlanmasıdır
// Bir Promise, bir işlemi başlatır ve ardından işlem tamamlandığında bir sonraki adıma geçilmesini sağlar

// Example
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch("https://api.example.com/otherdata");
  })
  .then((otherResponse) => otherResponse.json())
  .then((otherData) => console.log(otherData))
  .catch((error) => console.error("Hata:", error));
