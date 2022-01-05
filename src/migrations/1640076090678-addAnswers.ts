import {MigrationInterface, QueryRunner} from "typeorm";

export class addAnswers1640076090678 implements MigrationInterface {
    name = 'addAnswers1640076090678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Answer\` (\`id\` varchar(36) NOT NULL, \`text\` varchar(255) NOT NULL, \`questionId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Answer\` ADD CONSTRAINT \`FK_70a070639c8e235f849e8078760\` FOREIGN KEY (\`questionId\`) REFERENCES \`Question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Answer\` DROP FOREIGN KEY \`FK_70a070639c8e235f849e8078760\``);
        await queryRunner.query(`DROP TABLE \`Answer\``);
    }

}
