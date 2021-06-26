let card_items = document.getElementById('card_items'); 

items.forEach(function (element) {
    card_items.innerHTML += `
        <div class="card_clothes m-2" style="width: 15rem;">   
            <img src="${element.attachment}" class="around_clothes card-img-top" alt="${element.alt}">
        </div>` 
})
