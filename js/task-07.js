const elements = {
    inputSizeControl: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text')
};

elements.inputSizeControl.addEventListener('input', handlerFontSizeControl);

function handlerFontSizeControl({ currentTarget }) {
    elements.textRef.style.fontSize = `${currentTarget.value}px`
};