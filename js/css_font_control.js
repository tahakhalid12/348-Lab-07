function applyStyles() {
    var colorInput = document.getElementById('color').value;
    var borderWidthInput = document.getElementById('borderWidth').value;
    
    var textElement = document.getElementById('text');
    textElement.style.color = 'rgb(' + colorInput + ')';
    textElement.style.borderWidth = borderWidthInput + 'px';
  }
  