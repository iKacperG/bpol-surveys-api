import {MigrationInterface, QueryRunner} from "typeorm";

export class answerQuestionRelation1640684347118 implements MigrationInterface {
    name = 'answerQuestionRelation1640684347118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Answer\` DROP COLUMN \`input\``);
        await queryRunner.query(`ALTER TABLE \`Answer\` ADD \`input\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Answer\` DROP COLUMN \`input\``);
        await queryRunner.query(`ALTER TABLE \`Answer\` ADD \`input\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Answer\` CHANGE \`input\` \`text\` varchar(255) NOT NULL`);
    }

}
