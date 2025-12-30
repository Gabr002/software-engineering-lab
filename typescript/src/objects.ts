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
};

const user : User = {
    firstName: "Gabriel",
    age: 25,
    orders: [{productId: '1', price: 200}]
}


// Estamos definindo objetos com tipos específicos usando a palavra-chave 'type' em TypeScript. No exemplo acima, criamos um tipo 'User' que possui propriedades obrigatórias 'firstName' e 'age', e propriedades opcionais 'email' e 'password'. Em seguida, criamos um objeto 'user' do tipo 'User', fornecendo apenas as propriedades obrigatórias. Isso demonstra como podemos usar tipos personalizados para garantir que nossos objetos sigam uma estrutura específica, enquanto ainda permitimos flexibilidade com propriedades opcionais.

const printLog = (message: string) => {}

printLog(user.password!)

// A exclamação (!) após 'user.password' é o operador de asserção de não nulo em TypeScript. Ele informa ao compilador que temos certeza de que 'user.password' não é nulo ou indefinido naquele ponto do código. Isso é útil quando sabemos que uma propriedade opcional foi definida, mas o compilador não consegue inferir isso automaticamente. No exemplo acima, estamos passando 'user.password' para a função 'printLog', e a exclamação garante que não haverá erros de compilação relacionados a valores nulos ou indefinidos. Já quando usamos 'message?: string' na definição da função, estamos indicando que o parâmetro 'message' é opcional e pode ser omitido ao chamar a função.