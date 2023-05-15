const product_URL = "https://striveschool-api.herokuapp.com/api/product/";
  let urlBarContent = new URLSearchParams(window.location.search);
  let productID = urlBarContent.get("productId");
  console.log(productID);
   
    if (productID) {
        document.getElementById("title").innerText =
          "Backoffice page - Modifica dei Prodotti";
        document.getElementById("create").innerText = "Modifica";
   
        //BOTTONE DELETE
        let deleteB = document.getElementById("elimina");
        deleteB.addEventListener("click", () => {
          //FETCH PER CANCELLARE delete PRODOTTO
          fetch(product_URL + productID, {
            method: "DELETE",
            headers: {
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQyNTg4Zjc0MDAwMTQyODc0NTkiLCJpYXQiOjE2ODQxMDczNTksImV4cCI6MTY4NTMxNjk1OX0.cfmo6pHDQH5K85aAZLYu-IgK_sxPSe5kI4W-PwxjUKE",
            },
          })
            .then((res) => {
              if (res.ok) {
                location.assign("homepage.html");
              } else {
                throw new Error("Problema nell'eliminazione del prodotto");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
   
   
    // CREAZIONE DEL PRODOTTO
  
  const form = document.getElementById ("form");
  form.addEventListener ("submit", function (p) {
    p.preventDefault();
  
    let nameInput = document.getElementById("name");
    let descriptionInput = document.getElementById("description");
    let brandInput = document.getElementById("brand");
    let priceInput = document.getElementById("img");
    let imgURL = document.getElementById("price");
  
    let newProduct = {
      name: nameInput.value,
      description: descriptionInput.value,
      brand: brandInput.value,
      price: priceInput.value,
      imageUrl: imgURL.value,
    };
  
   
   
 //FETCH

 fetch(productID ? product_URL + productID : product_URL, {
  method: productID ? "PUT" : "POST",
  body: JSON.stringify(newProduct),
  headers: {
    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQyNTg4Zjc0MDAwMTQyODc0NTkiLCJpYXQiOjE2ODQxMDczNTksImV4cCI6MTY4NTMxNjk1OX0.cfmo6pHDQH5K85aAZLYu-IgK_sxPSe5kI4W-PwxjUKE" ,
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    if (res.ok) {
      location.assign("homepage.html");
    } else {
      throw new Error("Errore nel salvataggio");
    }
  })
  .catch((err) => {
    console.log(err);
  });
})

//FETCH PER CARICARE PRODOTTI
fetch(product_URL + productID, {
  headers: {
    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQyNTg4Zjc0MDAwMTQyODc0NTkiLCJpYXQiOjE2ODQxMDczNTksImV4cCI6MTY4NTMxNjk1OX0.cfmo6pHDQH5K85aAZLYu-IgK_sxPSe5kI4W-PwxjUKE",
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nel recupero della scheda prodotto");
    }
  })
  .then((data) => {
    console.log("Dati del singolo prodotto", data);
    //QUI RIPOPOLO IL FORM
    document.getElementById("name").value = data.name;
    document.getElementById("description").value = data.description;
    document.getElementById("brand").value = data.brand;
    document.getElementById("img").value = data.img;
    document.getElementById("price").value = data.price;
  })
  .catch((err) => {
    console.log(err);
  });


    //FETCH PER ELIMINAZIONE PRODOTTO 
   
        if (productID) {
          document.getElementById("backTitle").innerText =
            "Backoffice page - Modifica PRODOTTO";
          document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";
   
          //BOTTONE DELETE
          let deleteB = document.getElementById("delete-button");
          deleteB.addEventListener("click", () => {
            //FETCH PER CANCELLARE delete PRODOTTO
            fetch(product_URL + productID, {
              method: "DELETE",
              headers: {
                  Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmQyNTg4Zjc0MDAwMTQyODc0NTkiLCJpYXQiOjE2ODQxMDczNTksImV4cCI6MTY4NTMxNjk1OX0.cfmo6pHDQH5K85aAZLYu-IgK_sxPSe5kI4W-PwxjUKE",
              },
            })
              .then((res) => {
                if (res.ok) {
                  alert("SCHEDA PRODOTTO CANCELLATA");
                  location.assign("homepage.html");
                } else {
                  throw new Error("Problema nell'eliminazione del prodotto");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          });
          let resetB = document.getElementById("reset-button");
   
        }  