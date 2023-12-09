import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Courses {

    @PrimaryGeneratedColumn()
    course_id: number;

    @Column()
    user_id: number;

    @Column()
    rank: number;

    @Column()
    user_name: string;

    @Column()
    user_status: string;
}