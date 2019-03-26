import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Tafelreservering } from 'src/models/tafelreservering';

@Entity('tafelreservering')
export class TafelreserveringRepoEntity {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column({ type: 'timestamp' })
    public readonly aanvangstijd: Date;

    @Column('int')
    public readonly personen: number;

    @Column({ type: 'varchar', length: 50 })
    public readonly naam: string;

    @Column({ type: 'varchar', length: 50 })
    public readonly telefoon: string;

    constructor(aanvangstijd: Date, personen: number, naam: string, telefoon: string) {
        this.aanvangstijd = aanvangstijd;
        this.personen = personen;
        this.naam = naam;
        this.telefoon = telefoon;
    }

    mapToTafelreservering(): Tafelreservering {
        return new Tafelreservering(this.id, this.aanvangstijd.toISOString(), this.personen, this.naam, this.telefoon);
    }
}
