import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import {Kamer} from "../kamer";

@Entity()
export class KamerEntity {
    @PrimaryGeneratedColumn() public readonly id?: number;
    @PrimaryColumn('varchar') public readonly kamerNaam: string;
    @Column('varchar') public readonly kamerType: string;
    @Column('varchar') public readonly kamerLigging: string;
    @Column('integer') public readonly aantalPersonen: number;
    @Column('integer') public readonly prijs: number;
    //@Column('varchar') public readonly status: string;
    
    constructor(kamerNaam: string, kamerType: string, kamerLigging: string, aantalPersonen: number,  prijs: number) {
		this.kamerNaam = kamerNaam;
		this.kamerType = kamerType;
		this.kamerLigging = kamerLigging;
		this.aantalPersonen = aantalPersonen;
		this.prijs = prijs;
	}

    mapToKamersg(): Kamer {
        return new Kamer(this.kamerNaam, this.kamerType, this.kamerLigging, this.aantalPersonen , this.prijs);
    }
} 
