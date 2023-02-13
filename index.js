 
fetch("http://localhost:3000/summer")
    .then(r => r.json())
    .then(summerArray => summerArray.forEach((summerItem) => {
        renderSummer(summerItem)
    }
    ))

fetch("http://localhost:3000/fall")
    .then(r => r.json())
    .then(fallArray => fallArray.forEach((fallItem) => {
        renderFall(fallItem)
    }
    ))

fetch("http://localhost:3000/winter")
    .then(r => r.json())
    .then(winterArray => winterArray.forEach((winterItem) => {
        renderWinter(winterItem)
    }
    ))

fetch("http://localhost:3000/spring")
    .then(r => r.json())
    .then(springArray => springArray.forEach((springItem) => {
        renderSpring(springItem)
    }
    ))

  
const summerDiv = document.getElementById('summer')
const fallDiv = document.getElementById('fall')
const winterDiv = document.getElementById('winter')
const springDiv = document.getElementById('spring')

let addProduce = false 
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('new-produce-btn')
    const form = document.getElementById('produce-form')

    addBtn.addEventListener('click', () => {
        addProduce = !addProduce;
        if (addProduce){
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    })

})



function renderSummer(someProduce) {
    const produceDiv = document.createElement('div')
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceGoodFor = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceVitamins.innerText = "Vitamins: " + someProduce.vitamins
    produceGoodFor.innerText = "Good For: " + someProduce['good-for']

    produceDiv.append(produceName, produceImage, produceVitamins, produceGoodFor)

    summerDiv.append(produceDiv)
}

function renderFall(someProduce) {
    const produceDiv = document.createElement('div')
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceGoodFor = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceVitamins.innerText = "Vitamins: " + someProduce.vitamins
    produceGoodFor.innerText = "Good For: " + someProduce['good-for']

    produceDiv.append(produceName, produceImage, produceVitamins, produceGoodFor)

    fallDiv.append(produceDiv)
}

function renderWinter(someProduce) {
    const produceDiv = document.createElement('div')
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceGoodFor = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceVitamins.innerText = "Vitamins: " + someProduce.vitamins
    produceGoodFor.innerText = "Good For: " + someProduce['good-for']

    produceDiv.append(produceName, produceImage, produceVitamins, produceGoodFor)

    winterDiv.append(produceDiv)
}

function renderSpring(someProduce) {
    const produceDiv = document.createElement('div')
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceGoodFor = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceVitamins.innerText = "Vitamins: " + someProduce.vitamins
    produceGoodFor.innerText = "Good For: " + someProduce['good-for']

    produceDiv.append(produceName, produceImage, produceVitamins, produceGoodFor)

    springDiv.append(produceDiv)
}