import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column()
  private name: string;
}
