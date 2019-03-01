import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TafelRepoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    kenmerk: string;

    @Column('int')
    personen: number;

    constructor(kenmerk: string, personen: number) {
        this.kenmerk = kenmerk;
        this.personen = personen;
    }
}
