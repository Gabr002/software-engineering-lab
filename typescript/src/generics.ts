// passar types como parâmetro em funções genéricas
const returnValue = <T>(value: T): T => value;


const message = returnValue<string>("Hello World")

const count  = returnValue<number>(100)

function getFirstValueFromArray<Type>(array: Type[]) {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(['a', 'b', 'c']);
const firstValueFromNumberArray = getFirstValueFromArray<number>([1, 2, 3]);

// Com isso, conseguimos criar funções reutilizáveis que podem trabalhar com diferentes tipos de dados, mantendo a segurança de tipos oferecida pelo TypeScript. Isso é especialmente útil em cenários onde a função precisa ser flexível o suficiente para lidar com vários tipos, sem comprometer a integridade dos dados.

// promises genéricas
const returnPromise = async (): Promise<string> => {
    return '5';
};

// Classes 
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    } 
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => { 
    return x + y; 
});
