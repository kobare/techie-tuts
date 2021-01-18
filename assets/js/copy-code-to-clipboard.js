function copyCodeToClipboard() {

  var outputText = "";
  var targets = document.getElementsByClassName('code');

  for( var i = 0; i < 1; i++ ) {
    outputText += targets[i].innerHTML;    
  }

  var output = document.getElementById('output');
  output.innerHTML = outputText;
  var range = document.createRange();
  range.selectNodeContents(output);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  output.style.display = 'none';

}

