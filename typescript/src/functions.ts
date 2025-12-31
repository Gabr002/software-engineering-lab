interface MathFunc {
    (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
    return x + y;
}

const value = sum(2, 3);

const log = (message: string): void | number => {
    console.log(message);

    return 1;
}

// Como usar interfaces junto com funções


// Ou seja, toda função que seguir a estrutura de MathFunc deve receber dois parâmetros do tipo number e retornar um number

const sub : MathFunc = (x: number, y: number): number => {
    return x - y;
}

const multiply : MathFunc = (x: number, y: number): number => {
    return x * y;
}   

const divide : MathFunc = (x: number, y: number): number => {
    return x / y;
}

// No código acima, definimos uma interface MathFunc que descreve a estrutura de uma função que recebe dois parâmetros do tipo number e retorna um number. Em seguida, criamos várias funções (sum, sub, multiply, divide) que implementam essa interface. Isso garante que todas essas funções sigam a mesma assinatura, promovendo consistência e facilitando a manutenção do código.
