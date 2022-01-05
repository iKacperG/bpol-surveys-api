import {MigrationInterface, QueryRunner} from "typeorm";

export class createQuestion1639660280927 implements MigrationInterface {
    name = 'createQuestion1639660280927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Question\` (\`id\` varchar(36) NOT NULL, \`text\` varchar(255) NOT NULL, \`surveyId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Question\` ADD CONSTRAINT \`FK_9ffc48c6858fbaaeacc795cb44d\` FOREIGN KEY (\`surveyId\`) REFERENCES \`Survey\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Question\` DROP FOREIGN KEY \`FK_9ffc48c6858fbaaeacc795cb44d\``);
        await queryRunner.query(`DROP TABLE \`Question\``);
    }

}
