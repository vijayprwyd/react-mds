import './ripples.scss';

export function createRipple({ rippleClassName = 'ripple-blue', event }) {

    //if not enter or space
    if (event.keyCode && event.keyCode !== 13 && event.keyCode !== 32) return;

    let leftStyle, topStyle;
    const position = event.currentTarget.getBoundingClientRect();
    const w = event.currentTarget.offsetWidth;
    const ripple = document.createElement('span');

    if (event.keyCode === 13 || event.keyCode === 32) {
        leftStyle = "50%";
        topStyle = "50%";
    } else {
        leftStyle = `${event.clientX - position.left}px`;
        topStyle = `${event.clientY - position.top}px`;
    }

    ripple.className = `ripple  ${rippleClassName || 'ripple-blue'} `;
    ripple.style.left = leftStyle;
    ripple.style.top = topStyle;
    ripple.style.setProperty('--scale', w);

    setTimeout(() => {
        ripple.parentNode.removeChild(ripple);
    }, 500);

    return ripple;
}