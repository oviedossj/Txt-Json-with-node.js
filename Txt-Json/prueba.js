const fs = require('fs');
// Tu JSON original

const claveMapping = {
  "cod_manzana": "Id_Manzana",
  "nivel_predominante_manzana": "nivel_predominante_manzana",
  "nivel_predominante_en_la_secci�n": "nivel_predominante_en_la_seccion",
  "NSE ab": "NSE ab",
  "NSE c+": "NSE c+",
  "NSE c": "NSE c",
  "NSE c-": "NSE c-",
  "NSE d+": "NSE d+",
  "NSE d": "NSE d",
  "NSE e": "NSE e",
  "NSE Sin datos relevados": "NSE Sin datos relevados",
  "Sin servivicios de salud": "Sin servicios de salud",
  "Con servicios de salud": "Con servicios de salud",
  "Analfabeta de 8 a 14 a�os": "Analfabeta de 8 a 14 años",
  "Abafabeta de 15 o m�s a�os": "Abafabeta de 15 o más años",
  "Religi�n cat�lica": "Religión católica",
  "Protestantes y evang�licos": "Protestantes y evangélicos",
  "Otras religiones": "Otras religiones",
  "Poblaci�n con Discapacidad": "Población con Discapacidad",
  "Poblaci�n ind�gena": "Población indígena",
  "Poblacion afromexicana": "Poblacion afromexicana",
  "Sin escolaridad": "Sin escolaridad",
  "Primaria incompleta": "Primaria incompleta",
  "Primaria completa": "Primaria completa",
  "Secundaria incompleta": "Secundaria incompleta",
  "Secundaria completa": "Secundaria completa",
  "Educaci�n posb�sica": "Educación posbasica",
  "Econ�micamente activa": "Económicamente activa",
  "Econ�micamente no activa": "Económicamente no activa",
  "Ocupada": "Ocupada",
  "Desocupada": "Desocupada",
  "Refrencia mujer": "Referencia mujer",
  "Referencia hombre": "Referencia hombre",
  "Viviendas precarias": "Viviendas precarias",
  "Viviendas con servicios": "Viviendas con servicios",
  "Zonas pavimentadas": "Zonas pavimentadas",
  "Rampa silla de ruedas": "Rampa silla de ruedas",
  "Con banqueta": "Con banqueta",
  "Con guamici�n": "Con guarnicion",
  "Con ciclov�a": "Con ciclovia",
  "Con alumbrado p�blico": "Con alumbrado publico",
  "Estaciones de bicicletas": "Estaciones de bicicletas",
  "Alcantarilla": "Alcantarilla",
  "Trasnporte colectivo": "Trasporte colectivo",
  "Comercio ambulante": "Comercio ambulante",
  "Poblaci�n sin movilidad propia": "Poblacion sin movilidad propia",
  "Poblaci�n sin bienes materiales": "Poblacion sin bienes materiales",
  "Con refrigerador": "Con refrigerador",
  "Con lavadora": "Con lavadora",
  "Con microondas": "Con microondas",
  "Con automovil": "Con automovil",
  "Con motocicleta": "Con motocicleta",
  "Con bicicleta": "Con bicicleta",
  "Con radio": "Con radio",
  "Con televisor": "Con televisor",
  "Con computadoras": "Con computadoras",
  "Con tel�fono fijo": "Con telefono fijo",
  "Con celular": "Con celular",
  "Con internet": "Con internet",
  "Con televisi�n paga": "Con television paga",
  "Con servicio de peliculas": "Con servicio de peliculas",
  "Con videjuegos": "Con videjuegos",
  "geometry\r": "geometria"
};
// Ruta al archivo JSON original
const rutaArchivo = './archivo.json';

// Leer el contenido del archivo JSON
const jsonOriginal = fs.readFileSync(rutaArchivo, 'utf-8');

// Parsear el JSON en un objeto
const objetoJSON = JSON.parse(jsonOriginal);

// Función para renombrar las claves según el mapeo
function renombrarClaves(objeto) {
  const nuevoObjeto = {};
  for (const clave in objeto) {
    if (claveMapping[clave]) {
      nuevoObjeto[claveMapping[clave]] = objeto[clave];
    } else {
      nuevoObjeto[clave] = objeto[clave];
    }
  }
  return nuevoObjeto;
}

// Aplicar la transformación a cada objeto en el arreglo (si es un arreglo)
if (Array.isArray(objetoJSON)) {
  const arregloTransformado = objetoJSON.map(renombrarClaves);
  // Puedes hacer algo con el arreglo transformado, como guardarlo en otro archivo
  fs.writeFileSync('./archivo_transformado.json', JSON.stringify(arregloTransformado, null, 2));
} else {
  // Si es un objeto simple, aplicar la transformación directamente
  const objetoTransformado = renombrarClaves(objetoJSON);
  // Puedes hacer algo con el objeto transformado, como guardarlo en otro archivo
  fs.writeFileSync('./archivo_transformado.json', JSON.stringify(objetoTransformado, null, 2));
}