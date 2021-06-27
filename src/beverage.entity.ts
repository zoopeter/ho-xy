import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Beverage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;
}
