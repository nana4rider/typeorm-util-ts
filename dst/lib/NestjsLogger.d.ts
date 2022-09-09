import { Logger as TypeOrmLogger } from 'typeorm';
export declare class DatabaseLogger implements TypeOrmLogger {
    private readonly logger;
    logQuery(query: string, parameters?: unknown[]): void;
    logQueryError(error: string, query: string, parameters?: unknown[]): void;
    logQuerySlow(time: number, query: string, parameters?: unknown[]): void;
    logMigration(message: string): void;
    logSchemaBuild(message: string): void;
    log(level: 'log' | 'info' | 'warn', message: string): void;
    private stringifyParameters;
}
//# sourceMappingURL=NestjsLogger.d.ts.map