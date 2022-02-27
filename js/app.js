function spinnerStatus(status){
    document.getElementById('spinner').style.display=status;
}


const cardContainer = document.getElementById('card-container');
const error = document.getElementById('error');

// when click the search button
function searchClick() {
    cardContainer.textContent = '';
    const searchInput = document.getElementById('input');
    const searchValue = parseInt(searchInput.value);

    if(isNaN(searchValue)|| searchValue == ''){
        error.style.display="block";
        error.innerText = 'Please enter number';
    }
    else if(searchValue < 1){
        error.style.display ="block";
        error.innerText = 'Please enter positive number';
    }
    else{
        error.style.display='none';
        spinnerStatus('block');
        url(searchValue); // search value append to the url
    }

    searchInput.value = '';
}
function url(searchValue){
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${searchValue}`).then(response => response.json()).then(data => showCards(data.cards));
}

const showCards = cards =>{
    // console.log(cards);

    const cardContainer = document.getElementById('card-container');

    for(const card of cards){
        // console.log(card);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        spinnerStatus('none');

        cardDiv.innerHTML = `
            <div onclick="item('${card.code}')" class="card h-50 w-50">
                    <img src="${card.images.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Suit: ${card.suit}</h5> <br>
                        <h5>Value: ${card.value}</h5> <br>
                        <h5>Code: ${card.code}</h5> <br>
                    </div>
            </div>
        `;
        cardContainer.appendChild(cardDiv);
    }
};

const item = code =>{
    console.log(code);
}