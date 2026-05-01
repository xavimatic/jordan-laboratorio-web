const fs = require('fs');

function updateSubpage(filePath) {
    if(!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // Make paths absolute
    html = html.replace(/href="\.\.\/"/g, 'href="/"');
    html = html.replace(/href="\.\/"/g, 'href="' + (filePath.includes('laboratorio-common-rail') ? '/laboratorio-common-rail/' : '/mecanica-ligera/') + '"');
    html = html.replace(/href="\.\.\/mecanica-ligera\/"/g, 'href="/mecanica-ligera/"');
    html = html.replace(/href="\.\.\/laboratorio-common-rail\/"/g, 'href="/laboratorio-common-rail/"');
    html = html.replace(/href="\.\.\/#contacto"/g, 'href="/#contacto"');
    
    fs.writeFileSync(filePath, html, 'utf8');
}

updateSubpage('c:\\Users\\deste\\Downloads\\jordan-new\\laboratorio-common-rail\\index.html');
updateSubpage('c:\\Users\\deste\\Downloads\\jordan-new\\mecanica-ligera\\index.html');
console.log('Subpages updated.');
