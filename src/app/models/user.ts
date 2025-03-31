export interface User {
    id: number;
    name: string;
    email: string;
    password: string,
    role: string,
    remember: boolean;
}

export const currentUser: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    remember: false
};

export const admin: User = {
    id: 0,
    name: 'admin',
    email:'admin',
    password:'admin',
    role: 'admin',
    remember:false
}

export const allUsers: User[] = [
    {
        id: 1,
        name: 'Admin',
        email: 'Admin',
        password: 'admin',
        role: 'admin',
        remember: false
    },
];