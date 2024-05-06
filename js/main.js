let history = [];
var historyIndex = -1;
var terminal = document.getElementById('terminal')
var input = document.getElementById('input');
var commands = ['ls', 'exit', 'clear', 'help', 'whois', 'projects', 'history', 'socials', 'socials -linkedin', 'socials -github', 'socials -cvdutch', 'socials -cvenglish', 'socials -email']; 


// Print the start message ASCII art
window.onload = function() {
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

// Focus on the input line when a key is pressed
document.addEventListener('keydown', function(event) {
    if (document.activeElement !== input) {
        input.focus();
    }
});

//type on the terminal
function typeOut(textarea, event) {
    var writter = document.getElementById('writter');
    writter.textContent = textarea.value;

}

// Handle keydown events
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
        case 9: // Tab key
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

// Run the command
//TODO: Add projects command
//TODO: And project -[projectName] functionality
//TODO: Add exit functionality
//TODO: Thinking about cd/ls functionality (maybe using a dictionary with directories and files?)

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
            if(cmd.toLowerCase().startsWith('socials')){
                if(cmd.toLowerCase().trim() === 'socials'){
                    printLine("socials");
                    printOutput(socials);
                    break;
                } else {
                    opensocial(cmd);
                    break;
                }
            } else {
                printLine(cmd.toLowerCase());
                printOutput(notFound);
                break;
            }
            
    }
}

// Open social media links
function opensocial(cmd) {
    var social = cmd.split(' ')[1].toLowerCase();
    var actions = {
        '-linkedin': {
            message: "Opening LinkedIn...<br></br>",
            action: linkedin
        },
        '-github': {
            message: "Opening GitHub...<br></br>",
            action: github
        },
        '-cvdutch': {
            message: "Opening Dutch CV...<br></br>",
            action: cvDutch
        },
        '-cvenglish': {
            message: "Opening English CV...<br></br>",
            action: cvEnglish
        },
        '-email': {
            action: copyEmail
        }
    };

    var action = actions[social];
    if (action) {
        printLine(cmd.toLowerCase());
        action.message && printOutput([action.message]);
        if (action.action !== copyEmail) {
            setTimeout(function() { window.open(action.action, '_blank'); }, 1500);
        } else {
            copyEmail();
        }
    } else {
        printLine(cmd.toLowerCase());
        printOutput(notFound);
    }
}

// Copy email to clipboard
function copyEmail(){
    navigator.clipboard.writeText('maxyuji.vandeput@gmail.com')
    .then(() => {
        printOutput(copiedMsg)
    })
    .catch(err => {
        printOutput("Failed to copy email to clipboard.")
    });
}

// Clear the terminal
function clear(){
    terminal.innerHTML = '';
}

// Print the command line (guest@MX-Shell:~$ command)
function printLine(cmd){
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

// Print the output of the command
function printOutput(cmd){
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