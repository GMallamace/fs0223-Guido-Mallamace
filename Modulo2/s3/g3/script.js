fetch("https://striveschool-api.herokuapp.com/books")
.then ((res) => {   //serve a vedere se la chiamata ha avuto successo
    console.log (res);
if (res.ok) {
    return res.json()
    } else {
        throw new Error ("Errore di qualche genere")
    }
})

//estrapoliamo i dati dentro json con then
.then((data) => {
    console.log ("sono qui", data);
    let booklist = document.getElementById ("baseRow")
    data.forEach((book) => {
       let column = document.createElement ("div")
        column.classList.add ("col-12" , "col-lg-3")
        column.innerHTML = `
        <div class="card" style ="width:18rem;">
            <img src=${book.img} 
              class="card-img-top" 
              alt="img">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.price}$</p>
              <a href="#" class="btn btn-primary">Acquista</a>
            </div>
        </div> `
        booklist.appendChild(column)

    });
})
.catch() 

