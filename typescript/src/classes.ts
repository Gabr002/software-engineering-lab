interface IPerson {
    id: number;
    sayMyName(): string;
}

class Person implements IPerson { // implementa a interface IPerson. Quando realizamos a implementação de uma interface em uma classe, estamos garantindo que a classe adote a estrutura e o comportamento definidos na interface. Isso significa que a classe deve fornecer implementações concretas para todas as propriedades e métodos especificados na interface. O conteúdo relacionado a isso é chamado de 'contrato' da interface, pois a classe se compromete a seguir as definições estabelecidas pela interface. O pilar da orientação a objetos que estamos utilizando nesse exemplo é o 'Polimorfismo', que permite que diferentes classes implementem a mesma interface de maneiras distintas, promovendo flexibilidade e reutilização de código.
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}

// Mesma coisa que a classe acima, porém utilizando a sintaxe reduzida para definir e inicializar as propriedades diretamente no construtor.
class PersonRefact {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number
    ) { }

}

const person = new Person( 1, "Gabriel", 25);

// Em OOP definedemos uma classe 'Person' com propriedades 'id', 'name' e 'age', além de um método 'sayMyName' que retorna o nome da pessoa. A classe também possui um construtor que inicializa essas propriedades quando uma nova instância da classe é criada. No exemplo acima, criamos uma instância da classe 'Person' chamada 'person', passando os valores necessários para o construtor. Isso demonstra como podemos usar classes em TypeScript para encapsular dados e comportamentos relacionados a um objeto específico. Em orientção objetos o conteúdo referente a esse código acima é chamado de 'instância' da classe Person. O pilar da orientação a objetos que estamos utilizando nesse exemplo é o 'Encapsulamento', que envolve a proteção dos dados internos de um objeto, controlando o acesso a eles por meio de modificadores de acesso como 'public', 'private' e 'protected'.

// Herança
class Employee extends Person { // A herança é um dos pilares da orientação a objetos e permite que uma classe (classe filha ou subclasse) herde propriedades e métodos de outra classe (classe pai ou superclasse). No exemplo acima, a classe 'Employee' estende a classe 'Person', o que significa que 'Employee' herda todas as propriedades e métodos de 'Person'. Isso permite que 'Employee' reutilize o código definido em 'Person', promovendo a reutilização e a organização do código. Além disso, 'Employee' pode adicionar suas próprias propriedades e métodos específicos, como 'salary' e 'getSalary', sem precisar reescrever o código já existente em 'Person'.
    constructor(id: number, name: string, age: number, public salary: number) {
        super(id, name, age);
    }

    whoAmI() {
        return this.name;
    }

    // Agora entender a causa do porque eu consigo acessar o 'name' dentro da classe Employee, mesmo ele sendo 'protected' na classe Person. A razão para isso é que a classe Employee estende a classe Person, o que significa que Employee é uma subclasse de Person. Em TypeScript (e em muitas outras linguagens de programação orientadas a objetos), quando uma classe herda de outra, ela tem acesso às propriedades e métodos protegidos (protected) da classe pai. Portanto, dentro da classe Employee, podemos acessar a propriedade 'name' diretamente, pois ela é herdada da classe Person e é marcada como protegida, permitindo o acesso dentro da subclasse. Já se tentássemos acessar 'name' fora da classe Employee, como em uma instância de Employee, isso resultaria em um erro de compilação, pois 'name' não é acessível fora do contexto da classe ou de suas subclasses. Em relação a 'age', que é privada (private) na classe Person, não podemos acessá-la diretamente na classe Employee, pois propriedades privadas só podem ser acessadas dentro da própria classe onde são definidas. 
}