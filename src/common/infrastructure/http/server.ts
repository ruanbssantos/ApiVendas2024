import { env } from "../env";
import { dataSource } from "../typeorm";
import { app } from "./app";

dataSource.initialize().then(() => {
	app.listen(env?.PORT,()=>{
		console.log(`Servidor online na porta ${env?.PORT}!`);
		console.log('Api docs available at Get /docs');
	});

}).catch(error => {
    console.error('Error initializing data source:', error)
});