import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Logo } from './logo.entity';

@Entity()
export class Beverage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @OneToMany(type => Logo, logo => logo.beverage)
    logos: Logo[];
}
