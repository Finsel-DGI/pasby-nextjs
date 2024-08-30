import { AuthenticationParams } from "../sdk";
export declare const useAuth: (params: AuthenticationParams) => {
    login: () => Promise<void>;
};
