// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.
function arraySum() {
    let numbers = [3, 7, 2, 8];
    return numbers.reduce((sum, num) => sum + num, 0); 
}
console.log(arraySum()); 
// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.
function findMax() {
    let numbers = [1, 5, 9, 3, 7];
    return numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
}
console.log(findMax());
// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.
function joinStrings() {
    let strings = ["valer", " ", "shengenacvale", "!"];
    return strings.reduce((combined, str) => combined + str, "");
}
console.log(joinStrings());
// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.
function multiplyNumbers() {
    let numbers = [2, 3, 4];
    return numbers.reduce((product, num) => product * num, 1); 
}
console.log(multiplyNumbers()); 
// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.
function subtractNumbers() {
    let numbers = [10, 3, 2];
    return numbers.reduce((difference, num) => difference - num);
}
console.log(subtractNumbers()); 
// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.
function doubleValues() {
    let numbers = [1, 2, 3, 4];
    return numbers.map(num => num * 2); 
}
console.log(doubleValues()); 
// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.
function lowercaseStrings() {
    let strings = ["luka", "suxo"];
    return strings.map(str => str.toLowerCase());
}
console.log(lowercaseStrings()); 
// 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი. map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.
function addTextToElements() {
    let elements = ["mivdivart", "unishi"];
    return elements.map(element => element + "gamocdaze");
}
console.log(addTextToElements());
// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.
function squareNumbers() {
    let numbers = [1, 2, 3];
    return numbers.map(num => num * 2); 
}
console.log(squareNumbers()); 
// 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.
function addTextToEachElement() {
    let elements = ["s1", "s2"];
    elements.forEach((element, index) => {
        elements[index] += "ss";
    });
    return elements;
}
console.log(addTextToEachElement());
// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.
function increaseScores() {
    let students = [{name: "suxo", score: 17}, {name: "luka", score: 17}];
    students.forEach(student => {
        student.score += 5;
    });
    return students;
}
console.log(increaseScores());
// 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.
function reverseArray() {
    let array = [1, 2, 3, 4];
    let reversed = [];
    for (let i = array.length - 1; i > 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
console.log(reverseArray());
// 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და ჩასვი ისინი გვერდზე for-ის გამოყენებით.

// 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.
function multiplicationTable() {
    let numbers = [2, 3];
    numbers.forEach(num => {
        console.log("table" + num);
        for (let i = 1; i <= 10; i++) {
            console.log(num + "x" + i + "=" + (num * i));
        }
    });
}
multiplicationTable();

// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.
function filterGreaterThanTen() {
    let numbers = [5, 12, 18, 3];
    return numbers.filter(num => num > 10);
}
console.log(filterGreaterThanTen());
// 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი. filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც აქვთ კონკრეტული CSS კლასი.