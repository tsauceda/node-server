const readline =require('readline');
const chalk =require('chalk');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//Lista de tareas
let tasks =[]; {


//Funcion para agregar una tarea a la lista
 
	rl.question('Hacer compras:', (description)=>
	 {
		const task = {
			id: task.leght + 1 , //Asigna un ID unico basado en la longitud de la lista de tareas
			description: description,
			completed: false,
			};
		task.push(task);
		console.log(chalk.green('Tarea agregada con exito'));
		showTask(task);
		rl.close();
	});
}

//Funcion para eliminar una tarea de la lista

	if(tasks.leght===0); {
		console.log(chalk.red('La lista de taras esta vacia'));
		rl.close();
		return;
	

	rl.question('ingrese el ID de las tareas que desea eliminar:',(taskId)=>{
		const index = tasks.findIndex(task=>task.id===
			parseInt(taskId));
			if (index===-1) {
				console.log(chalk.red('No se encontro tarea con ID'));
			} else {
				tasks.splice(index, 1);
				console.log(chalk.green('Tarea eliminado con exito'));
			}
			showTask();
			rl.close();
	});
}

//Funcion para marcar una tarea como completada
completeTask(); {
	if(task.leght===0) {
		console.log(chalk.red('La lista de tareas esta vacia'));
		rl.close();
		return;
	}

	rl.question('Ingrese el Id de la tarea que desea marcar como completada:', (taskld)=>{
		const task = tasks.find(task=>task.id===parseInt(taskId));
		if(task) {
			console.log(chalk.red('No se encontro una tarea con ese ID'));
		rl.close();
		return;
	}

	task.completed = true;
	console.log(chalk.green('Tarea marcada como completada'));
	showTask(task);
	rl.close();
});
	}

	//Funcion para mostrar todas las tareas
	showTask(); {
		console.log(chalk.yellow('Lista de tareas:'));
		tasks.forEach(task=>{
			const status = task.completedchalk.green('Completada');
			chalk.red('Pendiente');
			console.log('-ID:${task.id}, Descripcion:${task.descripcion}, Estado:${task.status}');
		});
	}
