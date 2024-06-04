const bot = document.getElementById("bot"); // pegando o elemento pelo ID

bot.addEventListener("change", (e) => {  // adiciona um listener para "escutar" quando acontecer um evento
    document.body.classList.toggle("light-mode", e.target.checked) // alterna o body
    document.querySelectorAll('header, .container, .barra-menu, .introducao, .ambientacao, .pip-boy, .vault, img, h1, p, ul').forEach(element => {
        element.classList.toggle('light-mode', e.target.checked);
    });
});