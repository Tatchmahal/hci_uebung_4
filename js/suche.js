function toggleSearch() {
    let div = document.getElementById('searchDiv');
    let hidden = (div.style.display === 'none');
    if (hidden){
        div.style.display = 'block'
    }else {
        div.style.display = 'none';
        showAll();
    }
}

function filtern() {
    showAll();
    let title = document.getElementById('title').value;
    let autor = document.getElementById('autor').value;
    let isbn = document.getElementById('ISBN').value;
    let preis_min = document.getElementById('preis_min').value;
    let preis_max = document.getElementById('preis_max').value;
    let filterForTitle = false;
    let filterForAutor = false;
    let filterForISBN = false;
    let filterForPreis = false;
    if (title.length > 0){filterForTitle = true}
    if (autor.length > 0){filterForAutor = true}
    if (isbn.length > 0){filterForISBN = true}
    if (preis_min != 0.00 || preis_max != 0.00){filterForPreis = true}

    for (let i = 1; i < 11; i++) {
        let bookDiv = document.getElementById('book-' + i);
        if (filterForTitle){
            let bookTitle = document.getElementById('title-' + i).innerText;
            if (bookTitle !== title){
                bookDiv.style.display = 'none';
            }
        }
        if (filterForAutor){
            let bookAutor = document.getElementById('autor-' + i).innerText;
            if (bookAutor !== autor){
                bookDiv.style.display = 'none';
            }
        }
        if (filterForISBN){
            let bookISBN = document.getElementById('isbn-' + i).innerText;
            if (bookISBN !== isbn){
                bookDiv.style.display = 'none';
            }
        }
        if (filterForPreis){
            let bookPreis = parseFloat(document.getElementById('preis-' + i).innerText);
            if (bookPreis > preis_max || bookPreis < preis_min){
                bookDiv.style.display = 'none';
            }
        }
    }


}

function showAll() {
    for (let i = 1; i < 11; i++) {
        document.getElementById('book-' + i).style.display = 'block';
    }
}
