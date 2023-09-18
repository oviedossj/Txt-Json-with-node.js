const fs = require('fs');

// Ruta del archivo de entrada y salida
const inputFile = 'archivo.txt';
const outputFile = 'archivo.json';

// Leer el archivo de entrada
const fileData = fs.readFileSync(inputFile, 'utf8');

// Dividir el archivo en líneas
const lines = fileData.trim().split('\n');

// La primera línea contiene los nombres de las propiedades
const keys = lines[0].split(';');

// Crear un array para almacenar los objetos JSON
const jsonData = [];

// Recorrer las líneas del archivo (a partir de la segunda línea)
for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(';');
  const obj = {};

  for (let j = 0; j < keys.length; j++) {
    obj[keys[j]] = values[j];
  }

  // Agregar el objeto JSON al array
  jsonData.push(obj);
}

// Escribir el JSON en el archivo de salida
fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2), 'utf8');

console.log('Archivo JSON generado con éxito.');
