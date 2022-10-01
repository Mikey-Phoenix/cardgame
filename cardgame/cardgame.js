let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
let elemArray = ['./avatarsymbols/fire_nation.jpg', './avatarsymbols/air_nomads.jpg', './avatarsymbols/Watertribe.jpg','./avatarsymbols/Earth_kingdom.jpg', './avatarsymbols/il_340x270.3931031003_kke6.jpg', ];

let fire = 'url("./avatarsymbols/fire_nation.jpg")';
let air = 'url("./avatarsymbols/air_nomads.jpg")';
let water = 'url("./avatarsymbols/Watertribe.jpg")';
let earth = 'url("./avatarsymbols/Earth_kingdom.jpg")';
let avatar = 'url("./avatarsymbols/il_340x270.3931031003_kke6.jpg")';




let main = document.querySelector('main');

let player = document.querySelector('.player-cards');
let computer = document.querySelector('.computer-cards');
let played_cards = document.querySelector('.played-cards');
let played_cards_number = document.querySelector('.played-cards').querySelector('.number');
let market = document.querySelector('.market-cards');

let btn = document.querySelector('button');
let caster = document.querySelector('.cast');
let inside = document.querySelector('.inner');
let outside = document.querySelector('.outer');

let cancelbtn = document.querySelector('.cancel');
let helpWindow = document.querySelector('.help-window');
let help = document.querySelector('.help');
let winner = document.querySelector('.winner');

let music = document.querySelector('.music');
let musicOn = document.querySelector('.musicOn');

let computer_storeNum;
let computer_storeNum_cards = [];
let computer_storeElem;
let computer_storeElem_cards = [];
let player_storeNum;
let player_storeElem;

var computer_cards = [];
let playable = [];
let plays = []

let list;
let values = [];
let forNowElem;
let forNowNum;

let carding;
let blah = [];
let blahIndex = []

let played_number = parseInt(played_cards_number.innerHTML);




let d = '0';
let w = '0';


outside.innerHTML = localStorage.getItem('subs');
inside.innerHTML = localStorage.getItem('times');

localStorage.setItem('subs', w)

let newArray;
let coma;
let a;
let apex = getRandomValues(elemArray.length)
played_cards.style.cssText = `background-color: rgb(231, 230, 230);
background-image: url(${elemArray[apex]});
background-size: 70%, 50%;
background-repeat: no-repeat;
background-position: center;`

a = player_storeElem;
let active = document.getElementsByClassName('active');
const success = document.querySelector('.successContainer');
const successMessage = document.querySelector('.successMessage');
success.style.display = 'none';


music.addEventListener('click', ()=>{
    if (document.querySelector('.audioContainer').innerHTML == '<audio src="./AvatarTheLastAirbenderThemeSong.mp3" loop="loop"></audio>') {
        document.querySelector('.audioContainer').innerHTML = '<audio src="./AvatarTheLastAirbenderThemeSong.mp3" loop="loop" autoplay></audio>';
        musicOn.src = "./download-loudspeaker-speaker-white-icon-png-11637222221c0unycpyqq-removebg-preview.png"
    } else {
        document.querySelector('.audioContainer').innerHTML = '<audio src="./AvatarTheLastAirbenderThemeSong.mp3" loop="loop"></audio>';
        musicOn.src = "./istockphoto-1143038482-170667a-removebg-preview.png"
    }
})


function getRandomValues(len) {
    let rand = Math.floor(Math.random() * len);
    return rand;
}

cancelbtn.addEventListener('click', ()=>{
    console.log('works');
    helpWindow.style.top = '-100vh'
});

help.addEventListener('click', ()=>{
    helpWindow.style.top = '0px'
})


btn.addEventListener('click', ()=>{
    console.log('works');
    computer.innerHTML = '';
    market.style.display = 'flex';
    played_cards.style.display = 'block';
    computer.style.display = 'flex';
    player.style.display = 'flex';
    computer_cards = [];
    computer_storeElem = [];
    computer_storeNum = [];
    for (let i = 0; i < 6; i++) {
        player_storeNum = '';
        player_storeElem = '';
        let numindex = getRandomValues(numArray.length);
        let elemindex = getRandomValues(elemArray.length);

        let player_card = document.createElement('div');
        player_card.classList.add('player-card');
        player_card.style.cssText = `background-image: url(${elemArray[elemindex]})`

        let number = document.createElement('p');
        number.classList.add('number');
        if (player_card.style.backgroundImage == avatar) {
            number.innerHTML = ``;
        } else {
            number.innerHTML = `${numArray[numindex]}`;
        }

        player_card.addEventListener('click', (e)=>{
            let tempNum = Array.from(document.getElementsByClassName('number'));
            tempNum.forEach((nummy)=>{
                nummy.classList.remove('active');
            })
            let tempArray = Array.from(document.getElementsByClassName('player-card'));
            tempArray.forEach((temppy)=>{
                temppy.classList.remove('active')
            })
            e.target.classList.add('active')
            player_storeNum = e.target.firstChild.innerHTML;
            player_storeElem = e.target.style.backgroundImage;
        })

        let computerCards = document.createElement('div');
        computerCards.classList.add('computer-card');
        computerCards.innerHTML = `<p class="title">A</p>`;
        computer_storeNum = numArray[getRandomValues(numArray.length)];
        computer_storeElem = elemArray[getRandomValues(elemArray.length)];

        computer_storeNum_cards.push(computer_storeNum);
        computer_storeElem_cards.push(computer_storeElem);

        console.log(computer_storeNum);
        console.log(computer_storeElem);

        computer.appendChild(computerCards);
        player_card.appendChild(number);
        player.appendChild(player_card);

        
        list = Array.from(document.getElementsByClassName('player-card'))
    }
    caster.style.display = 'none';
    d = ++d;
    localStorage.setItem('times', d);
    // w= localStorage.getItem('subs')
    console.log(computer_storeNum_cards);
    console.log(computer_storeElem_cards);

    computer_cards = [
        {
            element: `url("${computer_storeElem_cards[0]}")`,
            number: computer_storeNum_cards[0],
        },
        {
            element: `url("${computer_storeElem_cards[1]}")`,
            number: computer_storeNum_cards[1],
        },
        {
            element: `url("${computer_storeElem_cards[2]}")`,
            number: computer_storeNum_cards[2],
        },
        {
            element: `url("${computer_storeElem_cards[3]}")`,
            number: computer_storeNum_cards[3],
        },
        {
            element: `url("${computer_storeElem_cards[4]}")`,
            number: computer_storeNum_cards[4],
        },
        {
            element: `url("${computer_storeElem_cards[5]}")`,
            number: computer_storeNum_cards[5],
        }
    ];
});

played_cards.addEventListener('click', (e)=>{

    values = [];

    console.log(' ');
    console.log(' ');
    if (player_storeElem == '') {
        success.style.display = 'flex';
        successMessage.innerHTML = 'You have to pick a card first';
        setTimeout(() => {
            success.style.display = 'none';
        }, 3000);
    } else {
        
        if (e.target.style.backgroundImage == player_storeElem) {
            if (player_storeElem == avatar) {
                played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                e.target.children[0].innerHTML = '';
                document.getElementsByClassName('active').item(0).classList.add('none');
                autoplay();
            } else {
                checking(e);
            }
            
            list.forEach((item)=>
            {
                if (item.classList.contains('none')) {
                    item.style.display = 'none'
                } else {
                    values.push(item);
                }
                
            })
            if(values.length == 0){
                ++w;
                successMessage.innerHTML = 'Congratulations! You won!';
                success.style.display = 'flex';
                computer.innerHTML = '';
                outside.innerHTML = ++outside.innerHTML;
                winner.innerHTML = outside.innerHTML;
                setTimeout(() => {
                    success.style.display = 'none'
                }, 3000);
                clearDeck();
                console.log(values.length)
            }
            // console.log(' ')

                // console.log(a);
                
        } else {

            switch (e.target.style.backgroundImage) {
                case fire:
                    if (player_storeElem == air) {
                        checking(e);

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                    })
                    if(values.length == 0){
                        ++w
                        successMessage.innerHTML = 'Congratulations! You won!';
                        success.style.display = 'flex';
                        computer.innerHTML = '';
                        outside.innerHTML = ++outside.innerHTML;
                        winner.innerHTML = outside.innerHTML;
                        setTimeout(() => {
                            success.style.display = 'none'
                        }, 3000);
                        clearDeck();
                        console.log(values.length)
                    }
            
                    console.log(' ')
            
                    } else if (player_storeElem == avatar) {
                            played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                            e.target.children[0].innerHTML = '';
                            document.getElementsByClassName('active').item(0).classList.add('none');
                            autoplay();
                            list.forEach((item)=>{
                                if (item.classList.contains('none')) {
                                    item.style.display = 'none'
                                } else {
                                    values.push(item);
                                }
                                
                            })
                            if(values.length == 0){
                                ++w
                                successMessage.innerHTML = 'Congratulations! You won!';
                                success.style.display = 'flex';
                                computer.innerHTML = '';
                                outside.innerHTML = ++outside.innerHTML;
                                winner.innerHTML = outside.innerHTML;
                                setTimeout(() => {
                                    success.style.display = 'none'
                                }, 3000);
                                clearDeck();
                                console.log(values.length)
                            }
                
                            console.log(' ')
                
                    } else {
                        success.style.display = 'flex';
                        successMessage.innerHTML = 'You have to play a Fire, an Air or an Avatar card';
                        setTimeout(() => {
                            success.style.display = 'none' 
                        }, 3000);
                    }
                    
                break;
            
                case air:
                    console.log('air');
                    if (player_storeElem == water) {
                        checking(e);

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                        if(values.length == 0){
                            ++w;
                            successMessage.innerHTML = 'Congratulations! You won!';
                            success.style.display = 'flex';
                            computer.innerHTML = '';
                            outside.innerHTML = ++outside.innerHTML;
                            winner.innerHTML = outside.innerHTML;
                            setTimeout(() => {
                                success.style.display = 'none'
                            }, 3000);
                            clearDeck();
                            console.log(values.length)
                        }
                
                        console.log(' ')
                
                    } else if (player_storeElem == avatar) {
                                
                                played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                                e.target.children[0].innerHTML = '';
                                document.getElementsByClassName('active').item(0).classList.add('none');
                                    autoplay();

                                list.forEach((item)=>{
                                    if (item.classList.contains('none')) {
                                        item.style.display = 'none'
                                    } else {
                                        values.push(item);
                                    }
                                    
                                })
                                if(values.length == 0){
                                    ++w;
                                    successMessage.innerHTML = 'Congratulations! You won!';
                                    success.style.display = 'flex';
                                    computer.innerHTML = '';
                                    outside.innerHTML = ++outside.innerHTML;
                                    winner.innerHTML = outside.innerHTML;
                                    setTimeout(() => {
                                        success.style.display = 'none'
                                    }, 3000);
                                    clearDeck();
                                    console.log(values.length)
                                }
                    
                                console.log(' ')
                    
                    } else {
                        success.style.display = 'flex';
                        successMessage.innerHTML = 'You have to play an Air, a Water or an Avatar card';
                        setTimeout(() => {
                            success.style.display = 'none'
                        }, 3000);
                    }
                        
                break;
                
                case water:
                    console.log('water');
                    if (player_storeElem == earth) {
                        checking(e);

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                        if(values.length == 0){
                            ++w;
                            successMessage.innerHTML = 'Congratulations! You won!';
                            success.style.display = 'flex';
                            computer.innerHTML = '';
                            outside.innerHTML = ++outside.innerHTML;
                            winner.innerHTML = outside.innerHTML;
                            setTimeout(() => {
                                success.style.display = 'none'
                            }, 3000);
                            clearDeck();
                            console.log(values.length)
                        }
                
                        console.log(' ')
            
                    } else if (player_storeElem == avatar) {
                            
                                played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                                e.target.children[0].innerHTML = '';
                                document.getElementsByClassName('active').item(0).classList.add('none');;
                                autoplay();

                            list.forEach((item)=>{
                                if (item.classList.contains('none')) {
                                    item.style.display = 'none'
                                } else {
                                    values.push(item);
                                }
                                
                        })
                        if(values.length == 0){
                            ++w;
                            successMessage.innerHTML = 'Congratulations! You won!';
                            success.style.display = 'flex';
                            outside.innerHTML = ++outside.innerHTML;
                            winner.innerHTML = outside.innerHTML;
                            setTimeout(() => {
                                success.style.display = 'none'
                            }, 3000);
                            clearDeck();
                            console.log(values.length)
                        }
                
                        console.log(' ')
                
                        } else {
                            success.style.display = 'flex';
                            successMessage.innerHTML = 'You have to play a Water, an Earth or an Avatar card';
                            setTimeout(() => {
                                success.style.display = 'none'
                            }, 3000);
                        }
                    
                break;

                case earth:
                    console.log('earth');
                    if (player_storeElem == fire) {
                        checking(e);

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                        
                        })
                        if(values.length == 0){
                            ++w;
                            successMessage.innerHTML = 'Congratulations! You won!';
                            success.style.display = 'flex';
                            computer.innerHTML = '';
                            outside.innerHTML = ++outside.innerHTML;
                            winner.innerHTML = outside.innerHTML;
                            setTimeout(() => {
                                success.style.display = 'none'
                            }, 3000);
                            clearDeck();
                            console.log(values.length)
                        }
                
                        console.log(' ')
            
                    } else if (player_storeElem == avatar) {
                            
                            played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                            e.target.children[0].innerHTML = '';
                            document.getElementsByClassName('active').item(0).classList.add('none');;
                                autoplay();

                            list.forEach((item)=>{
                                if (item.classList.contains('none')) {
                                    item.style.display = 'none'
                                } else {
                                    values.push(item);
                                }
                                
                            })
                            if(values.length == 0){
                                ++w
                            successMessage.innerHTML = 'Congratulations! You won!';
                            success.style.display = 'flex';
                                outside.innerHTML = ++outside.innerHTML;
                                winner.innerHTML = outside.innerHTML;
                                setTimeout(() => {
                                    success.style.display = 'none'
                                }, 3000);
                                clearDeck();
                                console.log(values.length)
                            }
                
                            console.log(' ')
                
                        } else {
                            success.style.display = 'flex';
                            successMessage.innerHTML = 'You have to play a Earth, a Fire or an Avatar card';
                            setTimeout(() => {
                                success.style.display = 'none'
                            }, 3000);
                        }
                    
                break;

                case avatar:
                    played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                    e.target.children[0].innerHTML = `${player_storeNum}`;
                    document.getElementsByClassName('active').item(0).classList.add('none');
                    autoplay();

                    list.forEach((item)=>{
                        if (item.classList.contains('none')) {
                            item.style.display = 'none'
                        } else {
                            values.push(item);
                        }
                        
                    })
                    if(values.length == 0){
                        ++w;
                        successMessage.innerHTML = 'Congratulations! You won!';
                        success.style.display = 'flex';
                        computer.innerHTML = '';
                        outside.innerHTML = ++outside.innerHTML;
                        winner.innerHTML = outside.innerHTML;
                        setTimeout(() => {
                            success.style.display = 'none'
                        }, 3000);
                        clearDeck();
                        console.log(values.length)
                    }
            
                    console.log(' ')
            
                break;

                
            }
        }
    }
})

function clearDeck() {
    played_cards.style.display = 'none';
    computer.innerHTML = '';
    player.innerHTML = '';
    market.style.display = 'none';
    caster.style.display = 'flex';
    let tempCards = Array.from(document.getElementsByClassName('computer-card'));
    tempCards.forEach((card)=>{
        card.style.display = 'none'
    })
    computer.style.display = 'none';
}
clearDeck();


market.addEventListener('click', ()=>{
    let marketNum = getRandomValues(numArray.length);
    let marketElem = getRandomValues(elemArray.length);
    let activeArr = Array.from(document.getElementsByClassName('player-card'));
    activeArr.forEach((arr)=>{
        arr.classList.remove('active');
    })

    let market_card = document.createElement('div');
    market_card.classList.add('player-card');
    market_card.style.cssText = `background-image: url("${elemArray[marketElem]}")`;
    market_card.addEventListener('click', (e)=>{
        let tempArray = Array.from(document.getElementsByClassName('player-card'));
        tempArray.forEach((temppy)=>{
            temppy.classList.remove('active')
        })
        e.target.classList.add('active')
        player_storeNum = e.target.firstChild.innerHTML;
        player_storeElem = e.target.style.backgroundImage;
    })

    let market_number = document.createElement('p');
    market_number.classList.add('number');
    if (market_card.style.backgroundImage == avatar) {
        market_number.innerHTML = ``;
    } else {
        market_number.innerHTML = `${numArray[marketNum]}`;
    }

    market_card.appendChild(market_number);
    player.appendChild(market_card);
    autoplay();
})



function checking(e) {
    if (player_storeNum < played_number) {
        losing();
        clearDeck();
    } else{
        display(e);
    }
}


function display(e) {
    played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
    e.target.children[0].innerHTML = player_storeNum;
    document.getElementsByClassName('active').item(0).classList.add('none');
    autoplay();
}

function losing() {
    successMessage.innerHTML = 'You Lost!';
    success.style.display = 'flex';
    computer.innerHTML = '';
    setTimeout(() => {
        success.style.display = 'none'
        }, 3000)
}

function autoplay() {
    let tempa = played_cards.style.backgroundImage;
    let tempb = played_cards_number.innerHTML;
    // for (const card of computer_cards) {
    //     if (card.element == tempa) {
    //         // console.log(tempa);
    //         playable.push(card);
    //         console.log(playable);
    //         // console.log(playable);
    //         console.log(tempb);
    //         localStorage.setItem('playable', JSON.stringify(playable))
    //     }
    //     return playable;
    // }
    playable = []
    // verificationOne(computer_cards, tempa, playable).then((res)=>{
    // });
    verificationThree(computer_cards, tempa, tempb);


    // let ckkk = Array.from(document.getElementsByClassName('computer-card'));
    // ckkk.push
}


function innerStress(array, blah, blahIndex) {
    array.forEach((arr)=>{
        if (arr.element === played_cards.style.backgroundImage) {
                console.log('works');
                blah.push(arr);
                blahIndex.push(array.indexOf(arr))
                console.log(blahIndex);
                console.log(blah.length);
                console.log(blah);
                
            // }
        } else {
            delete array[arr]
        }
    });
    return(blah)
}

function stresser(array, tempa, tempb, shown) {
    switch (array) {
        case []:
            console.log(workJor);
            let va = document.createElement('div');
            va.classList.add('computer-card');
            va.innerHTML = '<p class="title">A</p>';
            computer.appendChild(va);
            let whatevsNum = getRandomValues(numArray.length);
            let whatevsElem = getRandomValues(elemArray.length);
            let ve = {
                element: `url("${elemArray[whatevsElem]}")`,
                number: `url("${numArray[whatevsNum]}")`
            };
            computer_cards.push(ve)
            shown = ++shown;
            computer.innerHTML = '';
            for (let i = 0; i < shown; i++) {
                let card = document.createElement('div');
                card.innerHTML = '<p class = "title">A</p>';
                card.classList.add('computer-card');
                computer.appendChild(card);  
            }   
            break;
    
        default:
     
            innerStress(array, blah, blahIndex)
            console.log('inner stress');
            if (blah.length > 0) {
                
                    let workJor = getRandomValues(numArray.length); 
                    setTimeout(() => {
                        console.log(blah);
                        
                        if (blah == undefined) {
                            let va = document.createElement('div');
                            va.classList.add('computer-card');
                            va.innerHTML = '<p class="title">A</p>';
                            computer.appendChild(va);
                            let whatevsNum = getRandomValues(numArray.length);
                            let whatevsElem = getRandomValues(elemArray.length);
                            let ve = {
                                element: `url("${elemArray[whatevsElem]}")`,
                                number: `url("${numArray[whatevsNum]}")`
                            };
                            computer_cards.push(ve)
                        } else {
                            if (tempa == avatar) {
                                played_cards_number.innerHTML = ``;
                                if (shown - 1 == 0) {
                                    setTimeout(() => {
                                        computer.style.display = 'none';
                                        successMessage.innerHTML = 'You Lost!';
                                        success.style.display = 'flex';
                                        computer.innerHTML = '';
                                        clearDeck();
                                    }, 2000);
                                    setTimeout(() => {
                                        success.style.display = 'none'
                                    }, 3000);
                                } 
                                else {
                                    shown = shown - 1;
                                        computer.innerHTML = '';
                                        for (let i = 0; i < shown; i++) {
                                            let card = document.createElement('div');
                                            card.innerHTML = '<p class = "title">A</p>';
                                            card.classList.add('computer-card');
                                            computer.appendChild(card);   
                                        }
                                }
                            } else {
                                if (workJor >= played_cards_number.innerHTML) {

                                    played_cards_number.innerHTML = `${workJor}`;
                                    computer_cards.splice(`${computer_cards.indexOf(`${blah[0]}`)}`, 1);

                                    if (shown - 1 == 0) {
                                        setTimeout(() => {
                                            computer.style.display = 'none';
                                            successMessage.innerHTML = 'You Lost!';
                                            success.style.display = 'flex';
                                            computer.innerHTML = '';
                                            clearDeck();
                                        }, 2000);
                                        setTimeout(() => {
                                            success.style.display = 'none'
                                        }, 3000);
                                    } 
                                    else {
                                        shown = shown - 1;
                                        computer.innerHTML = '';
                                        for (let i = 0; i < shown; i++) {
                                            let card = document.createElement('div');
                                            card.innerHTML = '<p class = "title">A</p>';
                                            card.classList.add('computer-card');
                                            computer.appendChild(card);   
                                        }
                                    }



                                } else {
                                    let va = document.createElement('div');
                                    va.classList.add('computer-card');
                                    va.innerHTML = '<p class="title">A</p>';
                                    computer.appendChild(va);
                                    let whatevsNum = getRandomValues(numArray.length);
                                    let whatevsElem = getRandomValues(elemArray.length);
                                    let ve = {
                                        element: `url("${elemArray[whatevsElem]}")`,
                                        number: `url("${numArray[whatevsNum]}")`
                                    };
                                    computer_cards.push(ve)
                                    
                                }

                                
                            }
                        }
                    }, 3000);
                    
            } else {
                
                console.log('elsing');
                let va = document.createElement('div');
                va.classList.add('computer-card');
                va.innerHTML = '<p class="title">A</p>';
                computer.appendChild(va);
                let whatevsNum = getRandomValues(numArray.length);
                let whatevsElem = getRandomValues(elemArray.length);
                let ve = {
                    element: `url("${elemArray[whatevsElem]}")`,
                    number: `url("${numArray[whatevsNum]}")`
                };
                computer_cards.push(ve)
                shown = ++shown;

                setTimeout(() => {
                    computer.innerHTML = '';
                    for (let i = 0; i < shown; i++) {
                        let card = document.createElement('div');
                        card.innerHTML = '<p class = "title">A</p>';
                        card.classList.add('computer-card');
                        computer.appendChild(card);   
                    }     
                }, 3000);
            }
            
        break;
        }
}

function verificationThree(array, tempa, tempb) {
    let compArray = Array.from(document.getElementsByClassName('computer-card'))
    let showing = compArray.length;
    let shown = showing;
    stresser(array, tempa, tempb, shown)
}