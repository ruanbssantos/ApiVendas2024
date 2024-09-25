import { error } from 'console';
import { Router, Request, Response } from 'express';
import { AppError } from '../../domain/errors/appError';


const routes = Router();


routes.get('/', (req: Request, res: Response) =>{

	//throw new AppError('teste');

	return res.status(200).json({message: 'Olá,dev'})
});

export { routes };