import 'dotenv/config';
import { z } from 'zod';
import { AppError } from '../../domain/errors/appError';


const envSchema = z.object({
	NODE_ENV: z
		.enum(['development', 'production', 'test'])
		.default('development'),

	PORT: z.coerce.number().default(3333),
	API_URL: z.string().default('http://localhost:3333'),
	DB_TYPE: z.literal('postgres').default('postgres'),
	DB_HOST: z.string().default('localhost'),
	DB_PORT: z.coerce.number().default(5432),
	DB_SCHEMA: z.string().default('public'),
	DB_NAME: z.string().default('ApiVendas2024'),
	DB_USER: z.string().default('postgres'),
	DB_PASS: z.string().default('postgres'),
});

const _env = envSchema.safeParse(process.env);

if (!_env) {
	throw new AppError('Arquivo de ambiente não definido');
}


export const env = _env.data;