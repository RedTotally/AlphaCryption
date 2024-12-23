//DecryptionLetters
var decryptionCharacters = {
    'b':'a',
    'c':'b',
    'd':'c',
    'e':'d',
    'f':'e',
    'g':'f',
    'h':'g',
    'i':'h',
    'j':'i',
    'k':'j',
    'l':'k',
    'm':'l',
    'n':'m',
    'o':'n',
    'p':'o',
    'q':'p',
    'r':'q',
    's':'r',
    't':'s',
    'u':'t',
    'v':'u',
    'w':'v',
    'x':'w',
    'y':'x',
    'z':'y',
    'a':'z'
};

//Send
function sendde(){

  document.getElementById('output2').style.display = ('block');

var output2 = document.getElementById('output2');
var p = document.createElement('p');
p.innerHTML = ('N/A');
p.style.fontSize = ('.7em')

output2.appendChild(p);

var message = document.getElementById('input2').value;
console.log('input2:' , message);

var decryptedMessage = ''

for (var i = 0; i < message.length; i++) {
    setTimeout(function(index) {
      return function() {
        var character = message[index].toLowerCase();
  
        if (decryptionCharacters.hasOwnProperty(character)) {
          decryptedMessage += decryptionCharacters[character];
          console.log('output2:', decryptedMessage);
        } else {
          decryptedMessage += character;
        }
        p.innerHTML = decryptedMessage;
      };
    }(i), i * 10);
  }  
}

//OpenSection
function decryption(){

  document.getElementById('encryptionsection').style.display = ('none')
  document.getElementById('decryptionsection').style.display = ('block')

}