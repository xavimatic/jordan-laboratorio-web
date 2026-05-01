const fs = require('fs');
let html = fs.readFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', 'utf8');

if (!html.includes('google-site-verification')) {
    html = html.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n<meta name="google-site-verification" content="_mH4ypZfj26lHHRk6DNnh9faJbeWfLYRH33zCb_-7wc" />');
    fs.writeFileSync('c:\\Users\\deste\\Downloads\\jordan-new\\index.html', html, 'utf8');
    console.log('Meta tag added.');
} else {
    console.log('Meta tag already exists.');
}
