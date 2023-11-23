function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);

    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
    const questionElement = document.getElementById('question');
    questionElement.style.color = !wasDarkmode ? 'white' : 'black';
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    const questionElement = document.getElementById('question');
    questionElement.style.color = localStorage.getItem('darkmode') === 'true' ? 'white' : 'black';
}
