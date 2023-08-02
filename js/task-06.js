const inputVal = document.getElementById('validation-input');
inputVal.addEventListener('blur', handlerBlurBorderColor);

function handlerBlurBorderColor(evt) {
  const inputDataLength = Number(inputVal.dataset.length);
  const inputValueLength = Number(inputVal.value.length);

  if (inputValueLength === inputDataLength) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  } else {
    inputVal.classList.remove('valid');
    inputVal.classList.add('invalid');
  }
};