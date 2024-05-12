let history = [];
var historyIndex = -1;
var terminal = document.getElementById('terminal')
var input = document.getElementById('input');
var commands = ['ls', 'exit', 'clear', 'reload', 'help', 'help more','whois', 'history', 'socials', 'socials -linkedin', 'socials -github', 'socials -cvdutch', 'socials -cvenglish', 'socials -email', 'projects', 'projects -trackngrow', 'projects -trackngrow -open', 'projects -mxshell', 'projects -mxshell -open', 'projects -chace', 'projects -stace']; 


// Print the start message ASCII art
window.onload = function () {
    document.getElementById('prompt').innerHTML = 'guest@MX-Shell:<span class="path">' + parseCurrentDir() + '</span>$';
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
        window.scrollTo(0,document.body.scrollHeight);

    }
});

//type on the terminal
function typeOut(textarea, event) {
    var writter = document.getElementById('writter');
    writter.textContent = textarea.value;

}

// Run when clicked on the input line 
function startTyping() {
    input.focus();
}

// Handle keydown events
function handleKeydown(textarea, event) {
    window.scrollTo(0,document.body.scrollHeight);
    switch(event.keyCode){
        case 13: // Enter key
            event.preventDefault();
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
            if (textarea.value.toLowerCase().startsWith('cd ')) { 
                autoFillType("folder", "cd ");
            } else if (textarea.value.toLowerCase().startsWith('cat ')) {
                autoFillType("file", "cat ");
            } else {
                var inputValue = input.value.trim();
                for (var i = 0; i < commands.length; i++) {
                    if (commands[i].startsWith(inputValue)) {
                        input.value = commands[i];
                        break;
                    }
                }
            }
    }
    typeOut(textarea);
}

function command(cmd){
    switch(cmd.toLowerCase()){
        case 'help':
            printLine("help");
            printOutput(help);
            break;
        case 'help more':
            printLine("help more");
            printOutput(helpMore);
            break;
        case 'whois':
            printLine("whois");
            printOutput(whois);
            break;
        case 'history':
            printLine("history");
            printOutput(history);
            break;
        case 'clear':
            clear();
            break;
        case 'exit':
            printLine("exit");
            printOutput(["Exiting MX-Shell...<br></br>"]);
            setTimeout(function() { window.location.href = '../index.html'; }, 1500);
            break;
        case 'ls':
            printLine("ls");
            ls();
            break;
        case 'reload':
            location.reload();
            break;
        default:
            if(cmd.toLowerCase().startsWith('socials')){
                if(cmd.toLowerCase().trim() === 'socials'){
                    printLine("socials");
                    printOutput(socials);
                    break;
                } else {
                    openLink(cmd);
                    break;
                }
            } else if(cmd.toLowerCase().startsWith('projects')){
                if(cmd.toLowerCase().trim() === 'projects'){
                    printLine("projects");
                    printOutput(projects);
                    break;
                } else {
                    if (cmd.toLowerCase().includes('-open')) {
                        openLink(cmd);
                        break;
                    }else{
                        proj = cmd.split(' ')[1].toLowerCase();
                        printLine("projects " + proj);
                        printOutput(linkProjToVar(proj));
                        break;
                    }
                    
                } 
            } else if (cmd.toLowerCase().startsWith('cd')) {
                printLine(cmd.toLowerCase());
                cd(cmd.split(' ')[1]);
                break;
            } else if (cmd.toLowerCase().startsWith('cat')) {
                printLine(cmd.toLowerCase());
                cat(cmd.split(' ')[1]);
                break;
            } else {
                printLine(cmd.toLowerCase());
                printOutput(notFound);
                break;
            }
            
    }
}

// Open social or project link
function openLink(cmd) {
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
        },
        '-trackngrow': {
            message: "Opening TracknGrow...<br></br>",
            action: trackngrow
        },
        '-mxshell': {
            message: "Opening MX-Shell...<br></br>",
            action: mxshell
        },
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
    p.innerHTML = 'guest@MX-Shell:<span class="path">' + parseCurrentDir() + '</span>$ ';
    p.classList.add('prompt');
    var span = document.createElement('span');
    span.className = 'nrmlText';
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