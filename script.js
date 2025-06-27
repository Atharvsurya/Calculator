var display = document.getElementById('display');
    var buttons = document.querySelectorAll('button');
    var expression = '';
    var lastAnswer = '';
    function updateDisplay(value) {
      display.innerText = value || '0';
    }
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var value = this.id;
        if (value === 'AC') {
          expression = '';
          updateDisplay(expression);
        } else if (value === 'C') {
          expression = expression.slice(0, -1);
          updateDisplay(expression);
        } else if (value === '=') {
          try {
            var result = eval(expression.replace(/X/g, '*'));
            lastAnswer = result;
            expression = result.toString();
            updateDisplay(expression);
          } catch {
            expression = '';
            updateDisplay('Error');
          }
        } else if (value === 'Ans') {
          expression += lastAnswer;
          updateDisplay(expression);
        } else {
          expression += value;
          updateDisplay(expression);
        }
      });
    }