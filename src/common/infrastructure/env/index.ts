import 'dotenv/config';
import { z } from 'zod';
import { AppError } from '../../domain/errors/appError';


const envSchema = z.object({
	NODE_ENV: z
		.enum(['development', 'production', 'test'])
		.default('development'),

	PORT: z.coerce.number().default(3333),
	API_URL: z.string().default('http://localhost:3333')

});

const _env = envSchema.safeParse(process.env);

if (!_env) {
	throw new AppError('Arquivo de ambiente não definido');
}


export const env = _env.data;