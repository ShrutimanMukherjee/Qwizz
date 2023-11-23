<<<<<<< HEAD
function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);

    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
    const questionElement = document.getElementById('question');
    questionElement.style.color = !wasDarkmode ? 'white' : 'black';

    const progressTextElement = document.getElementById('progressText');
    progressTextElement.style.color = !wasDarkmode ? 'white' : 'black';
    const hudPrefixElement = document.getElementsByClassName('hud-prefix');
    for (let i = 0; i < hudPrefixElement.length; i++) {
        hudPrefixElement[i].style.color = !wasDarkmode ? 'white' : 'black';
    }
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    const questionElement = document.getElementById('question');
    questionElement.style.color = localStorage.getItem('darkmode') === 'true' ? 'white' : 'black';

    const progressTextElement = document.getElementById('progressText');
    progressTextElement.style.color = localStorage.getItem('darkmode') === 'true' ? 'white' : 'black';
    const hudPrefixElement = document.getElementsByClassName('hud-prefix');
    for (let i = 0; i < hudPrefixElement.length; i++) {
        hudPrefixElement[i].style.color = localStorage.getItem('darkmode') === 'true' ? 'white' : 'black';
    }
}
=======
function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);

    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
    const questionElement = document.getElementById('question');
    questionElement.style.color = !wasDarkmode ? 'white' : 'black';

    const progressTextElement = document.getElementById('progressText');
    progressTextElement.style.color = !wasDarkmode ? 'white' : 'black';
    const hudPrefixElement = document.getElementsByClassName('hud-prefix');
    for (let i = 0; i < hudPrefixElement.length; i++) {
        hudPrefixElement[i].style.color = !wasDarkmode ? 'white' : 'black';
    }
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    const questionElement = document.getElementById('question');
    questionElement.style.color = localStorage.getItem('darkmode') === 'true' ? 'white' : 'black';

    const progressTextElement = document.getElementById('progressText');
    progressTextElement.style.color = localStorage.getItem('darkmode') === 'true' ? 'white' : 'black';
    const hudPrefixElement = document.getElementsByClassName('hud-prefix');
    for (let i = 0; i < hudPrefixElement.length; i++) {
        hudPrefixElement[i].style.color = localStorage.getItem('darkmode') === 'true' ? 'white' : 'black';
    }
}
>>>>>>> d4ca64730ca2fac0d28d8c5e31843075f5dd59db
