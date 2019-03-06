import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Tafel } from 'src/models/tafel';

@Entity('tafel')
export class TafelRepoEntity {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    public readonly kenmerk: string;

    @Column('int')
    public readonly personen: number;

    constructor(kenmerk: string, personen: number) {
        this.kenmerk = kenmerk;
        this.personen = personen;
    }

    mapToTafel(): Tafel {
        return new Tafel(this.kenmerk, this.personen);
    }
}
