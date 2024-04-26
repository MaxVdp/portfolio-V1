const blur = document.getElementById('blur'); 
const blob = document.getElementById('blob');
const ring = document.getElementById('ring');

document.getElementById('blurredC').onclick = event => {
    console.log('Blurred button clicked');
    blur.classList.remove('inactive');
    blob.classList.remove('inactive');
    changeCursor(blob, 3000);
    ring.classList.add('inactive');
};

document.getElementById('ringC').onclick = event => {
    console.log('Ring button clicked');
    blur.classList.add('inactive');
    blob.classList.add('inactive');
    changeCursor(ring, 1500);
    ring.classList.remove('inactive');
}


function changeCursor(cursor, duration){
    document.body.onpointermove = event => {
        const { clientX, clientY } = event;
        cursor.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: duration, fill: 'forwards'})
    }
}



window.addEventListener('load', () => {
    changeCursor(blob, 3000)
});