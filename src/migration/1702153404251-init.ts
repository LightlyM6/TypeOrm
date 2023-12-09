import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1702153404251 implements MigrationInterface {
    name = 'Init1702153404251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "rank"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "user_status"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "awg_grade"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "stud_count"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "teach_count"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "course_name"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "stud_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "teach_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "course_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "rank" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "user_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "user_status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "awg_grade" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "awg_grade"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "user_status"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "rank"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "course_name"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "teach_count"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "stud_count"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "course_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "teach_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "stud_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "awg_grade" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "user_status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "user_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "rank" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
