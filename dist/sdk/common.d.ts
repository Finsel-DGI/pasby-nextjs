/**
 * remove trailing slash from string
 */
export declare const removeTrailingSlash: (url: string | undefined) => string;
export declare function parseInterface(data: any): any;
export declare function unixTimestampToMaxAge(expirationUnixTimestamp: number): number;
/**
 * custom delay function
 * @param ms time
 * @returns {Promise<void>}
 */
export declare function delay(ms: number): Promise<unknown>;
