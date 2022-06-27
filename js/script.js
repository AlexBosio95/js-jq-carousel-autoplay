
// Array con le immagini
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let activeElement = 0;

const listItem = document.getElementById('list-img');

for (let index = 0; index < images.length; index++) {

    // creo un nuovo elemento img
    const newItem = document.createElement('img');

    //assegno l'attributo src 
    newItem.setAttribute('src', images[index]);
    newItem.classList.add('rounded-4')
    newItem.classList.add('shadow')

    listItem.append(newItem);
}


// Point selector carousel

const contenitorPoint = document.getElementById('point-selector');


for (let index = 0; index < images.length; index++) {
    const newPoint = document.createElement('div');
    newPoint.classList.add('point');

    if (index == activeElement) {
        newPoint.classList.add('ms_active')
    }

    contenitorPoint.append(newPoint);
}



// Bottoni per scorrere le immagini


// Prendo tutte le immagini
const containerPic = document.querySelectorAll('.carousel-image img');
const pointList = document.querySelectorAll('#point-selector .point')

// aggiungo la classe d-block per visualizzare il primo elemento 
containerPic[activeElement].classList.add('d-block');

// prendo il bottone next
const btnNext = document.getElementById("btn-next");

btnNext.addEventListener('click', function () {
    containerPic[activeElement].classList.remove('d-block');
    pointList[activeElement].classList.remove('ms_active')

    // vado avanti
    activeElement++

    if (activeElement === containerPic.length) {
        activeElement = 0;
    }

    containerPic[activeElement].classList.add('d-block');
    pointList[activeElement].classList.add('ms_active')

})

// prendo il bottone Previous
const btnPrev = document.getElementById("btn-previous");

btnPrev.addEventListener('click', function () {

    containerPic[activeElement].classList.remove('d-block');
    pointList[activeElement].classList.remove('ms_active')

    // vado indietro
    activeElement--

    if (activeElement === -1) {
        activeElement = containerPic.length - 1;
    }

    containerPic[activeElement].classList.add('d-block');
    pointList[activeElement].classList.add('ms_active')

})

setInterval(function(){

    containerPic[activeElement].classList.remove('d-block');
    pointList[activeElement].classList.remove('ms_active')

    // vado avanti
    activeElement++

    if (activeElement === containerPic.length) {
        activeElement = 0;
    }

    containerPic[activeElement].classList.add('d-block');
    pointList[activeElement].classList.add('ms_active')

}, 3000)









