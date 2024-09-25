import { app } from "./app";


const porta = 3333;

app.listen(porta,()=>{
	console.log(`Servidor online na porta ${porta}!`);
});
