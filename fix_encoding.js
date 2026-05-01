const fs = require('fs');
let html = fs.readFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', 'utf8');

html = html.replace(/Ã¡/g, 'á');
html = html.replace(/Ã©/g, 'é');
html = html.replace(/Ã­/g, 'í');
html = html.replace(/Ã³/g, 'ó');
html = html.replace(/Ãº/g, 'ú');
html = html.replace(/Ã±/g, 'ñ');
html = html.replace(/Â¿/g, '¿');
html = html.replace(/Ã‘/g, 'Ñ');
html = html.replace(/â†’/g, '→');

fs.writeFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', html, 'utf8');
console.log('Encoding fixed via Node.js');
