import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class KamerEntity {
    @PrimaryGeneratedColumn() public readonly id?: number;
    @Column('varchar') public readonly kamerNummer: string;
    @Column('varchar') public readonly kamerType: string;
    @Column('varchar') public readonly kamerLigging: string;
    @Column('integer') public readonly aantalPersonen: number;
    @Column('integer') public readonly prijs: number;
    //@Column('varchar') public readonly status: string;
    
    constructor(kamerNummer: string, kamerType: string, kamerLigging: string, aantalPersonen: number,  prijs: number) {
		this.kamerNummer = kamerNummer;
		this.kamerType = kamerType;
		this.kamerLigging = kamerLigging;
		this.aantalPersonen = aantalPersonen;
		this.prijs = prijs;
	}
} 