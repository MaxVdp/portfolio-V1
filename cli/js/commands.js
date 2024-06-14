var linkedin = "https://www.linkedin.com/in/max-vandeput/";
var github = "https://www.github.com/MaxVdp";
var cvDutch = "../files/MaxVdp_Nederlands_cv.pdf";
var cvEnglish = "../files/MaxVdp_English_cv.pdf";
var email = "maxyuji.vandeput@gmail.com";
var trackngrow = "https://trackngrow.eu/";
var mxshell = "https://github.com/MaxVdp/portfolio";

function linkProjToVar(proj){
    switch(proj){
        case "-trackngrow":
            return tngInfo;
        case "-chace":
            return chaceInfo;
        case "-stace":
            return staceInfo;
        case "-mxshell":
            return mxshellInfo;
        default:
            return notFound;
    }
}
var startMsg = [
    
`                      
    __  ___                _    __                   __                     __ 
   /  |/  /____ _ _  __   | |  / /____ _ ____   ____/ /___   ____   __  __ / /_
  / /|_/ // __ \`/| |/_/   | | / // __ \`// __ \\ / __  // _ \\ / __ \\ / / / // __/
 / /  / // /_/ /_>  <     | |/ // /_/ // / / // /_/ //  __// /_/ // /_/ // /_  
/_/  /_/ \\__,_//_/|_|     |___/ \\__,_//_/ /_/ \\__,_/ \\___// .___/ \\__,_/ \\__/  
                                                         /_/          © 2024    


<p>Welcome to my terminal portfolio.</p>
<p>For a list of available commands, type <span class="outName">'help'</span>.</p><br></br>
`
]

var help = [
    '<span class="outName">help</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obviously, you know what this does',
    '<span class="outName">help more</span>&nbsp;&nbsp;&nbsp;&nbsp;More commands<br></br>',
    '<span class="outName">whois</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who is Max Vandeput?',
    '<span class="outName">projects</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Max\'s projects',
    '<span class="outName">socials</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Max\'s socials<br></br>',
    '<span class="outName">history</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View command history',
    '<span class="outName">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clear the terminal',
    '<span class="outName">reload</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reload the terminal',
    '<span class="outName">exit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exit the terminal<br></br>',
]

var helpMore = [
    '<span class="outName">ls</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View files and directories in current directory<br></br>',

    '<span class="outName">cd [directoryName]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move to directory in current directory',
    '<span class="outName">cd ..</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go back to previous directory <br></br>',

    '<span class="outName">cat [fileName]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Print file content<br></br>',
]

var whois = [
    "Hello I am Max Vandeput.<br></br>",
    "I am currently studying for a Bachelor's degree in Applied Informatics at UCLL.",
    "As a software developer, I am passionate about building high-quality software that solves user needs.",
    "I am always looking for ways to expand and improve my skills and knowledge",
    "so that I can continue to do my job in the best possible way.<br></br>",
    "I have experience with a variety of programming languages and technologies,",
    "including Java, Python, JavaScript, HTML, CSS, Gleam and SQL.",
    "I have also used frameworks and libraries such as React, Node.js, and Express for school projects.<br></br>", 
    "When I am not studying or working on personal projects, you can find me doing calisthenics, bouldering,","playing the guitar, or running around the table with my dog.<br></br>",

]

var socials = [
    'Click on the links below to visit.',
    "Or type <span class='outName'>'socials -[socialName]'</span>.<br></br>",
    '<span class="outName">LinkedIn</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + linkedin + '" target="_blank">linkedin.com/in/max-vandeput/</a>',

    '<span class="outName">GitHub</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + github + '" target="_blank">github.com/MaxVdp</a>',

    '<span class="outName">cvDutch </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + cvDutch + '" target="_blank">Dutch-cv/MaxVdp</a>',    
    '<span class="outName">cvEnglish </span>&nbsp;&nbsp;&nbsp;<a href="'+ cvEnglish + '" target="_blank">English-cv/MaxVdp</a>',

    '<span class="outName">Email</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="copyEmail();" id="email" href="#" >maxyuji.vandeput@gmail.com</a><br></br>',

]

var copiedMsg = [
    "Email copied to clipboard.<br></br>",
]


var projects = [
    "Type <span class='outName'>'projects -[projectName]'</span> for more info about the project.<br></br>",

    '<span class="outName">MXShell</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A terminal portfolio made in HTML, CSS and JavaScript',
    '<span class="outName">TracknGrow</span>&nbsp;&nbsp;&nbsp;An online assesment tool made with php',
    '<span class="outName">Chace</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A chat web application made in React.js',
    '<span class="outName">Stace</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A stock tracking web application made in Elixir<br></br>',
]

var tngInfo = [
    "Type <span class='outName'>'projects -TracknGrow -open'</span> to see it live.",
    "Hint: use the arrow up key for less typing.<br></br>",

    '<span class="outName">Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TracknGrow<br></br>',

    '<span class="outName">Description:</span>&nbsp;TracknGrow is an online assessment system.',
    'Anyone who wants to be assessed or wants to assess can use TracknGrow.',
    'TracknGrow mainly focusses on behaviour, talents, skills and competences rather',
    'than scorable fail or pass assessment activities.',
    'Pupils, students, or trainees can choose their assessors',
    'by sending them a TracknGrow-initiated email invitation.<br></br>',
    
    'I completed this application in my sixth year at \'Miniemeninstituut\' as part of my internship.',
    'Collaborating with two other students, we talked with the client, EduShakers,',
    'to ensure the application\'s user-friendliness.',
    'Note: TracknGrow has undergone updates since my involvement.<br></br>',

    '<span class="outName">Tech Stack:</span>&nbsp;&nbsp;PHP, HTML, CSS, JavaScript, MySQL',
    '<span class="outName">See live:</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + trackngrow + '" target="_blank">trackngrow.eu</a><br></br>',

]

var chaceInfo = [
    '<span class="outName">Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chace<br></br>',

    '<span class="outName">Description:</span>&nbsp;Chace is a real-time chat application.',
    'Users can send, accept or decline friend requests.',
    'They can also create a chatroom and invite friends to join.<br></br>',

    'I completed this application in my second year at \'UCLL\' as part the course called \'Web Development 4\'.',
    'Collaborating with one other student, we came up with the idea of Chace.',
    'The name comes from Chat and Ace -> Chace.',
    'In this course, we learned to work with React, Express, and other technologies.<br></br>',
    
    '<span class="outName">Tech Stack:</span>&nbsp;&nbsp;TypeScript, Next.Js, Tailwind, Express.Js, PostgreSQL, Prisma<br></br>',
]

var staceInfo = [
    '<span class="outName">Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stace<br></br>',

    '<span class="outName">Description:</span>&nbsp;Stace is a stock tracking web application.',
    'Users can search through a list of stocks and add them to their favourites.',
    'Admins can add, update, or delete stocks.<br></br>',

    'I completed this application in my second year at \'UCLL\'',
    'as part the course called \'Internet Programming Major\'.',
    'Collaborating with one other student, we came up with the idea of Stace.',
    'In this course, we learned to write in the functional programming language Elixir,',
    'and work with the Phoenix web framework. <br></br > ',
    
    '<span class="outName">Tech Stack:</span>&nbsp;&nbsp;Elixir, Phoenix, PostgreSQL<br></br>',
]

var mxshellInfo = [
    "Type <span class='outName'>'projects -mxshell -open'</span> to see it live.",
    "Hint: use the arrow up key for less typing.<br></br>",

    '<span class="outName">Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MX-Shell<br></br>',

    '<span class="outName">Description:</span>&nbsp;MX-Shell is a unique terminal-style portfolio',
    'that showcases my skills and projects in an interactive command-line interface.',
    'Inspired by the simplicity and efficiency of Linux terminals,',
    'MX-Shell provides visitors with a nostalgic yet modern browsing experience.',
    'Users can navigate through my projects by typing commands like',
    '"projects -[projectName]" to access detailed information about each project.<br></br>',

    'I developed MX-Shell during my free time in my final year of studies in applied informatics.',
    'It all started with a simple idea: to build a portfolio that reflects my skills and personality in a unique way.',
    'Drawing inspiration from traditional terminal interfaces, and some other sites that can be found on my githubs readme,',
    'MX-Shell offers visitors an interactive and memorable browsing experience.<br></br>',
    
    '<span class="outName">Tech Stack:</span>&nbsp;&nbsp;HTML, CSS, JavaScript',
    '<span class="outName">See live:</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + mxshell + '" target="_blank">github.com/MaxVdp/portfolio</a><br></br>',
]

var notFound = [
    "<span class='notfound'>Command not found. Type <span class='outName'>'help'</span> for a list of available commands.</span><br></br>",
]

var noUrlFound = [
    "<span class='notfound'>No url was found. Type <span class='outName'>'help'</span> for a list of available commands.</span><br></br>",
]
