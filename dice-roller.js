let dado1 = ''
let dado2 = ''
let score = []
let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let results = document.getElementById('container')
let explainAside = document.getElementById('content-explain__item')

function rollDices(){
    count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for (let i = 0; i < 1000; i++){
        dado1 = Math.floor(Math.random() * 6) + 1  
        dado2 = Math.floor(Math.random() * 6) + 1  
        dadoSum = dado1 + dado2
        score.push(`${i+1}º vez`)
        count[dadoSum] = count[dadoSum] + 1
    }
    createDiv(count)
}

function createDiv(dados){
    for (let i = 2; i < dados.length; i++) {
        let bar = document.createElement('div');
        bar.innerText = `${dados[i]}`
        bar.style.height = `${dados[i]}px`;
        bar.style.background = `${getColor()}`
        bar.style.cursor = "pointer"
        bar.addEventListener('click', function explain(){
            explainAside.innerText = ''
            explainAside.style.background = `${getColor()}`
            explainAside.style.top = 0
            explainAside.style.borderRadius = "8px"
            explainAside.style.textAlign = "center"
            let explainContent = document.createElement('div')
            explainContent.innerText = `This bar of the graph receives ${dados[i]} times the sum of the dices whose sum is always ${i} of 1000 rolling dices.`
            explainAside.appendChild(explainContent)
        })
        results.appendChild(bar)
    }
   
}

function getColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgba(${r}, ${g}, ${b},.6)`;
}


// CUBE

let cube = document.getElementById('cube')
cube.addEventListener('click', function cubeRandom(){
    let xRand = Math.floor(Math.random() * 380) + 1 
    let yRand = Math.floor(Math.random() * 380) + 1 
    cube.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`
    results.innerText = "" 
    rollDices()
})

