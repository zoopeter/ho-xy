import { History } from "../../histories/entities/history.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(type => History, history => history.user)
  histories: History[];
}
