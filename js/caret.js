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
    var onScreenCoords = getOnScreenCoords(part2);
    var width = onScreenCoords.width;
    caret.style.left = "-"+width+"px";
}

function getOnScreenCoords(text){
    var span = document.createElement('span');
    span.textContent = text;
    document.body.appendChild(span);
    var coords = span.getBoundingClientRect();
    document.body.removeChild(span);
    return coords;
}

