import { AuthenticationParams } from "../sdk/auth.types";
export declare const useAuth: (params: AuthenticationParams) => {
    login: () => Promise<void>;
};
