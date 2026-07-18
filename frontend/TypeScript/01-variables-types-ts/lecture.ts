const player = { name: "Palmer" };
player.name = "Caicedo"; // Можна перепризначати вміст в середині самого масива
//player = { name: "James" }; // ПОМИЛКА — не можна перепризначити
let age: number = 25;
let name: string = "Palmer";
let isActive: boolean = true;
let age1 = 25; // TS бачить number і сам "запам'ятовує" це
//age1 = "twenty five"; // ПОМИЛКА — TS не дасть присвоїти string
let matchResult: "win" | "loss" | "draw" = "win";
matchResult = "draw"; // ОК
//matchResult = "victory"; // ПОМИЛКА — такого варіанту немає
let value: any;      // вимикає перевірку типів — уникай, це "втеча" від TS
let value2: unknown; // схоже на any, але безпечніше — TS змусить перевірити тип перед використанням
function log(): void {} // функція нічого не повертає
let empty: null;
let notDefined: undefined;
let message : string;
message = 'Hello';
let user = 'John', age3 = 25, message2 = 'Hello';
if (true) {
    var a = 1;
    let b = 2;
}
console.log(a); // 1 — var "втік" з блоку
//console.log(b); // ReferenceError — let залишився в блоці
let s: string = "text";
let n: number = 42;          // в TS немає окремого int/float — все number
let b: boolean = true;
let big: bigint = 100n;       // для дуже великих чисел
let sym: symbol = Symbol("id");
let u: undefined = undefined;
let nl: null = null;
let id: string | number = 123;
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged; // має ОБИДВА поля
let direction: "left" = "left"; // тип = саме значення "left", нічого більше
// type alias — гнучкіший, може описувати union, primitives, tuples
type Status = "win" | "loss" | "draw";
type Player = { name: string; age: number };

// interface — тільки для об'єктів, але можна "розширювати" (extends) і доповнювати (declaration merging)
interface Player1 {
    name: string;
    age: number;
}
interface Player1 {
    team: string; // автоматично додається до Player вище
}
enum MatchResult {
    Win,
    Loss,
    Draw,
}
let result: MatchResult = MatchResult.Win; // 0

// рядковий enum — частіше юзають, бо явні значення
enum MatchResultStr {
    Win = "WIN",
    Loss = "LOSS",
    Draw = "DRAW",
}
let h: any = 3;
h.toUpperCase(); // компілюється, навіть якщо помилка — небезпечно

let y: unknown = "text";
//y.toUpperCase(); // ПОМИЛКА компіляції — TS змушує спершу перевірити тип
if (typeof y === "string") {
    y.toUpperCase(); // ОК, бо TS знає, що тут точно string
}
//never — тип, який ніколи не має значення (функція, що завжди кидає помилку, або недосяжний код):
function throwError(msg: string): never {
    throw new Error(msg);
}
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // тут TS знає, що id це string
    } else {
        console.log(id.toFixed(2)); // тут TS знає, що id це number
    }
}
//readonly — заборона змінювати поле після створення:
interface Player5 {
    readonly id: number;
    name: string;
}
const p: Player5 = { id: 1, name: "Palmer" };
//p.id = 2; // ПОМИЛКА
let result3 = "win"; // тип: string
let result2 = "win" as const; // тип: "win" (literal), не просто string

const matchResults = ["win", "loss", "draw"] as const;
// тип: readonly ["win", "loss", "draw"], а не string[]
type Status2 = "win" | "loss" | "draw";

const result4 = "win" satisfies Status2; // тип результату лишається "win", а не Status
