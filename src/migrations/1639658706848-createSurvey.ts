import {MigrationInterface, QueryRunner} from "typeorm";

export class createSurvey1639658706848 implements MigrationInterface {
    name = 'createSurvey1639658706848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Survey\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Survey\``);
    }

}
