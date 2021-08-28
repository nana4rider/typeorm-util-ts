import { DateTime } from 'luxon';
import { ValueTransformer } from 'typeorm';
export declare class DateTimeTransformer implements ValueTransformer {
    private static _instance;
    private constructor();
    static get instance(): DateTimeTransformer;
    from(value: Date | DateTime): DateTime | undefined;
    to(value: DateTime): Date | undefined;
}
//# sourceMappingURL=DateTimeTransformer.d.ts.map