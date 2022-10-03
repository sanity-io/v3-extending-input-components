import {CharCountEnabled} from './textStats'

/** Leverages [https://www.typescriptlang.org/docs/handbook/declaration-merging.html](declaration merging)
 * to add options to built in types.
 * This file isn't imported anywhere, it's enough for it to just exist in the codebase
 * */

declare module 'sanity' {
    export namespace Schema {
        export interface StringOptions {
            charCount?: CharCountEnabled;
        }
        export interface TextOptions {
            charCount?: CharCountEnabled;
        }
        export interface ArrayOptions {
            charCount?: CharCountEnabled;
        }
    }

    export interface Schema {}
}