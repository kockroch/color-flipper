const colorButton = document.getElementById('colorButton');
const colorValue = document.getElementById('colorValue');

colorButton.addEventListener('click', changeColor);

function changeColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorValue.innerText = `Current Color: ${randomColor}`;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
