var caret = document.getElementById('caret');
var writter = document.getElementById('writter');

input.addEventListener('keyup', function(){
    var caretPos = getCaretPos(this);
    moveCaret(caretPos);
});


function getCaretPos(element){
    var caretPos = 0;
    if (typeof element.selectionStart !== "undefined") {
        caretPos = element.selectionStart;
    }
    return caretPos;
}

function moveCaret(position){
    var writterText = writter.textContent;
    var part2 = writterText.slice(position, writterText.length);
    var width = getWidth(part2);
    caret.style.left = "-"+width+"px";
}

function getWidth(text){
    var span = document.createElement('span');
    span.textContent = text;
    document.body.appendChild(span);
    var info = span.getBoundingClientRect();
    document.body.removeChild(span);
    return info.width;
}

