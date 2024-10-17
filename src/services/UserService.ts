import { User } from "@/domain/entities/User";
import { IUserRepository } from "@/domain/repositories/IUserRepository";

export class UserServices {
	constructor(private _userRepository: IUserRepository){}

	async createUser(user: User): Promise<User> {
		return await this._userRepository.create(user);
	}

	async getUserById(id: string): Promise<User | null> {
		return null;
	}

	async getAllUsers(): Promise<User[]> {
		return await this._userRepository.findAll();
	}

	async updateUser(id: string, user: Partial<User>): Promise<User | null> {
		return await this._userRepository.update(id, user);
	}

	async deleteUser(id: string): Promise<void> {
		await this._userRepository.delete(id);
	}
}