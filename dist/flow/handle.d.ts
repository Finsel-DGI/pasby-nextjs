import { AuthenticationParams } from "../sdk";
declare const flowClient: () => {
    begin(options?: AuthenticationParams, redirectState?: string): Promise<string>;
    callback(code: string): Promise<void>;
};
export default flowClient;
