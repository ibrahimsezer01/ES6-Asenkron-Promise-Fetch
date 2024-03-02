// fetch ile api işlemlerimizi veri alma ve veri gönderme işlemlerimizi kolaylıkla halledebiliyoruz
// fetch window objemizde tanımlı olan bir fonksiyondur --- asenkron bir şekilde çalışır

// function getFile() {


    // text için
    // fetch("text.txt")

    // .then(response => {
    //     // console.log(response)    // bir tane response objesi döner
    //     return response.text();     // bu repsonse almak için response prototype içinden text olark gönderdiğimiz dosyayı text func ile almamız gerekiyor
    // })

    // .then(response => response.text())      // text değerimizi döndürüyoruz
    // .then(data => console.log(data))        // text değerimizi consola yazdırıyoruz
    // .catch(err => console.log(err))



    // json için
//     fetch("example.json")

//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// };

// getFile();


// Temel Kullanım Akışı:
// Fetch işlemi başlatılır.
// Sunucudan gelen yanıt response nesnesiyle işlenir.
// Response nesnesi .json(), .text(), .blob() vb. metodlarla işlenir.
// İşlenen veri istemci tarafında kullanılır veya işlenen hata yakalanır.


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// 1 -  Temel Kullanım: 
// Fetch API, fetch() fonksiyonu aracılığıyla kullanılır. Bu fonksiyon, bir URL'ye HTTP isteği yapmak için kullanılır. 
// Bu istekler varsayılan olarak GET istekleri yapar, ancak method parametresiyle diğer HTTP metotları (POST, PUT, DELETE, vb.) belirtilebilir.

// 2 - Response Objesi: 
// fetch() fonksiyonu bir Promise döndürür. Bu Promise, sunucudan gelen yanıtı içeren bir Response nesnesiyle çözülür.

// 3 - SON Verileri: response.json() metodu, Response nesnesinden bir Promise döndürür. Bu Promise, JSON verilerini içeren bir JavaScript nesnesiyle çözülür.

// 4 - Hata Yönetimi: Fetch işlemi Promise tabanlı olduğu için, .then() ve .catch() ile hata yönetimi yapılır. .then() zincirine eklenen son Promise hata yakalaması için .catch() kullanılır.





// Post Metodu

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));



// Put Metodu

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));



// Delete Metodu

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then(response => console.log('Post deleted'))
.catch(error => console.error('Error:', error));
