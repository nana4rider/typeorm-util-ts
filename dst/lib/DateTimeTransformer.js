"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeTransformer = void 0;
const luxon_1 = require("luxon");
class DateTimeTransformer {
    constructor() {
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new DateTimeTransformer();
        }
        return this._instance;
    }
    from(value) {
        if (!value)
            return;
        else if (value instanceof luxon_1.DateTime)
            return value;
        return luxon_1.DateTime.fromJSDate(value);
    }
    to(value) {
        if (!value)
            return;
        return value.toJSDate();
    }
}
exports.DateTimeTransformer = DateTimeTransformer;
//# sourceMappingURL=DateTimeTransformer.js.map