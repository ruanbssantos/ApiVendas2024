import { env } from "./infrastructure/env";
import { dataSource } from "./infrastructure/database/typeorm/ormconfig";
import { app } from "./interfaces/http/app";

dataSource.initialize().then(() => {
	app.listen(env?.PORT,()=>{
		console.log(`Servidor online na porta ${env?.PORT}!`);
		console.log('Doc da api disponível na url LOCAL/docs');
	});

}).catch(error => {
    console.error('Erro ao inicializar banco de dados:\n\n', error)
});