import {MigrationInterface, QueryRunner} from "typeorm";

export class LogoMigration1624811804629 implements MigrationInterface {
    name = 'LogoMigration1624811804629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "logo" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "imageSrc" character varying NOT NULL, "beverageId" integer, CONSTRAINT "PK_d0a6be0ad81359e31b23e1c9498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "logo" ADD CONSTRAINT "FK_7dc5091feee6cae02ff5fb6d32b" FOREIGN KEY ("beverageId") REFERENCES "beverage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "logo" DROP CONSTRAINT "FK_7dc5091feee6cae02ff5fb6d32b"`);
        await queryRunner.query(`DROP TABLE "logo"`);
    }

}
