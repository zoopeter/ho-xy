import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  restaurantName: string;

  @ManyToOne(type => User, user => user.histories)
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
