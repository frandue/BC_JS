// 1. Full name validation
// -Name no empty, not null and not undefined
// -length min 5 character
 var isValidFullName = fullname => fullname && (fullname.length >= 5); 

 //-Obtener el nombre que ha introducido el usuario
 //-Validar ese nombre
 //-Si es invalido => Aplicamos regla CSS para error sobre el imput
 //-Si es válido => No aplicamos la regla CSS (la eliminamos)

 function validateFullName (){
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);

    if(valid){
        fullNameField.classList.remove("error");
    } else {
        fullNameField.classList.add("error");
    }

    return valid;
 };


// 2. Birthdate validation
//-Year. Mayor de 1850. Menor o igual que el año actual
//-Month entre 1 y 12
//-Dias. Maximo 30 o 31 segun el mes. Con la excepcion de febrero que sera 28 o 29(segun año bisiesto)
var isValidYear = year => year && year >= 1850 && year < new Date().getFullYear();
var isValidMonth = month => month >= 1 && month <= 12;
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31  ];
    return day > 0 && day <= monthLength[month - 1];
};

var splitDateInParts = date => {
    var parts = date.split("/");
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
};

var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false;
    var parts = splitDateInParts(date); // [day, month, year]
    return ( isValidYear(parts[2]) && isValidMonth(parts[1]) && isValidDay(parts[0], parts[1], parts[2]));
};
var validateBirthdate = () => {
    var birthdayField = document.getElementById("birthday");
    var valid = isValidDate(birthdayField.value);
    if (isValidDate(birthdayField.value)) {
        birthdayField.classList.remove("error");
    } else {
         birthdayField.classList.add("error");
    }
    return valid;
    };

// 3. DNI validation



// 4 . Mobile validation



// 5. General Algorithm

function validateForm(event) {
    event.preventDefault();

    //validateFullName()
    validateBirthdate()
    /**
     *  ValidateFullName
     *  ValidateBirthdate
     *  ValidateDNI
     *  ValidateMobile
     */
};

//Events
document.getElementById("register").addEventListener("submit", validateForm, true);