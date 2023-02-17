fetch("http://localhost:3000/produce")
    .then(r => r.json())
    .then(produceArray => {
        produceArray.forEach(makeProduceObj)
    })

const summerDiv = document.getElementById('summer')
const fallDiv = document.getElementById('fall')
const winterDiv = document.getElementById('winter')
const springDiv = document.getElementById('spring')

function makeProduceObj(someProduce) {
    const produceDiv = document.createElement('div')
    produceDiv.className = 'card'
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceBenefits = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceImage.alt = someProduce.name + ' image'
    produceVitamins.textContent = 'Vitamins & Nutrients: ' + someProduce.vitamins
    produceBenefits.textContent = 'Health Benefits: ' + someProduce.benefits

    produceDiv.append(produceName, produceImage, produceVitamins, produceBenefits)

    let seasonOne = someProduce.season
    if (seasonOne == 'summer') {
        summerDiv.append(produceDiv)
    } else if (seasonOne == 'spring') {
        springDiv.append(produceDiv)
    } else if (seasonOne == 'winter') {
        winterDiv.append(produceDiv)
    } else if (seasonOne == 'fall') {
        fallDiv.append(produceDiv)
    }
}

//hide and seek form
let addProduce = false

const addBtn = document.getElementById('new-produce-btn')
const form = document.getElementById('produce-form')

addBtn.addEventListener('click', () => {
    addProduce = !addProduce;
    if (addProduce) {
        form.style.display = 'flex';
        if (form.style.display = 'flex') {
            addBtn.textContent = 'Hide Form'
        }
    } else {
        form.style.display = 'none';
        if (form.style.display = 'none') {
            addBtn.textContent = 'Add New Produce'
        }
    }
})

//Form
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let seasonInput = e.target.season.value
    let nameInput = e.target.name.value
    let vitaminInput = e.target.vitamins.value
    let benefitInput = e.target.benefits.value
    let imageInput = e.target.image.value
    let seasonOne = seasonInput.toLowerCase()
    const newProduce = {
        name: nameInput,
        vitamins: vitaminInput,
        benefits: benefitInput,
        image: imageInput,
        season: seasonOne
    }

    if (nameInput == '' || vitaminInput == '' || benefitInput == '' || imageInput == '') {
        alert("Please fill in all fields.")
        return null;
    }


    if (seasonOne == 'summer') {
        alert("Your produce has been added to Summer!")
    } else if (seasonOne == 'spring') {
        alert("Your produce has been added to Spring!")
    } else if (seasonOne == 'winter') {
        alert("Your produce has been added to Winter!")
    } else if (seasonOne == 'fall') {
        alert("Your produce has been added to Fall!")
    } else {
        alert('Season must be: summer, spring, winter, or fall.')
        return null
    }

    makeProduceObj(newProduce)
    postToProduce(newProduce)
    e.target.reset()
})

// Mouseover Event
const summerProduce = document.getElementById('summerproduce')
const winterProduce = document.getElementById('winterproduce')
const fallProduce = document.getElementById('fallproduce')
const springProduce = document.getElementById('springproduce')

summerProduce.addEventListener('mouseover', () => {
    summerProduce.style.backgroundImage = 'url(https://images.unsplash.com/photo-1441981974669-8f9bc0978b64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
    console.log('mouseover')
})

summerProduce.addEventListener('mouseout', () => {
    summerProduce.style.backgroundImage = ''
})

winterProduce.addEventListener('mouseover', () => {
    winterProduce.style.backgroundImage = 'url(https://www.wilsonpeakproperties.com/custimages/Big_Sky_Resort_Winter.jpeg)'
})

winterProduce.addEventListener('mouseout', () => {
    winterProduce.style.backgroundImage = ''

})

fallProduce.addEventListener('mouseover', () => {
    fallProduce.style.backgroundImage = 'url(https://images.unsplash.com/photo-1509224863479-ab583ee78692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)'
})

fallProduce.addEventListener('mouseout', () => {
    fallProduce.style.backgroundImage = ''
})

springProduce.addEventListener('mouseover', () => {
    springProduce.style.backgroundImage = 'url(https://images.unsplash.com/photo-1587570575321-050120f1bb4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
})

springProduce.addEventListener('mouseout', () => {
    springProduce.style.backgroundImage = ''
})

// show cards on click
let addSummerCard = false
let addFallCard = false
let addSpringCard = false
let addWinterCard = false

const summerH2 = document.querySelector('#summerproduce h2')
const fallH2 = document.querySelector('#fallproduce h2')
const springH2 = document.querySelector('#springproduce h2')
const winterH2 = document.querySelector('#winterproduce h2')

summerProduce.addEventListener('click', () => {
    addSummerCard = !addSummerCard;
    if (addSummerCard) {
        summerDiv.style.display = 'block';
        summerH2.style.display = 'none';
    } else {
        summerDiv.style.display = 'none';
        summerH2.style.display = 'block';
    }
})

fallProduce.addEventListener('click', () => {
    addFallCard = !addFallCard;
    if (addFallCard) {
        fallDiv.style.display = 'block';
        fallH2.style.display = 'none';
    } else {
        fallDiv.style.display = 'none';
        fallH2.style.display = 'block';
    }
})

springProduce.addEventListener('click', () => {
    addSpringCard = !addSpringCard;
    if (addSpringCard) {
        springDiv.style.display = 'block';
        springH2.style.display = 'none';
    } else {
        springDiv.style.display = 'none';
        springH2.style.display = 'block';
    }
})

winterProduce.addEventListener('click', () => {
    addWinterCard = !addWinterCard;
    if (addWinterCard) {
        winterDiv.style.display = 'block';
        winterH2.style.display = 'none';
    } else {
        winterDiv.style.display = 'none';
        winterH2.style.display = 'block';
    }
})

//Post request
function postToProduce(e) {
    fetch('http://localhost:3000/produce', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(e),
    })
        .then(r => r.json())
        .then(e => console.log('success', e))
}