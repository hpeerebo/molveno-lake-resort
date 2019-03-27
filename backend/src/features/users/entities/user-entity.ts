import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';


@Entity("user")
export class UserEntity {
	@PrimaryGeneratedColumn() public readonly id?: number;
	@Column('varchar', {unique: true}) public readonly userName: string;
	@Column('integer') public readonly age: number;
	@Column('varchar') public readonly role: string;
	@Column('varchar') public readonly password: string;	

	constructor(userName: string, age: number, role: string, password: string) {
		this.userName = userName;
		this.age = age;
		this.role = role;
		this.password = password;
	}

	
}
