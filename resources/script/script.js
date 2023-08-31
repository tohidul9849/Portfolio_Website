

const aboutMe = () => {
    document.getElementById('about-me').style.backgroundColor = 'beige';
    document.getElementById('projects').style.backgroundColor = '';
    document.getElementById('skills').style.backgroundColor = '';
    document.getElementById('contact-me').style.backgroundColor = '';
}

const projects = () => {
    document.getElementById('about-me').style.backgroundColor = '';
    document.getElementById('projects').style.backgroundColor = 'beige';
    document.getElementById('skills').style.backgroundColor = '';
    document.getElementById('contact-me').style.backgroundColor = '';
}



const skills = () => {
    document.getElementById('about-me').style.backgroundColor = '';
    document.getElementById('projects').style.backgroundColor = '';
    document.getElementById('skills').style.backgroundColor = 'beige';
    document.getElementById('contact-me').style.backgroundColor = '';
}

const contact = () => {
    document.getElementById('about-me').style.backgroundColor = '';
    document.getElementById('projects').style.backgroundColor = '';
    document.getElementById('skills').style.backgroundColor = '';
    document.getElementById('contact-me').style.backgroundColor = 'beige';
}

document.getElementById('about-button').onclick = aboutMe;
document.getElementById('projects-button').onclick = projects;
document.getElementById('skills-button').onclick = skills;
document.getElementById('contact-me-button').onclick = contact;
