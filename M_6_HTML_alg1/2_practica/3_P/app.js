// 1. Full name validation
// -Name no empty, not null and not undefined
// -length min 5 character
var isValidFullName = fullname => fullname && (fullname.length >= 5); 

// 2a. Birthdate validation
//-Year. Mayor de 1850. Menor o igual que el año actual
//-Month entre 1 y 12
//-Dias. Maximo 30 o 31 segun el mes. Con la excepcion de febrero que sera 28 o 29(segun año bisiesto)
var isValidYear = year => year && year >= 1850 && year < new Date().getFullYear();
var isValidMonth = month => month && (month >= 1) && (month <= 12);
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31  ];
    return day > 0 && day <= monthLength[month - 1]; // Par transforma un numero de mes en la posicion del array
};

var splitDateInParts = date => {
    var parts = date.split("/");    // parts => [0D, 0M, 0Y]
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];  // parseInt, trasforma un string en un numero
};

var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false; // 1/1/1990 (8) o 01/01/1990 (10) 
    var parts = splitDateInParts(date); // [day(0), month(1), year(2)]
    return ( isValidYear(parts[2]) && isValidMonth(parts[1]) && isValidDay(parts[0], parts[1], parts[2])); // Esto se podria sustituir por un map
};

// 2b. Birthdate over 18.
var isOver18 = date => {
    var parts = splitDateInParts(date); // [day, month, year]
    var nowDate = new Date();
    var limitDate = nowDate.setFullYear(nowDate.getFullYear() - 18);
    return limitDate >= new Date(parts[2], parts[1] - 1, parts[0]); // Months in 0 base
    };
    var showIsAdult = () => {
    var birthdayField = document.getElementById("birthday");
    document.getElementById("age").innerHTML = isOver18(birthdayField.value)? "SÍ" : "NO";
    };
    
// 3. DNI validation
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";

var isValidDNILetter = (dniLetter, dniNumber) =>
    DNI_LETTERS[dniNumber % 23] === dniLetter.toUpperCase();
var isValidDNINumber = number => number >= 0 && number <= 99999999;

var isValidDNI = dni => {
    if (dni.length !== 9) return false;

    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);

return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
};

// 4 . Mobile validation
var isValidMobile = mobile => {
    return (
        mobile &&
        parseInt(mobile) &&
        mobile.length === 9 && (mobile.startsWith(9) || mobile.startsWith(8) || mobile.startsWith(7) || mobile.startsWith(6)) // startsWith = mobile [0]
    );
};


// 5. General Algorithm

var validateInput = (id, validationFunction, onValidCallback) => {
    var field = document.getElementById(id); // si selecciono una variable y luego F2, lo modifico en todos lados
    var valid = validationFunction(field.value);// Ctrl + d selecciono y modifico todas las instancias

    if (valid) {
        field.classList.remove("error");
        onValidCallback && onValidCallback();
    } else {
        field.classList.add("error");
    }
    return valid;
}

function validateForm(event) {
    event.preventDefault();

    validateInput("fullname", isValidFullName);
    validateInput("birthday", isValidDate);
    validateInput("birthday", showIsAdult);
    validateInput("dni", isValidDNI);
    validateInput("mobile", isValidMobile);
};

    var validateFullName = () => validateInput("fullName", isValidFullName);
    var validateBirthdate = () =>
         validateInput("birthday", isValidDate, showIsAdult);
    var validateDNI = () => validateInput("dni", isValidDNI);
    var validateMobile = () => validateInput("mobile", isValidMobile);
  
    var validateForm = event => {
        event.preventDefault();
        validateFullName();
        validateBirthdate();
        validateDNI();
        validateMobile();
    };
    
//Events
document.getElementById("register").addEventListener("submit", validateForm);
document.getElementById("fullName").addEventListener("change", validateFullName);
document.getElementById("birthday").addEventListener("change", validateBirthdate);
document.getElementById("dni").addEventListener("change", validateDNI);
document.getElementById("mobile").addEventListener("change", validateMobile);