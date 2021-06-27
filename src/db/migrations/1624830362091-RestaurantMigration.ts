import {MigrationInterface, QueryRunner} from "typeorm";

export class RestaurantMigration1624830362091 implements MigrationInterface {
    name = 'RestaurantMigration1624830362091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "restaurant"`);
    }

}
