const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

function createDivs(col, rows){
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid purple'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows})`;
        container.appendChild(div).classList.add('box')
    }
}
createDivs(16, 16)

function grayColor(){
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random()* 255)
            box.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
        }))
    })

    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()

function blackColor(){
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor()

function rgbColor(){
    const boxs = document.querySelectorAll('.box')
    btnRgb.textContent = 'RGB'
    btnRgb.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () =>{
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R}, ${G}, ${B})`;
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn')
}
rgbColor()

function reset(){
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box =>{
        box.remove()
    })
}

function reSize(){
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('what grid size do you want?')
        if(user === nul || user < 1) {
            reset();
            createDivs(16, 16);
            grayColor();
            blackColor();
            rgbColor();

        } else{
            reset();
            createDivs(user, user);
            grayColor();
            blackColor();
            rgbColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize();
