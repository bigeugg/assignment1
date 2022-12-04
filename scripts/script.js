function clickHandler(event) {
    console.log("clicked", event.target.textContent)
    if ((event.target.textContent === "Dark Theme") || (event.target.textContent === "Light Theme"))//background color is pressed //make sure its the same exact wording as the button
    {
        changeBGcolor();
    }
}

function changeBGcolor() {
    document.body.style.backgroundColor("darkBG"); //add the css of background color too!!!
}

function changeBGcolor() {
    document.body.classList.toggle("darkMode");
    var element = document.getElementById('aside');
    element.classList.toggle('darkSidebar');
    var textArea = document.getElementById('textArea');
    textArea.classList.toggle('darkTextArea');
}

function textChange() {
    if (btn.textContent === 'Dark Theme') {
        btn.textContent = 'Light Theme';
    }
    }

    function changeButtonColor(){
        var btn1 = document.getElementById('button1')
        btn1.classList.toggle('darkBlue')
        btn1.classList.toggle('button1')
        var btn2 = document.getElementById('button2')
        btn2.classList.toggle('darkPurple')
        btn2.classList.toggle('button2')
        var btn3 = document.getElementById('button3')
        btn3.classList.toggle('darkBlue')
        btn3.classList.toggle('button3')
        var btn4 = document.getElementById('button4')
        btn4.classList.toggle('darkRed')
        btn4.classList.toggle('button4')
    }


    