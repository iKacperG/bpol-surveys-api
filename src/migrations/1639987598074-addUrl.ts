import {MigrationInterface, QueryRunner} from "typeorm";

export class addUrl1639987598074 implements MigrationInterface {
    name = 'addUrl1639987598074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Survey\` ADD \`url\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Survey\` DROP COLUMN \`url\``);
    }

}
