import { env } from "../env";
import { app } from "./app";



app.listen(env?.PORT,()=>{
	console.log(`Servidor online na porta ${env?.PORT}!`);
	console.log('Api docs available at Get /docs');
});
