let result = document.getElementById('result') as HTMLInputElement;

function getResult(value: string): void {
  result.value += value;
}

function calculateResult(): void {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Erro';
  }
}

function clearResult(): void {
  result.value = '';
}

function backspace(): void {
  result.value = result.value.slice(0, -1);
}
