//EncryptionLetters
var encryptionCharacters = {
    'a':'b',
    'b':'c',
    'c':'d',
    'd':'e',
    'e':'f',
    'f':'g',
    'g':'h',
    'h':'i',
    'i':'j',
    'j':'k',
    'k':'l',
    'l':'m',
    'm':'n',
    'n':'o',
    'o':'p',
    'p':'q',
    'q':'r',
    'r':'s',
    's':'t',
    't':'u',
    'u':'v',
    'v':'w',
    'w':'x',
    'x':'y',
    'y':'z',
    'z':'a'
};

//Send
function senden(){

document.getElementById('output').style.display = ('block');

var output = document.getElementById('output');
var p = document.createElement('p');
p.innerHTML = ('N/A');
p.style.fontSize = ('.7em')

output.appendChild(p);

var message = document.getElementById('input').value;
console.log('Input:' , message);

var encryptedMessage = ''

for (var i = 0; i < message.length; i++) {
    setTimeout(function(index) {
      return function() {
        var character = message[index].toLowerCase();
  
        if (encryptionCharacters.hasOwnProperty(character)) {
          encryptedMessage += encryptionCharacters[character];
          console.log('Output:', encryptedMessage);
        } else {
          encryptedMessage += character;
        }
        p.innerHTML = encryptedMessage;
      };
    }(i), i * 10);
  }  

}

//OpenSection
function encryption(){

  document.getElementById('encryptionsection').style.display = ('block')
  document.getElementById('decryptionsection').style.display = ('none')

}