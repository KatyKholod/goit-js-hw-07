let counterValue = 0;

const elements = {
    valueRef: document.querySelector('#value'),
    btnDecr: document.querySelector('[data-action="decrement"]'),
    btnIncr: document.querySelector('[data-action="increment"]')
};

elements.btnDecr.addEventListener('click', handlerBtnDecr);
elements.btnIncr.addEventListener('click', handlerBtnIncr);

function handlerBtnDecr() {
    counterValue -= 1;
    elements.valueRef.textContent = counterValue;
};

function handlerBtnIncr() {
    counterValue += 1;
    elements.valueRef.textContent = counterValue;
};