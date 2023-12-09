import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Courses {

    @PrimaryGeneratedColumn()
    course_id: number;

    @Column()
    stud_count: number;

    @Column()
    teach_count: number;

    @Column()
    course_name: string;
}