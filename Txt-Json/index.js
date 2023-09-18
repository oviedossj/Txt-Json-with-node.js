const fs = require('fs');

function callUrls() {
  const stream = fs.createReadStream('./nuevo_archivo.json', 'utf-8');
  let buffer = '';

  stream.on('data', (data) => {
    buffer += data;
  });

  stream.on('end', () => {
    const jsonObject = JSON.parse(buffer);
    console.log(jsonObject);
  });

  stream.on('error', (error) => {
    console.error('Error al leer el archivo:', error);
  });
}

callUrls();
