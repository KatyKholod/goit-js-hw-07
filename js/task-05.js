const elements = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output')
}

elements.inputName.addEventListener('input', getInputValue);

function getInputValue({ currentTarget }) {
    elements.outputName.innerText =
    currentTarget.value.trim() !== ''
        ? currentTarget.value.trim()
        : "Anonymous"
};