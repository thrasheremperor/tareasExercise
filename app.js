let process=require('process');
let moduloTareas=require('./tareas');
let comando=process.argv[2];
switch (comando){
    case 'list':
        let tareas=moduloTareas.leerJSON();
        if (tareas.length===0){
            console.log("Task list is empty")
        }else{
            console.log("----------------------------")
            console.log("List of Tasks")
            console.log("----------------------------")
            for (let i=0;i<tareas.length;i++){
                console.log("Task Title: "+tareas[i].titulo+' - Status: '+tareas[i].estado)
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