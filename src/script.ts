let greeting: string = "Hello world!";
console.log(greeting);
 
let x: string = "42";
console.log(x);

//1d: Deklarera variabler med olika datatyper
let nameF: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
console.log(nameF, age, isStudent);

//2: LÄS TS Dokumintation
//a) Vad betyder (type) inference?
//TypeScript kan ibland gissa datatypen utan att man anger den.

let message = "Hello"; // TypeScript tolkar automatiskt som string

//b) Vad är ett interface?
//Ett interface beskriver strukturen för ett objekt.
interface User {
    name: string;
    age: number;
  }
  let user: User = { name: "Alice", age: 25 };
  console.log(user);

  //c) Vilka datatyper har JavaScript?
 // JavaScript har följande primitiva datatyper: string + number + boolean + null + undefined + symbol + bigint
//Samt objekt (object), arrays (Array), funktioner, och mer.

//d) Vilka nya datatyper tillför TypeScript?
//any (vilken typ som helst, men bör undvikas)  //unknown (okänd typ, kräver extra säkerhet) //never (kan aldrig ha ett värde)
//tuple (fast längd och typer, t.ex. [string, number]) // enum (definierade värden, t.ex. enum Color { Red, Green, Blue }

//e) Vad är generics?
//Generics gör det möjligt att skapa återanvändbar kod för olika typer.
  function identity<T>(value: T): T {    //Här kan T vara vilken datatyp som helst.
    return value;
  }
  console.log(identity<string>("Hello"));
  console.log(identity<number>(42));
  
// 3. Skriv en funktion som summerar två tal
//Skapa en funktion sum som tar två number-argument och returnerar deras summa.
function sum(a: number, b: number): number {
    return a + b;
  }
  
  // Testa funktionen
  console.log(sum(5, 10)); // 15
  console.log(sum(-3, 7)); // 4  

// 4. Kontrollera om ett tal är udda eller jämnt
//Skriv en funktion isEven som returnerar true om ett tal är jämnt och false om det är udda.
function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
  // Testa funktionen
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false  

//5. Typdeklarera en array
//Skapa en variabel numbers av typen number[] och fyll den med minst tre tal.
let numbers: number[] = [3, 7, 10];

// Testa att loopa genom arrayen
numbers.forEach(num => {
  console.log(`${num} är ${isEven(num) ? "jämnt" : "ojämnt"}`);
});

//6. Filtrera jämna tal från en array
//Skriv en funktion filterEvenNumbers som tar en array av number[] och returnerar bara de jämna talen.
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
  }
  
  // Testa funktionen
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
  
// 7. Hantera en unionstyp
//Skapa en funktion describeValue som tar ett argument som kan vara antingen string eller number och returnerar en strängbeskrivning av värdet.
function describeValue(value: string | number): string {
    if (typeof value === "string") {
      return `Det är en sträng: "${value}"`;
    } else {
      return `Det är ett nummer: ${value}`;
    }
  }
  
  // Testa funktionen
  console.log(describeValue("Hello")); // "Det är en sträng: 'Hello'"
  console.log(describeValue(42)); // "Det är ett nummer: 42"
  
// 8. En enkel typalias
//Skapa ett typalias Person som innehåller ett namn (name: string) och ålder (age: number). Skapa en variabel av den typen.
type Person = {
    name: string;
    age: number;
  };
  
  // Skapa en variabel av typen Person
  let person1: Person = {
    name: "Alice",
    age: 30
  };
  
  console.log(person1);
  
//9. Objekt som funktionens argument
//Skriv en funktion printPersonInfo som tar ett objekt av typen Person och skriver ut namn och ålder.
function printPersonInfo(person: Person): void {
    console.log(`${person.name} är ${person.age} år gammal.`);
  }
  
  // Testa funktionen
  printPersonInfo({ name: "Bob", age: 25 });
  // Output: "Bob är 25 år gammal."
  
//10. Enum-övning
//Definiera en enum för veckodagar och skriv en funktion isWeekend som returnerar true för helgdagar.
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function isWeekend(day: Weekday): boolean {
    return day === Weekday.Saturday || day === Weekday.Sunday;
  }
  
  // Testa funktionen
  console.log(isWeekend(Weekday.Friday)); // false
  console.log(isWeekend(Weekday.Saturday)); // true
  console.log(isWeekend(Weekday.Sunday)); // true
  
/* 11. Kontrollera längden på en sträng
Skriv en funktion isLongString som returnerar true om en sträng har mer än 10 tecken.*/
function isLongString(str: string): boolean {
    return str.length > 10;
  }
  
  // Testa
  console.log(isLongString("Hello")); // false
  console.log(isLongString("TypeScript is awesome!")); // true
  
/* 12. Sortera en array av tal
Skriv en funktion sortNumbers som tar en array av number[] och returnerar den sorterad i stigande ordning.*/
function sortNumbers(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
  }
  
  // Testa
  console.log(sortNumbers([5, 2, 9, 1, 4])); // [1, 2, 4, 5, 9]
  
/* 13. En enkel tuple
Skapa en tuple coordinate som innehåller två värden: latitud och longitud (number båda). Skriv ut värdena.*/
let coordinate: [number, number] = [59.3293, 18.0686]; // Stockholm

console.log(`Latitud: ${coordinate[0]}, Longitud: ${coordinate[1]}`);

/* 14. Typvakt med typeof
Skriv en funktion isString som returnerar true om argumentet är en sträng och false annars.*/
function isString(value: any): boolean {
    return typeof value === "string";
  }
  
  // Testa
  console.log(isString("Hello")); // true
  console.log(isString(42)); // false
  
/* 15. Omvandla array till sträng
Skriv en funktion joinStrings som tar en array av string[] och returnerar en enda sammanslagen sträng.*/
function joinStrings(strings: string[]): string {
    return strings.join(" ");
  }
  
  // Testa
  console.log(joinStrings(["Hello", "world", "!"])); // "Hello world !"
  
/* 16. Defaultvärde i en funktion
Skapa en funktion greet som tar ett valfritt namn och returnerar "Hello, Guest" om inget namn ges.*/
function greet(name: string = "Guest"): string {
    return `Hello, ${name}`;
  }
  
  // Testa
  console.log(greet()); // "Hello, Guest"
  console.log(greet("Alice")); // "Hello, Alice"
  
/* 17. Returnera en funktion
Skriv en funktion createMultiplier som tar ett tal som argument och returnerar en funktion som multiplicerar sina argument med det talet.*/
function createMultiplier(multiplier: number): (value: number) => number {
    return (value: number) => value * multiplier;
  }
  
  // Testa
  const double = createMultiplier(2);
  console.log(double(5)); // 10
  
/* 18. Hantera null och undefined
Skriv en funktion printValue som skriver ut värdet om det inte är null eller undefined. Skriv "No value" annars.*/
function printValue(value: string | number | null | undefined): void {
    console.log(value ?? "No value");
  }
  
  // Testa
  printValue(42); // 42
  printValue(null); // "No value"
  
/* 19. Skapa en enkel interface
Definiera ett interface för ett Book-objekt med title, author och year. Skapa ett objekt som följer interfacet.*/
interface Book {
    title: string;
    author: string;
    year: number;
  }
  
  const myBook: Book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  };
  
  console.log(myBook);
  
/* 20. Implementera logik med if/else
Skriv en funktion gradeEvaluator som returnerar "Pass" om betyget är minst 50 och "Fail" annars.*/
function gradeEvaluator(grade: number): string {
    return grade >= 50 ? "Pass" : "Fail";
  }
  
  // Testa
  console.log(gradeEvaluator(60)); // "Pass"
  console.log(gradeEvaluator(45)); // "Fail"
  
/* 21. Rekursion: räkna ner
Skapa en funktion countdown som tar ett heltal och skriver ut en nedräkning till noll.*/
function countdown(n: number): void {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
  }
  
  // Testa
  countdown(5);
  
/* 22. Skapa en variabel color som innehåller namnet på ett färg.
Skriv en funktion som producerar en mening med variabeln. Om color till exempel är 'blå' ska programmet skriva ut: 'En blå bil'. Variabeln och funktionen ska ha type annotations; dvs du ska tala om vilka datatyper variabeln, parametern och returvärdet har.*/
let color: string = "blå";

function describeCar(color: string): string {
  return `En ${color} bil`;
}

// Testa
console.log(describeCar(color)); // "En blå bil"

/* 23. Skriv en loop som kör 10 gånger.
Du kan lägga den i en funktion för att få bättre struktur på koden. Loopen ska simulera ett trafikljus och därför omväxlande skriva ut "rött", "gult", "grönt" i den ordningen. En färg per varv i loopen.*/

/*spoiler! Tips: du behöver en till variabel, som håller ordning på om det är 1, 2 eller 3 som ska skrivas ut.*/
function trafficLightSimulation(): void {
    const lights = ["rött", "gult", "grönt"];
    for (let i = 0; i < 10; i++) {
      console.log(lights[i % 3]);
    }
  }
  
  // Testa
  trafficLightSimulation();
  
/* 24. Skriv ett program som skriver ut talen 1 till 20 och om varje tal är udda eller jämnt.
Tips 1: Du kan använda en variabel för att hålla reda på om variabeln är jämn. let isEven = true*/
function printOddEvenTips1(): void {
    for (let i = 1; i <= 20; i++) {
      console.log(`${i} är ${i % 2 === 0 ? "even" : "odd"}`);
    }
  }
  
  // Testa
  printOddEvenTips1();

//Tips 2: Operatorn modulo kan användas för att ta reda på om ett tal är udda eller jämnt.
//spoiler! if( x % 2 === 0 ) { /* talet är jämnt */ }
function printOddEvenTips2(): void {
    for (let x = 1; x <= 20; x++) {
      if (x % 2 === 0) {
        console.log(`${x} är jämnt`);
      } else {
        console.log(`${x} är udda`);
      }
    }
  }
  
  // Kör funktionen
  printOddEvenTips2();
  


  