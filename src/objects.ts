//type
type Order = {
    productId: string;
    price: number;
};


type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
};

const user: User = {
    firstName: 'Victor',
    age: 20,
    email: 'victor@doe.com',
    orders: [{productId: 'productName1', price: 2}],
    password: '123fg',
};

user.password

const log = (message: string) => {}
log(user.password!)

// Unions
type Author = {
    books: string[]
};

const author: Author & User = {
    age: 49,
    books: ['1'],
    email: 'manuel@dot.com',
    firstName: 'Manuel',
    orders: [{price: 45, productId:'joao de barro'}],
    password: 'fasdn445',
};

// interfaces (apenas leitura)
interface UserInterface {
    firstName: string;
    email: string;
};

const emailUser: UserInterface = {
    email: "felipe@gmail.com",
    firstName: 'Felipe',
};



