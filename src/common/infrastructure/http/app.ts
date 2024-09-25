import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { errorHandler } from './middlewares/errorHandler';


const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
// 	if (err instanceof Error){
// 		//SE FOR UMA INSTANCIA DO TIPO ERROR
// 		return res.status(400).json({
// 			message: "Algo deu errado, estamos trabalhando para corrigir.",
// 			error: err.message // Isso deve ser omitido em produção para não expor detalhes
// 		});
// 	}

// 	console.error(err);

// 	return res.status(500).json({
// 		message: "Internal server erro.",
// 	});
// });

export { app };