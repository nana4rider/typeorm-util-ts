import { Logger } from 'log4js';
import { Logger as TypeormLogger, QueryRunner } from 'typeorm';
export declare class TypeormLog4jsLogger implements TypeormLogger {
    private logger;
    constructor(logger: Logger);
    /**
     * Logs query and parameters used in it.
     */
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): void;
    /**
     * Logs query that is failed.
     */
    logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner): void;
    /**
     * Logs query that is slow.
     */
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): void;
    /**
     * Logs events from the schema build process.
     */
    logSchemaBuild(message: string, queryRunner?: QueryRunner): void;
    /**
     * Logs events from the migrations run process.
     */
    logMigration(message: string, queryRunner?: QueryRunner): void;
    /**
     * Perform logging using given logger, or by default to the console.
     * Log has its own level and message.
     */
    log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): void;
    /**
     * Converts parameters to a string.
     * Sometimes parameters can have circular objects and therefor we are handle this case too.
     */
    protected stringifyParams(parameters: any[]): string | any[];
}
//# sourceMappingURL=TypeormLog4jsLogger.d.ts.map