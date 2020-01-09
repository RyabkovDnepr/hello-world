const fs = require('fs');
let text = 'some kind of text\n';
fs.appendFileSync('fileForText.txt', text);
text = 'other kind of text\n';
fs.appendFileSync('fileForText.txt', text);
text = 'another kind of text\n';
fs.appendFileSync('fileForText.txt', text);
