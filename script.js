console.log('Hello World')

var my_element = document.getElementById("about");

let aboutNavElement = document.querySelector('.about-nav')
let experienceNavElement = document.querySelector('.experience-nav')
let projectsNavElement = document.querySelector('.projects-nav')
let contactNavElement = document.querySelector('.contact-nav')

aboutNavElement.addEventListener('click', gotoSectionAbout)
experienceNavElement.addEventListener('click', gotoSectionExperience)
projectsNavElement.addEventListener('click', gotoSectionProjects)
contactNavElement.addEventListener('click', gotoSectionContact)


function gotoSectionAbout () {
    document.querySelector('#about').scrollIntoView();
}

function gotoSectionExperience () {
    document.querySelector('#experience').scrollIntoView();
}

function gotoSectionProjects () {
    document.querySelector('#projects').scrollIntoView();
}

function gotoSectionContact () {
    document.querySelector('#contact').scrollIntoView();
}
