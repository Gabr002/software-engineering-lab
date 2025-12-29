// Tipos básicos 
const age: number = 30;
const name: string = "TypeScript";
const isInvalid: boolean = false;
let idk: any = "Pode ser qualquer coisa";

idk =  '12';
idk = true;


// Podemos criar arrays de tipos específicos
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, true];
const names: string[] = ["Ana", "Bruno", "Carlos"];
// E também arrays que aceitam múltiplos tipos
const mixed: (string | number | boolean)[] = [1, "dois", true, 4, "cinco", false];

// Tuplas
const person: [number, string, boolean] = [1, "Gabriel", true];
const personMore: [number, string] = [2, "Ana"];

// Arrays de tuplas
const employees: [number, string][] = [
  [1, "Gabriel"],
  [2, "Ana"],
  [3, "Carlos"],
];

// Enum 
enum Direction { 
    Up = 1,
    Down = 2
}

const DirectionUp = Direction.Up;
console.log(DirectionUp); // Output: 1
