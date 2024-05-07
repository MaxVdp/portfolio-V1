
var currentDir = ["~"];

var dir = {
    "~": {
        type: "folder",
        content: {
            "Applications": {
                type: "folder",
                content: {},
            },
            "Documents": {
                type: "folder",
                content: {
                    "coding_projects": {
                        type: "folder",
                        content: {
                            "index.html": {
                                type: "file",
                                content: [
                                    "<!DOCTYPE html>",
                                    "<html>",
                                    "    <head>",
                                    "        <title>Portfolio</title>",
                                    "    </head>",
                                    "    <body>",
                                    "        <h1>Hello world!</h1>",
                                    "    </body>",
                                    "</html>",
                                ]
                            },
                        }
                    },
                },
            },
            "Downloads": {
                type: "folder",
                content: {}
            },
            "Music": {
                type: "folder",
                content: {}
            },
            "Pictures": {
                type: "folder",
                content: {}
            },
            "Videos": {
                type: "folder",
                content: {}
            },
        }
        }
};

function ls() {
    var current = dir;

    // Navigate to the current directory
    for (var i = 0; i < currentDir.length; i++) {
        current = current[currentDir[i]].content;
    }

    // Collect the names of all items in the current directory
    var items = [];
    for (var item in current) {
        items.push(item);
    }

    // Print the items
    printOutput(items);
}


//TODO: Implement the cd function, cd .., cd path
function cd(dirPath) {
    if (dirPath === "..") {
        // Go up one level, unless we're already at the root
        if (currentDir.length > 1) {
            currentDir.pop();
        }
    } else if (dirPath) {
        // Navigate to the specified directory, if it exists
        var current = dir;

        // Check if the directory exists
        for (var i = 0; i < currentDir.length; i++) {
            current = current[currentDir[i]].content;
        }

        // Convert dirPath to the correct case
        var keys = Object.keys(current);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i].toLowerCase() === dirPath.toLowerCase()) {
                dirPath = keys[i];
                break;
            }
        }

        // Check if dirPath is a folder
        if (dirPath in current && current[dirPath].type === "folder") {
            currentDir.push(dirPath);
        }
    }
    document.getElementById('prompt').innerHTML = 'guest@MX-Shell:<span class="path">' + parseCurrentDir() + '</span>$';
}

function parseCurrentDir() {
    var path = "";
    for (var i = 0; i < currentDir.length; i++) {
        path += "/" + currentDir[i];
    }
    return path.slice(1);
}


function autoFillCD() {
    // Navigate to the current directory
    var current = dir;
    for (var i = 0; i < currentDir.length; i++) {
        current = current[currentDir[i]].content;
    }

    // Collect the names of all items in the current directory
    var items = [];
    for (var item in current) {
        if (current[item].type === "folder") {
            items.push(item.toLowerCase());
        }
    }
  

    var inputValue = input.value.replace("cd ", "");
    for (var i = 0; i < items.length; i++) {
        if (items[i].startsWith(inputValue.toLowerCase())) {
            input.value = "cd " + items[i];
            break;
        }
    }   
}

function cat(file) {
    var current = dir;
    for (var i = 0; i < currentDir.length; i++) {
        current = current[currentDir[i]].content;
    }

    if (file in current && current[file].type === "file") {
        printFile(current[file].content);
    } else {
        printFile(["cat: '" + file + "': No such file"]);
    }

}


function printFile(file) {
    var div = document.createElement('div');
    div.className = 'outputSection';
    for(var i = 0; i < file.length; i++){
        (function(index) {
            setTimeout(function(){
                var p = document.createElement("p");
                p.innerText = file[index];
                div.appendChild(p);
                window.scrollTo(0,document.body.scrollHeight);
            }, index * 100);
        })(i);
    }
    terminal.appendChild(div);
}