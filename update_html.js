const fs = require('fs');

function updateHtml() {
    let html = fs.readFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', 'utf8');

    // 1. Update H1 and H2/H3
    html = html.replace(
        /<h1[\s\S]*?<\/h1>/,
        `<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      Jordán Laboratorio Common Rail: Inyección Diesel y Mecánica Especializada
    </h1>`
    );

    html = html.replace(
        /<p class="text-xl text-gray-200 max-w-lg mx-auto lg:mx-0">[\s\S]*?<\/p>/,
        `<h2 class="text-2xl md:text-3xl font-semibold text-secondary mb-4">
      Reparación de Bombas de Alta y Picos Inyectores (Bosch, Denso, Delphi, Cummins)
    </h2>
    <h3 class="text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 mb-8">
      Diagnóstico con Escáner y Mantenimiento para Toyota, Nissan, Hyundai y más.
    </h3>`
    );

    // 2. Add visual block for brands
    const brandBlock = `
    <!-- Bloque de Marcas -->
    <div class="mt-8 p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 text-center">
      <p class="text-white text-lg mb-4 font-medium">Especialistas en sistemas de inyección Common Rail para Bosch, Denso, Delphi y Cummins. <br><span class="text-secondary">Diagnóstico computarizado con escáner de última generación para todas las líneas.</span></p>
      <div class="flex flex-wrap justify-center gap-6 items-center">
        <img src="https://static.readdy.ai/image/28fea6c8f474e766f64fec7424fe6f3b/c509c851ad1624e871fd57579ed5c598.png" alt="Bosch" class="h-10 object-contain bg-white rounded px-2">
        <img src="https://static.readdy.ai/image/28fea6c8f474e766f64fec7424fe6f3b/bf011fb7f3b7d71fe423163d06cae608.png" alt="Denso" class="h-10 object-contain bg-white rounded px-2">
        <img src="https://static.readdy.ai/image/28fea6c8f474e766f64fec7424fe6f3b/3ad39ec6752f93c3a59cd55a6c4eab9c.png" alt="Delphi" class="h-10 object-contain bg-white rounded px-2">
        <img src="https://static.readdy.ai/image/28fea6c8f474e766f64fec7424fe6f3b/0e45068ff531b8b4873b211ff4cfdd69.png" alt="Cummins" class="h-10 object-contain bg-white rounded px-2">
      </div>
    </div>
    `;
    
    // insert brand block after the H3
    if(!html.includes('Bloque de Marcas')) {
        html = html.replace('Hyundai y más.\n    </h3>', 'Hyundai y más.\n    </h3>\n' + brandBlock);
    }

    // 3. Add Servicio de Bombas de Alta Presión to Especialidades
    const bombaBlock = `<!-- Especialidad Bombas -->
<div class="group relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm p-1">
<div class="aspect-[4/3] overflow-hidden rounded-lg">
<img src="https://static.readdy.ai/image/28fea6c8f474e766f64fec7424fe6f3b/75a25a09806cd9ebf15047166517bdd4.webp" alt="Bombas de Alta Presión" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
</div>
<div class="p-6">
<h3 class="text-xl font-semibold text-secondary mb-3">Servicio de Bombas de Alta Presión</h3>
<p class="text-gray-400">La bomba es el corazón del sistema Common Rail. Reparación, mantenimiento y calibración con banco de pruebas de alta precisión para todas las marcas.</p>
</div>
</div>`;
    if(!html.includes('Servicio de Bombas de Alta Presión')) {
         html = html.replace('<!-- Especialidad 1 -->', bombaBlock + '\n<!-- Especialidad 1 -->');
    }

    // 4. Update Equipamiento
    html = html.replace(
        /<h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Equipamiento Profesional<\/h2>[\s\S]*?<p class="text-gray-400 max-w-2xl mx-auto">.*?<\/p>/,
        `<h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Infraestructura de Precisión</h2>
<p class="text-gray-400 max-w-2xl mx-auto">Nuestro proceso técnico garantizado incluye: Diagnóstico electrónico (Escáner) → Desmontaje → Prueba en banco de precisión → Limpieza/Reparación → Calibración final.</p>`
    );

    html = html.replace(/Banco de Pruebas<\/h3>\s*<p class="text-gray-400">.*?<\/p>/, 'Banco de Pruebas</h3>\n<p class="text-gray-400">Bancos de prueba de alta precisión para calibración exacta bajo parámetros de fábrica.</p>');
    
    // Add "Limpieza por ultrasonido" instead of Herramientas
    html = html.replace(/Herramientas y Especialistas<\/h3>\s*<p class="text-gray-400">.*?<\/p>/, 'Limpieza por ultrasonido de picos</h3>\n<p class="text-gray-400">Equipos de ultrasonido industrial para la remoción profunda de carbón y barniz en picos inyectores.</p>');

    // 5. Update Mantenimiento Keywords
    html = html.replace(
        /<p class="text-gray-300 max-w-2xl mx-auto">Mantenga su veh.*?culo en.*?<\/p>/,
        `<p class="text-gray-300 max-w-2xl mx-auto">Servicio integral de mantenimiento preventivo diesel y mecánico. Contamos con técnicos especializados. No somos un lubricentro común, somos un laboratorio que cuida el corazón de su motor mediante diagnóstico computarizado y limpieza de picos inyectores.</p>`
    );

    // 6. Schema JSON-LD
    const schema = `\n<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Jordán Laboratorio Common Rail",
  "image": "https://static.readdy.ai/image/28fea6c8f474e766f64fec7424fe6f3b/eb8571c8c5ad0a52cc28eb8383885ba2.png",
  "@id": "https://jordan.com.py/",
  "url": "https://jordan.com.py/",
  "telephone": "+595981467653",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ypacaraí 1203",
    "addressLocality": "Villa Elisa",
    "addressRegion": "Central",
    "addressCountry": "PY"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "08:00",
    "closes": "13:00"
  }],
  "knowsAbout": [
    "Sistemas de inyección Common Rail",
    "Reparación de Bombas de Alta Presión",
    "Reparación de Picos Inyectores",
    "Mecánica Ligera",
    "Mantenimiento Preventivo Diesel",
    "Diagnóstico computarizado",
    "Limpieza por ultrasonido de picos"
  ],
  "brand": ["Bosch", "Denso", "Cummins", "Delphi", "Toyota", "Nissan", "Hyundai"]
}
</script>\n`;
    if(!html.includes('application/ld+json')) {
        html = html.replace('</head>', schema + '</head>');
    }

    // 7. Nuestro Enfoque
    const enfoque = `
<!-- Nuestro Enfoque -->
<section class="py-16 bg-[#111827]">
<div class="container mx-auto px-4 text-center">
<h2 class="text-3xl font-bold mb-6 text-white">Nuestro Enfoque</h2>
<p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed border-l-4 border-[#33b034] pl-6 text-left">
En Jordán Laboratorio nos especializamos <strong class="text-[#FFC107]">exclusivamente en el corazón del motor</strong> (inyección y bombas) y mantenimiento preventivo fluido. No realizamos trabajos de carrocería, neumáticos ni reparaciones de transmisión, garantizando así la <strong class="text-white">máxima especialización</strong> en nuestro sector.
</p>
</div>
</section>
`;
    if(!html.includes('Nuestro Enfoque')) {
        html = html.replace('<!-- CTA Section -->', enfoque + '\n<!-- CTA Section -->');
    }

    fs.writeFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', html, 'utf8');
}

updateHtml();
console.log('Update complete.');
