// Type
type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string;
    age: number;
    email?: string; // Propriedade opcional
    password?: string;
    orders: Order[];
    register?(): string;
};

const user: User = {
    firstName: "Gabriel",
    age: 25,
    orders: [{ productId: '1', price: 200 }]
    // register() {
    //     return "Usuário registrado com sucesso!";
    // },
}


// Estamos definindo objetos com tipos específicos usando a palavra-chave 'type' em TypeScript. No exemplo acima, criamos um tipo 'User' que possui propriedades obrigatórias 'firstName' e 'age', e propriedades opcionais 'email' e 'password'. Em seguida, criamos um objeto 'user' do tipo 'User', fornecendo apenas as propriedades obrigatórias. Isso demonstra como podemos usar tipos personalizados para garantir que nossos objetos sigam uma estrutura específica, enquanto ainda permitimos flexibilidade com propriedades opcionais.

const printLog = (message: string) => { }

printLog(user.password!)

// A exclamação (!) após 'user.password' é o operador de asserção de não nulo em TypeScript. Ele informa ao compilador que temos certeza de que 'user.password' não é nulo ou indefinido naquele ponto do código. Isso é útil quando sabemos que uma propriedade opcional foi definida, mas o compilador não consegue inferir isso automaticamente. No exemplo acima, estamos passando 'user.password' para a função 'printLog', e a exclamação garante que não haverá erros de compilação relacionados a valores nulos ou indefinidos. Já quando usamos 'message?: string' na definição da função, estamos indicando que o parâmetro 'message' é opcional e pode ser omitido ao chamar a função.

// Unions
type Author = {
    books: string[];
}

const author: Author & User = {
    age: 40,
    books: ['1'],
    email: "author@com.br",
    firstName: "Ana",
    orders: [],
    register() {
        return "Autor registrado com sucesso!";
    },
}

// const author: Author & User são unions types que combinam as propriedades de ambos os tipos 'Author' e 'User'. Isso significa que o objeto 'author' deve conter todas as propriedades definidas em ambos os tipos. No exemplo acima, 'author' possui a propriedade 'books' do tipo 'Author', bem como as propriedades 'firstName', 'age', 'email' e 'orders' do tipo 'User'. Essa abordagem é útil quando queremos criar objetos que compartilham características de múltiplos tipos, garantindo que todas as propriedades necessárias estejam presentes.

// 48:31 - segundos da aula

// Interfaces
interface UserInterface {
    readonly firstName: string; // propriedade somente leitura, ou seja, não pode ser alterada após a inicialização
    email: string;
    login(): string;
}

const emailUser: UserInterface = {
    email: "felipe@gmail.com",
    firstName: "Felipe",
    login() {
        return "Autor registrado com sucesso!";
    },
}

// unions com interfaces
interface AuthorInterface {
    books: string[];
}

const authorInterface: UserInterface & AuthorInterface = {
    email: "author@gmail.com",
    firstName: "Ana",
    books: [],
    login() {
        return "Login realizado com sucesso!";
    }
};

type Grade = number | string;
const grade: Grade = 10;


// 55:33 - segundos da aula

