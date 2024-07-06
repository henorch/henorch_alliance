
const content = document.getElementById('content')

content.style.position = 'relative';
content.style.left = '-30 %'


function slideIn(element, duration) {
    let position = -3;
    const interval = 10;


    const timer = setInterval(() => {
        position += 3 * (interval / duration);
        element.style.left = `${position}%`;

        if (position >= 0) {
            clearInterval(timer);
        }
    }, interval);
}

// Trigger animation
slideIn(content, 1000); 
