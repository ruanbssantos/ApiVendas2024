import { Router, Request, Response } from 'express';


const routes = Router();


routes.get('/user', (req: Request, res: Response) =>{
	return res.status(200).json({message: 'Olá,dev'})
});

export { routes };