let history = [];
var historyIndex = -1;

window.onload = function() {
    var terminal = document.getElementById('terminal');
    var div = document.createElement('div');
    div.className = 'outputSection';
    var lines = startMsg[0].split('\n'); // Split the input into lines
    for(var i = 0; i < lines.length; i++){
        (function(index) {
            setTimeout(function(){
                var pre = document.createElement("pre");
                pre.innerHTML = lines[index]; // Print each line separately
                div.appendChild(pre);
                terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom
            }, index * 100);
        })(i);
    }
    terminal.appendChild(div);
}

document.addEventListener('keydown', function(event) {
    var textarea = document.getElementById('input');
    if (document.activeElement !== textarea) {
        textarea.focus();
    }
});


var terminal = document.getElementById('terminal')
var input = document.getElementById('input');
var commands = ['ls', 'exit', 'clear', 'help', 'whois', 'projects', 'socials', 'history']; 

// Run when clicked on the input line 
function startTyping() {
    var textarea = document.getElementById('input');
    textarea.focus();
}


function typeOut(textarea, event) {
    var writter = document.getElementById('writter');
    writter.textContent = textarea.value;

}

function handleKeydown(textarea, event) {
    switch(event.keyCode){
        case 13: // Enter key
            var trimmedValue = textarea.value.trim();
            if (trimmedValue !== '') {
                command(trimmedValue);
                history.push(trimmedValue);
                historyIndex = -1; // Reset the history index
            }
            textarea.value = '';
            break;
        case 38: // Up arrow key
            event.preventDefault(); // Prevent default scrolling behavior
            if (history.length > 0 && historyIndex < history.length - 1) {
                historyIndex++;
                textarea.value = history[history.length - 1 - historyIndex];
            }
            break;
        case 40: // Down arrow key
            event.preventDefault(); // Prevent default scrolling behavior
            if (historyIndex > 0) {
                historyIndex--;
                textarea.value = history[history.length - 1 - historyIndex];
            } else if (historyIndex === 0) {
                historyIndex--;
                textarea.value = '';
            }
            break;
        case 9:
            event.preventDefault();
            var inputValue = input.value.trim();
            for (var i = 0; i < commands.length; i++) {
                if (commands[i].startsWith(inputValue)) {
                    input.value = commands[i];
                    break;
                }
            }
    }
    typeOut(textarea);
}


//Idea: socials -linkedin will open linked in in new tab instead of socials and then clicking on linkedin
function command(cmd){
    switch(cmd.toLowerCase()){
        case 'help':
            printLine("help");
            printOutput(help);
            break;
        case 'whois':
            printLine("whois");
            printOutput(whois);
            break;
        case 'projects':
            printLine("projects");
            printOutput(projects);
            break;
        case 'socials':
            printLine("socials");
            printOutput(socials);
            break;
        case 'history':
            printLine("history");
            printOutput(history);
            break;
        case 'clear':
            clear();
            break;
        case 'exit':
            break;
        case 'ls':
            printLine("ls");
            printOutput(ls);
            break;
        default:
            printLine(cmd.toLowerCase());
            printOutput(notFound);
            break;
    }
}

function printLine(cmd){
    var terminal = document.getElementById('terminal');
    var div = document.createElement('div');
    var p = document.createElement('p');
    p.textContent = 'guest@MX-Shell:~$ ';
    p.classList.add('prompt');
    var span = document.createElement('span');
    span.textContent = cmd;
    p.appendChild(span);
    div.appendChild(p);
    terminal.appendChild(div);
    window.scrollTo(0,document.body.scrollHeight);
}


function printOutput(cmd){
    var terminal = document.getElementById('terminal');
    var div = document.createElement('div');
    div.className = 'outputSection';
    for(var i = 0; i < cmd.length; i++){
        (function(index) {
            setTimeout(function(){
                var p = document.createElement("p");
                p.innerHTML = cmd[index];
                div.appendChild(p);
                window.scrollTo(0,document.body.scrollHeight);
            }, index * 100);
        })(i);
    }
    terminal.appendChild(div);
}

function copyEmail(){
    var email = document.getElementById('email');
    var range = document.createRange();
    range.selectNode(email);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    printOutput(copiedMsg);
}

function clear(){
    var terminal = document.getElementById('terminal');
    terminal.innerHTML = '';
}

