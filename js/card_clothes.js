let card_clothes = document.getElementById('card_clothes'); 

clothes.forEach(function (element) {
    card_clothes.innerHTML += `
        <div class="card_clothes m-2" style="width: 15rem;">   
            <img src="${element.attachment}" class="around_clothes card-img-top" alt="${element.alt}">
        </div>` 
})
