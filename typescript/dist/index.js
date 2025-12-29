"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos básicos 
const age = 30;
const name = "TypeScript";
const isInvalid = false;
let idk = "Pode ser qualquer coisa";
idk = '12';
idk = true;
// Podemos criar arrays de tipos específicos
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, true];
const names = ["Ana", "Bruno", "Carlos"];
// E também arrays que aceitam múltiplos tipos
const mixed = [1, "dois", true, 4, "cinco", false];
// Tuplas
const person = [1, "Gabriel", true];
const personMore = [2, "Ana"];
// Arrays de tuplas
const employees = [
    [1, "Gabriel"],
    [2, "Ana"],
    [3, "Carlos"],
];
// Enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const DirectionUp = Direction.Up;
console.log(DirectionUp); // Output: 1
//# sourceMappingURL=index.js.map