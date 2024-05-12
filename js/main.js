body = document.body;
button = document.getElementById('settings');
buttonSvg = document.querySelector('#settings > svg');
cliButton = document.getElementById('CLI');
themeButton = document.getElementById('theme');

dropdown = document.getElementById('dropdown');
dropdownWrapper = document.getElementById('dropdown-wrapper');
let isDropdownOpen = false;
let clicked = false;


//Load theme from local storage
document.addEventListener('DOMContentLoaded', function() {
    body.setAttribute('theme', localStorage.getItem('theme') || 'light');
});

// Change theme
themeButton.addEventListener('click', function() {
    body.setAttribute('theme', body.getAttribute('theme') === 'dark' ? 'light' : 'dark');
    // Add theme to local storage
    localStorage.setItem('theme', body.getAttribute('theme'));

});

// CLI
cliButton.addEventListener('click', function() {
    window.location.href = '../cli/index.html';
});

// Settings icon animation
function toggleDropdown() {
    if (isDropdownOpen) {
        buttonSvg.style.transform = 'rotate(0deg)';
        dropdownWrapper.style.display = 'none';
        dropdown.style.display = 'none';
    } else {
        buttonSvg.style.transform = 'rotate(360deg)';
        dropdownWrapper.style.display = 'flex';
        dropdown.style.display = 'flex';
    }
    isDropdownOpen = !isDropdownOpen;
}

//Desktop interaction: hover
button.addEventListener('mouseenter', function() {
    if (!clicked) {
        toggleDropdown();
    }
});
//Desktop interaction: un-hover
button.addEventListener('mouseleave', function() {
    if (!clicked) {
        toggleDropdown();
    }
});
//Mobile interaction: click
buttonSvg.addEventListener('click', function() {
    clicked = !clicked;
    toggleDropdown();
});


// Format code blocks
function removeExtraIndentation(code) {
    const lines = code.split('\n');
    const leadingWhitespaceCounts = lines.filter(line => line.trim() !== '').map(line => line.search(/\S/));
    const minLeadingWhitespace = Math.min(...leadingWhitespaceCounts);

    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].substring(minLeadingWhitespace);
    }

    return lines.join('\n');
}

const codeElement = document.querySelector('code');
codeElement.textContent = removeExtraIndentation(codeElement.textContent);