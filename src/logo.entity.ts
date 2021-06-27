import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Beverage } from './beverage.entity';

@Entity()
export class Logo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imageSrc: string;

  @ManyToOne(type => Beverage, beverage => beverage.logos)
  beverage: Beverage;
}
