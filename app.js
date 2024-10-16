    //chapters; 38 - 42,
    //FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

 //1

 function power(a, b) {
    return Math.pow(a, b);
}

console.log(power(2, 3));

 //2
 
 function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024));

 //3
 
 function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var S = semiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

console.log(triangleArea(3, 4, 5));

 //4
 
 function calculateAverage(marks) {
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return sum / marks.length;
}

function calculatePercentage(marks) {
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return (sum / (marks.length * 100)) * 100;
}

function mainFunction() {
    var marks = [85, 90, 95];
    var avg = calculateAverage(marks);
    var percentage = calculatePercentage(marks);
    console.log(`Average: ${avg}`);
    console.log(`Percentage: ${percentage}%`);
}

mainFunction();

 //5
 
 function customIndexOf(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(customIndexOf("hello", 'e')); 

 //6

 function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}

console.log(removeVowels("Hello World"));

 //7
 
 function countSuccessiveVowels(text) {
    var vowels = 'aeiouAEIOU';
    var count = 0;
    
    for (var i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
            count++;
        }
    }
    
    return count;
}

var sentence = "Pleases read this application and give me gratuity";
console.log(countSuccessiveVowels(sentence));

 //8
 
 function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

var distanceKm = 5;
console.log(`Meters: ${convertToMeters(distanceKm)}`);
console.log(`Feet: ${convertToFeet(distanceKm)}`);
console.log(`Inches: ${convertToInches(distanceKm)}`);
console.log(`Centimeters: ${convertToCentimeters(distanceKm)}`);

 //9

 function calculateOvertimePay(hoursWorked) {
    var overtimeRate = 12;
    var overtimeHours = hoursWorked > 40 ? hoursWorked - 40 : 0;
    return overtimeHours * overtimeRate;
}

console.log(calculateOvertimePay(45));

 //10

 function calculateNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    var remainder = amount % 100;

    var notes50 = Math.floor(remainder / 50);
    remainder %= 50;

    var notes10 = Math.floor(remainder / 10);

    return { notes100, notes50, notes10 };
}

var amount = 580;
var notes = calculateNotes(amount);
console.log(`100s: ${notes.notes100}, 50s: ${notes.notes50}, 10s: ${notes.notes10}`);


    //chapters; 43 - 48
    //EVENTS

 //1
 function showAlert() {
    alert("Link clicked!");
}

 //2
 function showAlert(mobileName) {
    alert("You clicked on " + mobileName);
}

 //3
 function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

 //5
 function changeImage() {
    document.getElementById("myImage").src = "https://via.placeholder.com/300x200?text=Image2";
}

function resetImage() {
    document.getElementById("myImage").src = "https://via.placeholder.com/300x200?text=Image1";
}

 //5
var counter = 0;

function increaseCounter() {
     counter++;
     document.getElementById("counterValue").innerHTML = counter;
}
 
function decreaseCounter() {
     if (counter > 0) {
         counter--;
     }
     document.getElementById("counterValue").innerHTML = counter;
}