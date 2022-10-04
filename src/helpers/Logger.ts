/* eslint-disable no-console */
export namespace Logger {
    export const log = (...args: string[]) => {
        console.log(...args);
    };
    export const debug = (...args: string[]) => {
        console.debug(...args);
    };
    export const error = (...args: string[]) => {
        console.error(...args);
    };
    export const count = (...args: string[]) => {
        console.count(...args);
    };
    export const table = (...args: string[]) => {
        console.table(...args);
    };
}
