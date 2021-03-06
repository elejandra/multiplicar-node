const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('====================================================='.green);
    console.log(`======tabla de ${base}===============================`.green);
    console.log('====================================================='.green);
    
    for (let i = 1; i <=limite ; i++){
        console.log( `${base } * ${i } = ${ base*i}\n`);
    }
}

let crearArchivo = (base, limite=10 ) =>{

    
    return new Promise((resolve, reject) => {
        if(!Number(base)  && !Numero(limite)){
            reject(`El valor introducido de la base:${base} o el valor del limite: ${limite}no es un numero`);
            return;
        }

        let data ='';

        for (let i = 1; i <=limite ; i++){
            data+= `${base } * ${i } = ${ base*i}\n`;
        }

        fs.writeFile(`tablas/tabla ${base}-al-${limite}.txt`, data, (err)=>{
             if(err)
                reject(err)
             else
                resolve(`tabla-${ base }-al-${limite}.txt`.red);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}