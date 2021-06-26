let card_decoration = document.getElementById('card_decoration'); 

decoration.forEach(function (element) {
    card_decoration.innerHTML += `
        <div class="card_clothes m-2" style="width: 15rem;">   
            <img src="${element.attachment}" class="around_clothes card-img-top" alt="${element.alt}">
        </div>` 
})