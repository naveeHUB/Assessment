let result = document.getElementById('result');

function appendCharacter(character) {
  result.value += character;
}

function clearResult() {
  result.value = '';
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
