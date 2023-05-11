var count = document.getElementById('count');
var input = document.getElementById('input');
input.addEventListener('keyup', function(e){
  wordCounter(e.target.value);
 });
// function wordCounter(text){
//   var text=input.value;
//   var wordCount=0;
//   for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i)==' ') {
//       wordCount++;
//     }
    
//   }
//   count.innerText=wordCount;
// }

document.getElementById("dwn").addEventListener("click", function(){
  downloadText();
});

function wordCounter(text) {
  var text = input.value.split(' ');
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ' && isWord(text[i])) {
      wordCount++;
    }
  }
  count.innerText = wordCount;
}

function isWord(str) {
  var alphaNumericFound = false;
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}

function downloadText(){
  var text="Downloading";
  var element= document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", "text.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}