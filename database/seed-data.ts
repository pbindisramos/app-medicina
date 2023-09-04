import bcrypt from 'bcryptjs';


interface SeedUser {
    name     : string;
    email    : string;
    password : string;
    role     : 'admin'|'paciente'
}





interface SeedData {
    users: SeedUser[];

}





export const initialData: SeedData = {
    users: [
        {
            name: 'Patricio Bindis',
            email: 'p.bindisramos@gmail.com',
            password: bcrypt.hashSync('123456'),
            role: 'admin'
        },
        {
            name: 'Eduardo Rios',
            email: 'eduardo@google.com',
            password: bcrypt.hashSync('123456'),
            role: 'paciente'
        },
    ],
}
