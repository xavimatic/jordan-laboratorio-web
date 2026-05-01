const fs = require('fs');

function updateLinks() {
    let html = fs.readFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', 'utf8');

    // Update navbar
    html = html.replace(
        /<nav class="hidden md:flex space-x-6">[\s\S]*?<\/nav>/,
        `<nav class="hidden md:flex space-x-6">
<a href="#inicio" class="text-white hover:text-secondary transition-colors">Inicio</a>
<a href="/laboratorio-common-rail/" class="text-[#33b034] hover:text-secondary transition-colors font-medium">Laboratorio</a>
<a href="/mecanica-ligera/" class="text-secondary hover:text-white transition-colors font-medium">Mecánica Ligera</a>
<a href="#nosotros" class="text-white hover:text-secondary transition-colors">Nosotros</a>
<a href="#contacto" class="text-white hover:text-secondary transition-colors">Contacto</a>
</nav>`
    );

    // Make footer and service links absolute
    html = html.replace(/href="laboratorio-common-rail\/"/g, 'href="/laboratorio-common-rail/"');
    html = html.replace(/href="mecanica-ligera\/"/g, 'href="/mecanica-ligera/"');

    fs.writeFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', html, 'utf8');
    console.log('Links updated successfully!');
}

updateLinks();
