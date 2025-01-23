export interface IUser { //Tipagem do usuário
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>; //Função para logar
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}
