import {MigrationInterface, QueryRunner} from "typeorm";

export class BeverageMigration1624809534538 implements MigrationInterface {
    name = 'BeverageMigration1624809534538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "beverage" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "brand" character varying NOT NULL, CONSTRAINT "PK_31aac8bbeba8fe791b142dcf6cf" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "beverage"`);
    }

}
