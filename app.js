const process=require('process');
const moduloTareas=require('./tareas');
const comando=process.argv[2];

switch (comando){
    case 'list':
        let tareas=moduloTareas.leerJSON();
        if (tareas.length===0){
            console.log("This list is empty")
        }else{
            console.log("----------------------------")
            console.log("Task List")
            console.log("----------------------------")
            for (let tarea of tareas){
                console.log(`Task Title: ${tarea.titulo} - Status: ${tarea.estado}`)
            };
        };
        break;
    case 'add':
        let titulo=process.argv[3];
        let estado=process.argv[4];
        moduloTareas.escribirJSON(titulo,estado);
        break;
    case 'undo':
        moduloTareas.deshacer();
        break;
    case 'search':
        let resultado=moduloTareas.buscarTarea(process.argv[3]);
        resultado.forEach(tarea=>{
            console.log(tarea)
        });
        break;
    default:
        break;
};