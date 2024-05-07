//TODO: cd/ls functionality (maybe using a dictionary with directories and files?)

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
                content: {
                    "secret.mp4": {
                        type: "link",
                        content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                }
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


function cd(dirPath) {
    
}

function parseCurrentDir() {
    var path = "";
    for (var i = 0; i < currentDir.length; i++) {
        path += "/" + currentDir[i];
    }
    return path.slice(1);
}