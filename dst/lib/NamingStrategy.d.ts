import { DefaultNamingStrategy } from 'typeorm';
export declare class NamingStrategy extends DefaultNamingStrategy {
    tableName(targetName: string, userSpecifiedName: string | undefined): string;
    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string;
}
//# sourceMappingURL=NamingStrategy.d.ts.map