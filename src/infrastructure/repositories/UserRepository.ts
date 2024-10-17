import { User } from "@/domain/entities/User";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { promises } from "dns";
import { getRepository } from "typeorm";

export class UserRepository implements IUserRepository {
	private _ormRepository = getRepository(User);


	async create(user: User): Promise<User>{
		const newUser = this._ormRepository.create(user);
		await this._ormRepository.save(newUser);
		return newUser;
	}

	async findById(id: string): Promise<User | null> {
		return null;
		//return await this._ormRepository.findOne({ where: { id } }) || null;
	}

	async findAll(): Promise<User[]> {
		return await this._ormRepository.find();
	}

	async update(id: string, user: Partial<User>): Promise<User | null> {
		await this._ormRepository.update(id, user);
		return this.findById(id);
	}

	async delete(id: string): Promise<void> {
		await this._ormRepository.delete(id);
	}
}