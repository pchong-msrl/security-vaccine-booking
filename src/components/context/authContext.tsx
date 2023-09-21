import {createContext, FC, ReactNode, useMemo, useState} from "react";

interface IAuthContext{
    token?:string
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>
}
export const AuthContext = createContext<IAuthContext>({
    token: undefined,
    setToken: value => {}
});

interface Props {
    [propName: string]: unknown;
    children: ReactNode;
}

const AuthContextProvider: FC<Props> = ({ children }) => {
    // hook variable
    const [token, setToken ] = useState<string|undefined>(undefined);


    const value = useMemo(
        () => ({ token,setToken}),
        [token],
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export const AuthProvider: FC<Props> = ({ children }) => {
    return (
            <AuthContextProvider>{children}</AuthContextProvider>
    );
};
