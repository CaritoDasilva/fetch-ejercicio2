window.onload = () => {

  //Primero vamos a declarar las variables de los botones que vot a utilizar

  const btnDog = document.getElementById('btnDog');
  const btnCat = document.getElementById('btnCat');
  const btnBirds = document.getElementById('btnBirds');

  //Ahora vamos a hacer la funcionalidad del btnDog con un evento del click

  btnDog.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true") //Recibe la URL donde se va a hacer la consulta
      .then((response) => { //Este then es de la promesa del fetch
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Mala respuesta de gatitos");
        }
      }).then((dogesJson) => { //recibimos el JSON en este punto
        //Este then es de la promesa de response.json()
        const dogeReceptorDiv = document.getElementById("showDogs");
        for (let dogeIndex = 0; dogeIndex < dogesJson.length; dogeIndex++) {
          const dogeImg = document.createElement('img'); //Aquí "almaceno" las imágenes
          dogeImg.src = dogesJson[dogeIndex];
          dogeReceptorDiv.appendChild(dogeImg);
        }
      })
      .catch((error) => {
        console.error("Holi soy un error " + error);
      });
  });
  btnCat.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true") //Recibe la URL donde se va a hacer la consulta
      .then((response) => { //Este then es de la promesa del fetch
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Mala respuesta de gatitos");
        }
      }).then((catesJson) => { //recibimos el JSON en este punto
        //Este then es de la promesa de response.json()
        const cateReceptorDiv = document.getElementById("showCats");
        for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
          const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
          cateImg.src = catesJson[cateIndex];
          cateReceptorDiv.appendChild(cateImg);
        }
      })
      .catch((error) => {
        console.log("Holi soy un error " + error);
      });
  })
  btnBirds.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/http://shibe.online/api/birds?count=10&urls=true&httpsUrls=true") //Recibe la URL donde se va a hacer la consulta
      .then((response) => { //Este then es de la promesa del fetch
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Mala respuesta de gatitos");
        }
      }).then((birdsJson) => { //recibimos el JSON en este punto
        //Este then es de la promesa de response.json()
        const birdReceptorDiv = document.getElementById("showBirds");
        for (let birdIndex = 0; birdIndex < birdsJson.length; birdIndex++) {
          const birdImg = document.createElement('img'); //Aquí "almaceno" las imágenes
          birdImg.src = birdsJson[birdIndex];
          birdReceptorDiv.appendChild(birdImg);
        }
      })
      .catch((error) => {
        console.log("Holi soy un error " + error);
      });
  })
};