class Request {

    get(url) {

        return new Promise((resolve, reject) => {
            // default metodumuz get olduğu için bunu get için belirtmemize gerek yok

            fetch(url)
                // .then(response => response.text)        // response.text func çağırmak yerine özelliğine erişiyoruz bu şekilde veriler gelmez
                // .then(response => response.text())      // text ile string bir şekilde gelir
                .then(response => response.json())      // array şeklinde alabiliriz
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    };

    post(url, data) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    put(url,data) {
        return new Promise((resolve,reject) => {

            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    delete(url) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: "DELETE"
            })
            // silinen veriyi görüntüleyemediğimiz için bunların hiçbiri yazdırılmayacak o yüzden değiştelim
            // .then(response => response.json())
            // .then(data => resolve(data))
            // .catch(err => reject(data))
            .then( () => console.log("işlem başarili"))
            .catch( () => console.log("veri silinemedi"))
        })
    }
};

const request = new Request();
let albums;

// asenkron işlem
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => console.log(albums))
// .catch(err => console.log(err));

// console.log(albums);    // undefined
// değişkeni buraya yazarsak eğer request.get bloğu askenron bir şekilde çalışacağı için albums için beklediğimiz değerler henüz yazılmamış olacaktı


// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "İbrahim" })
// .then(newAlbums => console.log(newAlbums))
// .catch(err => console.log(err))



// request.put("https://jsonplaceholder.typicode.com/albums/34", { userId: 4, title: "new İbrahim" })
// .then(newAlbums => console.log(newAlbums))
// .catch(err => console.log(err))


// sildiğimiz için tabi göremiyoruz
request.delete("https://jsonplaceholder.typicode.com/albums/2")
.then(deletedAlbum => console.log(deletedAlbum))
.catch(err => console.log(err))