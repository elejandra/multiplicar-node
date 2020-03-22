const argv = require('./config/yargs').argv; 
var colors = require('colors');



const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

//let base = 'asd';



let comando = argv._[0];

switch (comando){
   case 'listar':
      listarTabla(argv.base, argv.limite);
      break;
      
   case 'crear':
      crearArchivo(argv.base, argv.limite)
         .then(archivo => console.log(`Archivo creado: ${archivo}`))
         .catch(e => console.log(e));
      break;
   default:
      console.log('Comando no reconocido');
}

//console.log('limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1]
