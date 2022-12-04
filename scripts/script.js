function clickHandler(event) {
    console.log("clicked", event.target.textContent)
    if ((event.target.textContent === "Dark Theme") || (event.target.textContent === "Light Theme"))//background color is pressed //make sure its the same exact wording as the button
    {
        changeBGcolor();
        changeButtoncolor();
    }
}

function changeBGcolor() {
    document.body.classList.toggle("darkMode");
    var element = document.getElementById('aside');
    element.classList.toggle('darkSidebar');
    var textArea = document.getElementById('textArea');
    textArea.classList.toggle('darkTextArea');
}