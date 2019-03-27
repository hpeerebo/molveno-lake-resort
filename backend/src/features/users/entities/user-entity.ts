import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';


@Entity("user")
export class UserEntity {
	@PrimaryGeneratedColumn() public readonly id?: number;
	@Column('varchar', {unique: true}) public readonly userName: string;
	@Column('varchar') public readonly role: string;
	@Column('varchar') public readonly password: string;	

	constructor(userName: string, role: string, password: string) {
		this.userName = userName;
		this.role = role;
		this.password = password;
	}

	
}
