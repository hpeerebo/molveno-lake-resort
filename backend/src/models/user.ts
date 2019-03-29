import {UserEntity} from '../features/users/entities/user-entity';

export class User {
	constructor(public readonly id: number,
	            public readonly userName: string,
	            public readonly role: string) {
	}

	public static fromUserEntity(userEntity: UserEntity): User {
		return new User(userEntity.id, userEntity.userName, userEntity.role);
	}
}
