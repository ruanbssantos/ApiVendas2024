
/*
Justificativa:
	Domínio da Aplicação: A classe AppError faz parte do domínio da aplicação, pois representa erros específicos que podem ocorrer durante a execução da lógica de negócio.
	Independência de Frameworks: Como o AppError não depende de nenhum framework ou tecnologia externa, ele deve ser colocado na camada de domínio.
	Reutilização e Consistência: Centralizar as definições de erros no domínio permite que todas as camadas utilizem os mesmos tipos de erro, promovendo consistência no tratamento de exceções.
*/
export class AppError extends Error {
	public readonly statusCode: number

	constructor(message: string, statusCode = 400) {
		super(message);
		this.statusCode = statusCode;
	}
}