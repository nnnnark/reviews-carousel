let button = document.getElementsByClassName('but');
let name = document.getElementsByClassName('name');
let position = document.getElementsByClassName('position');
let review = document.getElementsByClassName('about');
let title = document.getElementsByClassName('title');
let page = 0;

let profile;
let prev = button[0];
let next = button[1];

const list = [
    {
        picture: 'profile-pictures/1.jpg',
        name: 'Alexander Mitchell',
        position: 'Web Developer',
        review: 'Outstanding developer! Exceptional skills, timely deliveries, and great communication. Transformed my ideas into a flawless website. Professionalism at its best. Highly recommended for any web development needs'
    },
    {
        picture: 'profile-pictures/2.jpg',
        name: 'Ethan Thompson',
        position: 'Data scientist',
        review: 'Incredible experience! Talented developer who brought my vision to life. Attention to detail, timely delivery, and superb communication. Exceeded expectations.'
    },
    {
        picture: 'profile-pictures/3.jpg',
        name: 'Patrick Scott',
        position: 'Back-end developer',
        review: 'Exceptional developer! Proficient in diverse technologies, delivers on time, and exceeds expectations. Seamless communication, innovative solutions, and attention to detail make them the go-to choice for any back-end project!'
    }
];

next.addEventListener('click', nextButt);
prev.addEventListener('click', prevButt);

window.onload = () =>{
    title[0].classList.add('appearTitleAnim')
    setTimeout(() =>{
        title[0].classList.remove('appearTitleAnim')}, 1990
    )

    profile = document.getElementsByClassName('profilePictures');
    profile[0].classList.add('appearAnim')
    setTimeout(() =>{
        profile[0].classList.remove('appearAnim')}, 1999
    )

    name[0].innerHTML = list[page].name;
    position[0].innerHTML = list[page].position;
    review[0].innerHTML = list[page].review;

}

function prevButt() {
    profile[0].classList.add('flipAnim')
    setTimeout(() =>{
        profile[0].classList.remove('flipAnim')}, 500
    )

    page--;
    if(page === -1){
        page = 2;
    }
    setTimeout(() =>{
        profile[0].src = list[page].picture;

    }, 100)
    name[0].innerHTML = list[page].name;
    position[0].innerHTML = list[page].position;
    review[0].innerHTML = list[page].review;
}

function nextButt() {
    profile[0].classList.add('flipAnim')
    setTimeout(() =>{
        profile[0].classList.remove('flipAnim')}, 500
    )

    page++;
    if(page === 3){
        page = 0;
    }
    setTimeout(() =>{
        profile[0].src = list[page].picture;
    }, 100)
    name[0].innerHTML = list[page].name;
    position[0].innerHTML = list[page].position;
    review[0].innerHTML = list[page].review;
}

