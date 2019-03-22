import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../entities/user-entity';
import {UserLoginDto} from '../../dtos/user-login-dto';
import * as Bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

	public async saveUser(userEntity: UserEntity): Promise<UserEntity> {
		/*assignment 1: check if userName already exists and if it does not insert into db, if it does throw Http exception (conflict)
		* HINT: throw new HttpException('User already exists', HttpStatus.CONFLICT)*/

		//const userExists = await this.userRepository.findOne({where: {userName: userEntity.userName}});
		const userExists: boolean = !!await this.userRepository.findOne({where: {userName: userEntity.userName}});
		console.log(userExists);
		if (!userExists) {
			return this.userRepository.save(userEntity);
		}
		else throw new HttpException('User already exists', HttpStatus.CONFLICT);
	}

	public async users(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}

	public async user(userId: number): Promise<UserEntity> {
		/*assignment 2: check if user exists and if it does return it, if it does not throw Http exception (not found)
		* HINT: throw new HttpException("user not found", HttpStatus.NOT_FOUND)*/

			return this.userRepository.findOneOrFail({id: userId})
			.catch(() => {throw new HttpException('User not found', HttpStatus.NOT_FOUND)});
	}

	public async deleteUsers(): Promise<void> {
		/*assignment 3: delete all users from table
		* HINT:  clear */
		this.userRepository.clear();
	}

	public findUserByUserName(userName: string): Promise<UserEntity[]> {
		/*assignment 4: check if user credentials are correct by checking if username and password for a user exist in user table
		* HINT:  {where:{userName: userCredentials.userName}} */
		return this.userRepository.find({where: {userName: userName}})
	}

	public async findUserByCredentials(userCredentials: UserLoginDto): Promise<boolean> {
		const user = await this.userRepository.findOne({where: {userName: userCredentials.userName}});
		return (user && Bcrypt.compareSync(userCredentials.password, user.password))
			
	}
	public async userIsValid(userCredentials: UserLoginDto): Promise<boolean> {
		const user = await this.userRepository.findOne({where:{userName: userCredentials.userName}});
		return !!(user && await Bcrypt.compare(userCredentials.password, user.password));
	}
}
