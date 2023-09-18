const fs = require('fs');

// Leer el archivo JSON transformado
const jsonTransformado = fs.readFileSync('./archivo_transformado.json', 'utf8');

// Función para reformatear la geometría
function reformatearGeometria(jsonStr) {
  try {
    // Reemplazar comillas simples por comillas dobles
    const nuevaJsonStr = jsonStr.replace(/'/g, '"');

    // Eliminar \r" al final de todos los objetos JSON
    const jsonSinR = nuevaJsonStr.replace(/\\r"/g, ' ');

    // Reemplazar puntos entre números con comas y eliminar espacios adicionales
    const jsonConComas = jsonSinR.replace(/(\d+)\. (\d+)/g, '$1, $2');
    
    // Agregar comas entre las coordenadas
    const jsonConComasCoordenadas = jsonConComas.replace(/\]\. \[/g, '], [');

    // Reemplazar "{"type": "Polygon". "coordinates": por "{"type": "Polygon", "coordinates":
    const jsonSinPuntos = jsonConComasCoordenadas.replace(/\". "coordinates"/g, '", "coordinates"');

    // Quitar comillas alrededor de la clave "geometria" en todo el JSON
    const jsonSinComillasGeometria = jsonSinPuntos.replace(/"geometria": "{/g, '"geometria": {');
    const jsonFinal = jsonSinComillasGeometria.replace('}"', '}');

    return jsonFinal;
  } catch (error) {
    console.error('Error al reformatear la geometría:', error);
  }

  return jsonStr;
}

// Aplicar la función de reformateo
const jsonTransformadoReformateado = reformatearGeometria(jsonTransformado);

// Guardar el resultado en un nuevo archivo
fs.writeFileSync('./nuevo_archivo.json', jsonTransformadoReformateado, 'utf8');

console.log('Transformación completada y guardada en nuevo_archivo.json');
