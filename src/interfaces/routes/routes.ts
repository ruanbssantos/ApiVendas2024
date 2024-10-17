import { error } from 'console';
import { Router, Request, Response } from 'express';
import { AppError } from '@/domain/errors/appError';


const routes = Router();


routes.get('/user', (req: Request, res: Response) =>{
	return res.status(200).json({message: 'Olá,dev'})
});

export { routes };