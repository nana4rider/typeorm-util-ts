"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormLog4jsLogger = void 0;
// base: https://github.com/typeorm/typeorm/blob/master/src/logger/FileLogger.ts
class TypeormLog4jsLogger {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(logger) {
        this.logger = logger;
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Logs query and parameters used in it.
     */
    logQuery(query, parameters, queryRunner) {
        const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + this.stringifyParams(parameters) : '');
        this.logger.debug('[QUERY]:', sql);
    }
    ;
    /**
     * Logs query that is failed.
     */
    logQueryError(error, query, parameters, queryRunner) {
        if (!this.logger.isErrorEnabled())
            return;
        const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + this.stringifyParams(parameters) : '');
        this.logger.error([
            '[FAILED QUERY]:', sql,
            '[QUERY ERROR]:', error
        ]);
    }
    ;
    /**
     * Logs query that is slow.
     */
    logQuerySlow(time, query, parameters, queryRunner) {
        if (!this.logger.isWarnEnabled())
            return;
        const sql = query + (parameters && parameters.length ? ' -- PARAMETERS: ' + this.stringifyParams(parameters) : '');
        this.logger.warn('[SLOW QUERY:', time, 'ms]:', sql);
    }
    ;
    /**
     * Logs events from the schema build process.
     */
    logSchemaBuild(message, queryRunner) {
        this.logger.info(message);
    }
    ;
    /**
     * Logs events from the migrations run process.
     */
    logMigration(message, queryRunner) {
        this.logger.info(message);
    }
    ;
    /**
     * Perform logging using given logger, or by default to the console.
     * Log has its own level and message.
     */
    log(level, message, queryRunner) {
        switch (level) {
            case 'log':
                this.logger.debug(message);
                break;
            case 'info':
                this.logger.info(message);
                break;
            case 'warn':
                this.logger.warn(message);
                break;
        }
    }
    ;
    /**
     * Converts parameters to a string.
     * Sometimes parameters can have circular objects and therefor we are handle this case too.
     */
    stringifyParams(parameters) {
        try {
            return JSON.stringify(parameters);
        }
        catch (error) { // most probably circular objects in parameters
            return parameters;
        }
    }
    ;
}
exports.TypeormLog4jsLogger = TypeormLog4jsLogger;
//# sourceMappingURL=TypeormLog4jsLogger.js.map