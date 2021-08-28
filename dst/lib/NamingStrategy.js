"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingStrategy = void 0;
const pluralize = require("pluralize");
const typeorm_1 = require("typeorm");
const StringUtils_1 = require("typeorm/util/StringUtils");
class NamingStrategy extends typeorm_1.DefaultNamingStrategy {
    tableName(targetName, userSpecifiedName) {
        return userSpecifiedName ? userSpecifiedName : pluralize((0, StringUtils_1.snakeCase)(targetName));
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        const name = customName || propertyName;
        if (embeddedPrefixes.length) {
            return (0, StringUtils_1.camelCase)(embeddedPrefixes.join('_')) + (0, StringUtils_1.snakeCase)(name);
        }
        return (0, StringUtils_1.snakeCase)(name);
    }
}
exports.NamingStrategy = NamingStrategy;
//# sourceMappingURL=NamingStrategy.js.map