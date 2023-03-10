let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let elemArray = ['./avatarsymbols/fire-symbol.png', './avatarsymbols/air-symbol.png', './avatarsymbols/Water-symbol.png','./avatarsymbols/rock-symbol.png', './avatarsymbols/switch-symbol.png', './avatarsymbols/cancel-symbol.png', './avatarsymbols/regenerate-symbol.png'];

let air = 'url("./avatarsymbols/air-symbol.png")';
let fire = 'url("./avatarsymbols/fire-symbol.png")';
let earth = 'url("./avatarsymbols/rock-symbol.png")';
let water = 'url("./avatarsymbols/Water-symbol.png")';
let cancel = 'url("./avatarsymbols/cancel-symbol.png")';
let swap = 'url("./avatarsymbols/switch-symbol.png")';
let regenerate = 'url("./avatarsymbols/regenerate-symbol.png")';

// rgb(255, 9, 33) = cancel
// rgb(255, 120, 55) = fire
// rgb(67, 213, 220) = water
// rgb(122, 96, 92) = rock
// rgb(198, 234, 232) = air
// rgb(0, 165, 244) = swap
// rgb(148, 221, 104) = regenerate






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

const tenderBox = document.querySelector('.tenderBox');
const playerTenderValue = document.querySelector('.playerTenderInner');
const computerTenderValue = document.querySelector('.computerTenderInner');

let player_life = document.querySelector('.player-life').querySelector('.health-progress').querySelector('.actual-progress')
let computer_life = document.querySelector('.computer-life').querySelector('.health-progress').querySelector('.actual-progress')

let playerTender = 0;
let computerTender = 0;

let computer_storeNum;
let computer_storeNum_cards = [];
let computer_storeElem;
let computer_storeElem_cards = [];
let player_storeNum;
var player_storeElem;
var played_image;
var played_number = document.getElementById('played_number').innerText;

var computer_cards = [];
let playable_elem = [];
let playable_num = [];
let playable_num_pro = [];
let playable_elem_pro = [];
let plays = []

let leftOver = 50;

let list;
let values = [];
let forNowElem;
let forNowNum;

let carding;
let blah = [];
let blahIndex = [];

var timeout;

localStorage.setItem('plays', '0');

let tempStore = {
    prevELem: '',
    prevNum: 0,
    prevCompLife: '0%',
    prevPlayLife: '0%'
}

// let played_number = parseInt(played_cards_number.innerHTML);




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
        switch (elemindex) {
            case 0:
                player_card.classList.add('fire-style')
                break;
            case 1:
                player_card.classList.add('air-style')
                break;
            case 2:
                player_card.classList.add('water-style')
                break;
            case 3:
                player_card.classList.add('rock-style')
                break;
            case 4:
                player_card.classList.add('switch-style')
                break;
            case 5:
                player_card.classList.add('cancel-style')
                break;
            case 6:
                player_card.classList.add('regenerate-style')
                break;
        
            default:
                break;
        }
        // player_card.classList.add('regenerate-style');
        player_card.style.cssText = `background-image: url(${elemArray[elemindex]})`

        let number = document.createElement('p');
        number.classList.add('number');
        number.classList.add('player-number');
        if (player_card.style.backgroundImage == '') {
            number.innerHTML = ``;
        } else {
            number.innerHTML = `${numArray[numindex]}`;
        }

        player_card.addEventListener('click', (e)=>{
            // console.log(e.target.children[0].parentElement.style.backgroundImage);
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
            player_storeElem = e.target.children[0].parentElement.style.backgroundImage;
        })

        let computerCards = document.createElement('div');
        computerCards.classList.add('computer-card');
        computerCards.innerHTML = `<p class="title"><span style="color: rgb(255, 9, 33);">P</span><span style="color: rgb(255, 120, 55);">h</span><span style="color: rgb(67, 213, 220);">o</span><span style="color: rgb(122, 96, 92);">e</span><span style="color: rgb(198, 234, 232);">n</span><span style="color: rgb(0, 165, 244);">i</span><span style="color: rgb(148, 221, 104);">x</span></p>`;
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

    played_image = e.target.style.backgroundImage;
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
        
        if (played_image == player_storeElem) {
            if (player_storeElem == '') {
                played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                e.target.children[0].innerHTML = '';
                document.getElementsByClassName('active').item(0).classList.add('none');
                // autoplay();
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
                
        } else {

            switch (played_image) {
                case fire:
                console.log(played_image)    
                if (player_storeElem == air || player_storeElem == earth) {
                    checking('false');

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                    // if(values.length == 0){
                    //     ++w
                    //     successMessage.innerHTML = 'Congratulations! You won!';
                    //     success.style.display = 'flex';
                    //     computer.innerHTML = '';
                    //     outside.innerHTML = ++outside.innerHTML;
                    //     winner.innerHTML = outside.innerHTML;
                    //     setTimeout(() => {
                    //         success.style.display = 'none'
                    //     }, 3000);
                    //     clearDeck();
                    //     console.log(values.length)
                    // }
            
                    console.log(' ')
            
                    } else if (player_storeElem == swap) {
                        checkingPro('swap')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                
                    } else if (player_storeElem == cancel) {
                        checkingPro('cancel')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                
                    } else if (player_storeElem == regenerate) {
                        checkingPro('regenerate')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                
                    }else {
                        // success.style.display = 'flex';
                        // successMessage.innerHTML = 'You have to play a Fire, an Air or an Avatar card';
                        // setTimeout(() => {
                        //     success.style.display = 'none' 
                        // }, 3000);


                        checking('true');
                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                    }
                    
                break;
            
                case air:
                console.log(played_image)    
                if (player_storeElem == water || player_storeElem == fire) {
                        checking('false');

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                
                        console.log(' ')
                
                    } else if (player_storeElem == swap) {
                        checkingPro('swap')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                            // autoplay();

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
                    
                    } else if (player_storeElem == cancel) {
                        checkingPro('cancel')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                
                    } else if (player_storeElem == regenerate) {
                        checkingPro('regenerate')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                        checking('true');
                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                    }
                        
                break;
                
                case water:
                console.log(played_image)    
                if (player_storeElem == earth || player_storeElem == air) {
                        checking('false');

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                
                        console.log(' ')
            
                    } else if (player_storeElem == swap) {
                        checkingPro('swap')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');;
                        // autoplay();

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
                
                    } else if (player_storeElem == cancel) {
                        checkingPro('cancel')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                
                    } else if (player_storeElem == regenerate) {
                        checkingPro('regenerate')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                        checking('true');
                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                    }
                    
                break;

                case earth:
                console.log(played_image)    
                if (player_storeElem == fire || player_storeElem == water) {
                        checking('false');

                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                        
                        })
                
                        console.log(' ')
            
                    } else if (player_storeElem == swap) {
                        checkingPro('swap')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');;
                            // autoplay();

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
                
                    } else if (player_storeElem == cancel) {
                        checkingPro('cancel')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                
                    } else if (player_storeElem == regenerate) {
                        checkingPro('regenerate')
                        played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                        e.target.children[0].innerHTML = player_storeNum;
                        document.getElementsByClassName('active').item(0).classList.add('none');
                        // autoplay();
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
                        checking('true');
                        list.forEach((item)=>{
                            if (item.classList.contains('none')) {
                                item.style.display = 'none'
                            } else {
                                values.push(item);
                            }
                            
                        })
                    }
                    
                break;

                case swap:
                // checkingPro('swap');
                checkPlay(player_storeElem, e, player_storeNum)
                console.log(played_image)    
                // played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
                //     e.target.children[0].innerHTML = `${player_storeNum}`;
                //     played_number = player_storeNum;
                //     document.getElementsByClassName('active').item(0).classList.add('none');
                //     // autoplay();

                //     list.forEach((item)=>{
                //         if (item.classList.contains('none')) {
                //             item.style.display = 'none'
                //         } else {
                //             values.push(item);
                //         }
                        
                //     })
                    if(computer_life.style.height == '0%'){
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
                
                case cancel:
                // checkingPro('cancel')
                checkPlay(player_storeElem, e, player_storeNum);
                console.log(played_image)    
                    if(computer_life.style.height == '0%'){
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
                
                case regenerate:
                // checkingPro('regenerate')
                checkPlay(player_storeElem, e, player_storeNum);
                console.log(played_image)
                    if(computer_life.style.height == '0%'){
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
    switch (marketElem) {
        case 0:
            market_card.classList.add('fire-style')
            break;
        case 1:
            market_card.classList.add('air-style')
            break;
        case 2:
            market_card.classList.add('water-style')
            break;
        case 3:
            market_card.classList.add('rock-style')
            break;
        case 4:
            market_card.classList.add('switch-style')
            break;
        case 5:
            market_card.classList.add('cancel-style')
            break;
        case 6:
            market_card.classList.add('regenerate-style')
            break;
    
        default:
            break;
    }
    market_card.addEventListener('click', (e)=>{
        let tempArray = Array.from(document.getElementsByClassName('player-card'));
        tempArray.forEach((temppy)=>{
            temppy.classList.remove('active')
        })
        e.target.classList.add('active')
        player_storeNum = e.target.firstChild.innerHTML;
        player_storeElem = played_image;
    })

    let market_number = document.createElement('p');
    market_number.classList.add('number');
    market_number.innerHTML = `${numArray[marketNum]}`;

    market_card.appendChild(market_number);
    player.appendChild(market_card);
    leftOver = leftOver - 1;
    console.log(leftOver);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        currentOpponent = player_storeNum;
        computer_life.style.height = currentOpponent + '%';
        console.log('losing');
    }, 30000);

    marketCheck()
    autoplay();
})

function checkPlay(card, e, numb) {
    switch (card) {
        case fire:
            played_cards.style.cssText = `background: ${card}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
            e.target.children[0].innerHTML = `${numb}`;
            played_number = numb;
            document.getElementsByClassName('active').item(0).classList.add('none');
            autoplay();

            list.forEach((item)=>{
                if (item.classList.contains('none')) {
                    item.style.display = 'none'
                } else {
                    values.push(item);
                }
                
            })
            break;
    
        case water:
            played_cards.style.cssText = `background: ${card}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
            e.target.children[0].innerHTML = `${numb}`;
            played_number = numb;
            document.getElementsByClassName('active').item(0).classList.add('none');
            autoplay();

            list.forEach((item)=>{
                if (item.classList.contains('none')) {
                    item.style.display = 'none'
                } else {
                    values.push(item);
                }
                
            })
            break;
    
        case earth:
            played_cards.style.cssText = `background: ${card}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
            e.target.children[0].innerHTML = `${numb}`;
            played_number = numb;
            document.getElementsByClassName('active').item(0).classList.add('none');
            autoplay();

            list.forEach((item)=>{
                if (item.classList.contains('none')) {
                    item.style.display = 'none'
                } else {
                    values.push(item);
                }
                
            })
            break;
    
        case air:
            played_cards.style.cssText = `background: ${card}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
            e.target.children[0].innerHTML = `${numb}`;
            played_number = numb;
            document.getElementsByClassName('active').item(0).classList.add('none');
            autoplay();

            list.forEach((item)=>{
                if (item.classList.contains('none')) {
                    item.style.display = 'none'
                } else {
                    values.push(item);
                }
                
            })
            break;
    
        default:
            success.style.display = 'flex';
            successMessage.innerHTML = 'You have to play an elemental card or pick a card from market deck to proceed';
            setTimeout(() => {
                success.style.display = 'none';
            }, 3000);
            break;
    }
}



function checking(counter) {
    let currentLife = player_life.style.height;
    let currentOpponent = computer_life.style.height;
    if (localStorage.getItem('plays') == '0') {
        localStorage.setItem('plays', '1');
    } else {
        tempStore.prevELem = played_cards.style.backgroundImage;
        tempStore.prevNum = played_number;
        tempStore.prevCompLife = computer_life.style.height;
        tempStore.prevPlayLife = player_life.style.height;
    }
    if (counter == 'true') {
        if (player_storeNum == played_number) {
            display();
        } else if(player_storeNum < played_number) {
            currentLife = played_number - player_storeNum;
            player_life.style.height += currentLife + '%';
            display();
        } else {
            currentLife = player_storeNum - played_number;
            player_life.style.height += currentLife + '%';
            display();
        }
    } else if (player_storeNum < played_number) {
        // losing();
        // clearDeck();
        timeout = setTimeout(() => {
            currentOpponent = player_storeNum;
            computer_life.style.height += currentOpponent + '%';
            console.log('losing');
        }, 30000);
        display();
    } else {
        display();
    }
}
function checkingPro(func) {
    let currentLife = player_life.style.height;
    let currentOpponent = computer_life.style.height;
    if (func == 'swap') {
        if (player_storeNum < played_number) {
            // losing();
            // clearDeck();
            currentOpponent = played_number;
            computer_life.style.height = currentOpponent + '%';
            console.log('losing');
        } else {
            // display();
            currentOpponent = player_storeNum;
            computer_life.style.height = currentOpponent + '%';
        }
    } else if (func == 'cancel') {
        played_cards.style.cssText = `background: ${tempStore.prevELem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
        document.getElementById('played_number').innerText = tempStore.prevNum;
        computer_life.style.height = tempStore.prevCompLife;
        player_life.style.height = tempStore.prevPlayLife;
    } else if (func == 'regenerate') {
        currentOpponent = currentOpponent + played_number;
        currentLife = currentLife - played_number;
        computer_life.style.height = currentOpponent + '%';
        player_life.style.height = currentLife + '%';
    }
}


function display() {
    played_cards.style.cssText = `background: ${player_storeElem}; background-size: 70%, 50%; background-repeat: no-repeat; background-position: center; background-color: rgb(231, 230, 230)`;
    played_number = player_storeNum;
    document.getElementById('played_number').innerText = player_storeNum;
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

function marketCheck() {
    let playerNumbers = Array.from(document.getElementsByClassName('player-number'))
    
    computer_cards.forEach((card)=>{
        computerTender = parseInt(card.number) + computerTender;
    })
    if (leftOver === 0) {
        playerNumbers.forEach((num)=>{
            if (num.innerHTML == '') {
                num.innerHTML = 0
            } else {
                playerTender = playerTender + parseInt(num.innerHTML)
            }
        })
        successMessage.innerHTML = 'Tender!!!';
        successMessage.style.fontSize = '50px';
        success.style.display = 'flex';
        computer.innerHTML = '';
        player.style.display = 'none';
        outside.innerHTML = ++outside.innerHTML;
        winner.innerHTML = outside.innerHTML;
        setTimeout(() => {
            success.style.display = 'none'
            successMessage.style.fontSize = '30px';
            played_cards.style.display = 'none';
            computer.innerHTML = '';
            player.innerHTML = '';
            market.style.display = 'none';
            let tempCards = Array.from(document.getElementsByClassName('computer-card'));
            tempCards.forEach((card)=>{
                card.style.display = 'none'
            })
            computer.style.display = 'none';
            tenderBox.style.display = 'flex'
            
            setTimeout(() => {
                playerTenderValue.innerHTML = playerTender;
                computerTenderValue.innerHTML = computerTender;
                setTimeout(() => {
                    if (playerTender < computerTender) {
                        finished('You win!');
                    } else if (playerTender == computerTender) {
                        finished('There was a tie!');
                    } else { 
                        finished('You lost!');
                    }
                }, 2000);
            }, 2000);
        }, 3000);
    }
}

function finished(text) {
    clearTimeout(timeout)
    successMessage.innerHTML = text;
    success.style.display = 'flex';
    computer.innerHTML = '';
    tenderBox.style.display = 'none';
    computer_storeNum_cards = [];
    computer_storeElem_cards = [];
    computer_cards = [];
    setTimeout(() => {
        clearDeck();
        success.style.display = 'none'
    }, 2000); 
}

function computerMarket() {
    clearTimeout(timeout);

    if (computer_life.style.height == '') {
        computer_life.style.height = player_storeNum + '%';
        // player_life.style.height = least + '%';
        console.log(parseInt(computer_life.style.height));
    } else {
        computer_life.style.height = parseInt(computer_life.style.height) + parseInt(player_storeNum) + '%';
        // player_life.style.height = parseInt(player_life.style.height) + parseInt(least) + '%';
        console.log(parseInt(computer_life.style.height));
    }

    let newNum = numArray[getRandomValues(numArray.length)];
    let newElem = elemArray[getRandomValues(elemArray.length)];

    computer_storeNum_cards.push(newNum);
    computer_storeElem_cards.push(newElem);

    let computerCard = document.createElement('div');
    computerCard.classList.add('computer-card');
    computerCard.innerHTML = `<p class="title"><span style="color: rgb(255, 9, 33);">P</span><span style="color: rgb(255, 120, 55);">h</span><span style="color: rgb(67, 213, 220);">o</span><span style="color: rgb(122, 96, 92);">e</span><span style="color: rgb(198, 234, 232);">n</span><span style="color: rgb(0, 165, 244);">i</span><span style="color: rgb(148, 221, 104);">x</span></p>`;

    computer.appendChild(computerCard);
}

function autoplay() {
    let played_image = played_cards.style.backgroundImage;
    playable_elem = [];
    playable_num = [];

    if (computer_storeElem_cards.length == 0) {
        computerMarket();
    } else {
        switch (played_image) {
            case `url("${swap}")`:
                for (let i = 0; i < computer_storeElem_cards.length; i++) {
                    if (played_image == `url("${fire}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${water}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${air}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${earth}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    
                }
                if(playable_elem == []){
                    computerMarket();
                } else {
                    setTimeout(()=>{
                        stepTwo(playable_elem, playable_num);
                    }, 3000)
                }
                break;
            case `url("${cancel}")`:
                for (let i = 0; i < computer_storeElem_cards.length; i++) {
                    if (played_image == `url("${fire}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${water}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${air}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${earth}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    
                }
                if(playable_elem == []){
                    computerMarket();
                } else {
                    setTimeout(()=>{
                        stepTwo(playable_elem, playable_num);
                    }, 3000)
                }
                break;
            case `url("${regenerate}")`:
                for (let i = 0; i < computer_storeElem_cards.length; i++) {
                    if (played_image == `url("${fire}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${water}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${air}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    if (played_image == `url("${earth}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                    }
                    
                }
                if(playable_elem == []){
                    computerMarket();
                } else {
                    setTimeout(()=>{
                        stepTwo(playable_elem, playable_num);
                    }, 3000)
                }
                break;
        
            default:
                for (let i = 0; i < computer_storeElem_cards.length; i++) {
                    if (played_image == `url("${computer_storeElem_cards[i]}")`) {
                        playable_elem.push(computer_storeElem_cards[i])
                        console.log(computer_storeElem_cards[i]);
                        playable_num.push(i);
                        console.log(playable_elem, playable_num, 'default');
                    }
                }
                // console.log(playable_elem);
                // console.log(playable_num);
                if (playable_elem == []) {
                    for (let i = 0; i < computer_storeElem_cards.length; i++) {
                        if (`url("${computer_storeElem_cards[i]}")` == swap) {
                            playable_elem.push(computer_storeElem_cards[i]);
                            playable_num.push(i);
                        } else if (`url("${computer_storeElem_cards[i]}")` == cancel) {
                            playable_elem.push(computer_storeElem_cards[i]);
                            playable_num.push(i);
                        } else if(`url("${computer_storeElem_cards[i]}")` == regenerate) {
                            playable_elem.push(computer_storeElem_cards[i]);
                            playable_num.push(i);
                        } else if(played_image == fire) {
                            if (`url("${computer_storeElem_cards[i]}")` == water) {
                                playable_elem.push(computer_storeElem_cards[i]);
                                playable_num.push(i);
                            }
                        } else if(played_image == water) {
                            if (`url("${computer_storeElem_cards[i]}")` == fire) {
                                playable_elem.push(computer_storeElem_cards[i]);
                                playable_num.push(i);
                            }
                        } else if(played_image == air) {
                            if (`url("${computer_storeElem_cards[i]}")` == earth) {
                                playable_elem.push(computer_storeElem_cards[i]);
                                playable_num.push(i);
                            }
                        } else if(played_image == earth) {
                            if (`url("${computer_storeElem_cards[i]}")` == air) {
                                playable_elem.push(computer_storeElem_cards[i]);
                                playable_num.push(i);
                            }
                        }
                    }
                    console.log('if');
                    setTimeout(()=>{
                        stepTwo(playable_elem, playable_num);
                    }, 3000)
                } else {
                    console.log('else');
                    setTimeout(()=>{
                        stepTwo(playable_elem, playable_num);
                    }, 3000)
                }
    
                break;
        }
    }

}

function stepTwo(elem, num) {
    playable_elem_pro = [];
    playable_num_pro = [];
    if ((elem == [] && num == []) || (elem.length == 0 && num.length == 0)) {
        console.log('no cards');
        computerMarket();
    } else {
        for (let i = 0; i < num.length; i++) {
            if (played_number <= computer_storeNum_cards[num[i]]) {
                playable_num_pro.push(computer_storeNum_cards[num[i]]);
                playable_elem_pro.push(computer_storeElem_cards[num[i]]);
                console.log('playable_elem_pro:', playable_elem_pro, 'playable_num_pro:', playable_num_pro);
            }
            else{
                playable_num_pro = playable_num_pro;
                playable_elem_pro = playable_elem_pro;
            }     
        }
        console.log('cards');
        if (playable_elem_pro == [] || playable_num_pro == []) {
            computerMarket();
            console.log(playable_elem_pro, playable_num_pro, 'empty');
        } else {
            console.log(playable_elem_pro, playable_num_pro, 'full');
            stepThree(playable_num_pro, playable_elem_pro);
        }
    }
    
}

function stepThree(num_pro, elem_pro) {
    var currentLeast = num_pro[0];
    var currentIndex = 0;
    if (num_pro !== []) {
        for (let i = 0; i < num_pro.length; i++) {
            if (currentLeast > num_pro[i]) {
                currentLeast = num_pro[i];
                currentIndex = i;
            }
        }
        if (elem_pro == [] || num_pro == []) {
            console.log(elem_pro, currentIndex, currentLeast, 'empty');
            computerMarket();
        } else {
            console.log(elem_pro, currentIndex, currentLeast, 'full');
            stepFour(elem_pro, currentIndex, currentLeast, num_pro)
        }
    }
}

function stepFour(currentElem, index, least, num_pro) {
    if (currentElem !== []) {
        console.log(index);
    
        clearTimeout(timeout);
        console.log(parseInt(computer_life.style.height));
        if (computer_life.style.height == '') {
            computer_life.style.height = played_number + '%';
            player_life.style.height = least + '%';
            console.log(parseInt(computer_life.style.height));
        } else {
            computer_life.style.height = parseInt(computer_life.style.height) + parseInt(played_number) + '%';
            player_life.style.height = parseInt(player_life.style.height) + parseInt(least) + '%';
            console.log(parseInt(computer_life.style.height));
        }
    
        if (Boolean(currentElem[index])) {
            document.querySelector('#played_number').innerText = least;
            document.querySelector('.played-cards').style.backgroundImage = `url("${currentElem[index]}")`;
            played_number = least;
        } else {
            computerMarket();
        }
    
    
        computer_storeElem_cards.splice(computer_storeElem_cards.indexOf(num_pro[index]), 1);
        computer_storeNum_cards.splice(computer_storeNum_cards.indexOf(num_pro[index]), 1);
    
        computer.innerHTML = '';
        for (let i = 0; i < computer_storeElem_cards.length; i++) {
            if (computer_storeElem_cards[i] !== 'empty') {
                let computerCards = document.createElement('div');
                computerCards.classList.add('computer-card');
                computerCards.innerHTML = `<p class="title"><span style="color: rgb(255, 9, 33);">P</span><span style="color: rgb(255, 120, 55);">h</span><span style="color: rgb(67, 213, 220);">o</span><span style="color: rgb(122, 96, 92);">e</span><span style="color: rgb(198, 234, 232);">n</span><span style="color: rgb(0, 165, 244);">i</span><span style="color: rgb(148, 221, 104);">x</span></p>`;
        
                computer.appendChild(computerCards);
            }
        }
        timeout = setTimeout(() => {
            currentOpponent = player_storeNum;
            computer_life.style.height = currentOpponent + '%';
            console.log('losing');
        }, 30000);
    }
}
