var linkedin = "https://www.linkedin.com/in/max-vandeput/";
var github = "https://www.github.com/MaxVdp";
var cvDutch = "files/MaxVdp_Nederlands_cv.pdf";
var cvEnglish = "files/MaxVdp_English_cv.pdf";
var email = "maxyuji.vandeput@gmail.com";

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
    '<span class="outName">whois</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who is Max Vandeput?',
    '<span class="outName">projects</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Max\'s projects',
    '<span class="outName">socials</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Max\'s socials',
    '<span class="outName">history</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View command history',
    '<span class="outName">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clear the terminal',
    '<span class="outName">ls</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View files in current directory',
    '<span class="outName">cd</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change to a different directory',
    '<span class="outName">exit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exit the terminal<br></br>',
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
    "Projects are currently being worked on and will be available soon.<br></br>",
]

var notFound = [
    "<span class='notfound'>Command not found. Type <span class='outName'>'help'</span> for a list of available commands.</span><br></br>",
]

var ls = [
    "Applications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Documents&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Downloads",
    "Music&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pictures&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Videos<br></br>",
]