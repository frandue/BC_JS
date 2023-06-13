1. Video 1 ES6
 ES6 es el momento en que se decido hacer las introducciones año a año, esta es la del 2015.

 Formas de declarar variables:

    **Var, caracteristicas:
        Ejp: var teacher = "Javier"
        1. reasignable, tantas veces como queramos. Se queda con el ultimo valor, shadowing
        2. Ambito de funcion, solo exite en la funcion NO ES DE BLOQUE{} 
        3. Se declara globalmente (Objeto window) en el ambito superor / fichero. console.log(window.teacher)=console.log(teacher)
        4. Muy flexibles, hasta el punto que es problematico.
        5. $Hoisting$, declara lsas variables y funciones al principio del codigo( se les asigna memoria al principio en el compilado).
        6. Dentro de un if, no representa un bloque para var.
        7. La varibles windows.alert es una funcion global, esta predifinida.
        8. OLVIDARSE DE USAR VAR

    ** Let y const , Diferencias:
        9. let es reasignables y const no es reasignables
        10. const y let no se permite hoisting
        11. No se puede redeclarara
        12. Ambito de bloque.
        13. NO se declara globalmente (Objeto window)
        14. Siempre empear a usar const y ya se vera cuando cambiamos a let. Ejp en bucles
        15. No puede reasignasr pero si puedo modificar el objeto que se almacena en const.

Operadore nuevos en JS

**SPREAD(...)Con arrays
    Es un iterable(coleccion de caracteres).
    Nos permite estender o difundir (repartir)

    En llamadas a funciones:
    Ejp:
    const names = ["Javi","Lissette","Dani"];
    const sayNames = (name1, name2, name3) => {
        console.log(name1);
        console.log(name2);
        console.log(name3);
    }
    O:
    sayNames(names[0],names[1],names[2]);
    
    O con SPREAD:
    sayNames(...names); -> es lo mismo que la linea de arriba.
    
    Ejp àra hacer una copia de array:
    const original = [1, 2, 3];
    const copy = [...original];

    de forma tradicional seria:
    const original = [1, 2, 3];
     const copy = [];
        for(let i = 0; i<original.length; i++){
            copy.push(original[i]);
        }

Valores primitivos:
    string("hola")
    numero (5)
    booleano(true,false)
Se guarda en memoria tal cual es ese valor.

Valores no primitivos: -> No podemos almacenarla tal cual, almacenamos la direccion de memoria
    Un array
    Un objeto
    Una clase
    Hay mas...

**SPREAD(...)Con objetos ES9(2018)
Ejp:
    const original = {
        name: "Javi",
        surname: "Calzado",
        age: 36,
    };

    const copy = { ...original };
    console.log(copy);

OJO Se hace por que son primitivos sino no lo haria

Para "MERGE" dos objetos con distintas propiedades:
Ejp:
    const id = {
        name: "Javi",
        surname: "Calzado",
    };  
    const details = {
        age: "36",
        phone: "234523452",  
    };
    const user = { ...id, ...details };  // Merge
    console.log(user); 

    Sirve para copiar las propiedas de una familia y ya luego modifico sus propiedades.

 **REST(...)En vez de repartir "agrupamos".
    Ejp:
        const muFunction = (...myArguments) => {
            console.log(myArgumentes);
            console.log(myArgumentes.length);
        }
        myFunction("uno",2,true);
    
    Me sirve para hacer funciones flexibles, cuando no sepa el numero de valores 

**DESTRUCTURING, deconstruir. Estreaer elementos de un array o propiedades y las guardamos en propiedades.
EJP:
    const teachers = ["aaa","sss","ddd","fff","ggg"];
    const prim = tecahers[0];
    const seg = teachers[1];
    const terc = teachers[2];
    const cuart = teachers[3];
    console.log(prim,seg,terc,cuart);

    Con destructuring(1, el tipo de variable, 2 nombre de cada posicion de array, 3 nombre del array que le vamos a destruturing)
    const teachers = ["aaa","sss","ddd","fff","ggg"];
    const [prim, seg, terc, cuart] = teachers;
    console.log(prim,seg,terc,cuart);

    Puedo dejar huecos de las posiciones que no me interese
    const [, , , cuart] = teachers;

    Es muy util en argumentos de funcion 
    const teachers = ["aaa","sss","ddd","fff","ggg"];
    const getSecond = ([, second]) => second;
    console.log(getSecond(teachers))

EJP: destructuring de un objeto
    const user = {
        id: 23452345
        name: "Javi",
        surname: "Calzado",
        age: 36,
    };

    const getFullN = ({name,surname}) => name + " " + surname; // El orden no tiene que coincidir, solo el nombre de la propiedad
    console.log(getFullN(user))

Se puede cambiar el nombre de la propiedad

    const user = {
        id: 23452345
        name: "Javi",
        surname: "Calzado",
        age: 36,
    }; 
    const {id: userid, name, age } = user asi cambio id por userid

Un objeto en cadenado dentro de otro objeto

    const user = {
        id: 23452345
        name: "Javi",
        surname: "Calzado",
        age: 36,
        location: {
            country: "spain",
            city: "Malaga",
            postalCode: 968769
        }
    }
    const getNameAndCity = user => user.name + "from" + user.location.country;
    console.log( getNameAndCity );

Con destructuring:

    const user = {
        id: 23452345,
        name: "Javi",
        surname: "Calzado",
        age: 36,
        location: {
            country: "spain",
            city: "Malaga",
            postalCode: 968769
        }
    }
    const getNameAndCity = ({ name, location: {country: userCountry } }) 
    => name + "from" + userCountry;     
    console.log( user ); 

**Combinacion de REST and DESTRUCTURING

EJP:
    const sample = ["uno", 2, true];        //Cojer todos lo elementos menos el primero
    const getSample_excepFirst[  , ...rest ] = sample;
    console.log(getSample_excepFirst(sample));

Operaciones para evitar bucles

EVERY(Devuelve true si todos los elementos del array cumplen con una condición.  En forma de función (callback)->funcion como argumento de otra:)
EJP:
    const bookCollection = [
    { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
    { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
    { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
    { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
    { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
    ];

    const allBooksRead = books => books.every(book => book.read);
    console.log(allBooksRead(bookCollection)); // false


SOME(Devuelve true si al menos un elemento del array cumplen con una condición dada)
EJP:
    const someBooksRead = books => books.some(book => book.read);
    console.log(allBooksRead(bookCollection)); // true


FIND(buscar el primer elemento que cumple la condicion )
EJP:
    const findBooksEve = books => books.find(book => book.title === "Eve");     // sino esta undifine  //OJO si queremos el indice y no el objeto cambio find por findIndex
    console.log(allBooksRead(bookCollection)); // isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true  // con findIndex; 3


FILTER(Tu me das un array y te devuleve OTRO NUEVO inmutado)
EJP:
    const unreadBooks = books => books.filter(book => book.read === false);
    onsole.log(unreadBooks(bookCollection));    //Lista de libros no leidos

    const booksOver300Pages = books => books.filter(book => book.pages >= 300);
    console.log(booksOver300Pages(bookCollection));     //Lista de libros con mas de 300 paginas

    const multiAuthorBooks = books => books.filter(book => Array.isArray(book.author));
    console.log(multiAuthorBooks(bookCollection));      //Lista de varios autores       //Array. me dice si un propiedad es una array


FOREACH(permite iterar elemento a elemento)
EJP:
    const showTitles = books => books.forEach(b => console.log(b.title));
    showTitles(bookCollection);     // Me enseña todos lor titulos por consola


SORT(ordenar, reordena los elementos )
EJP:
    const sortByLength = books => books.sort((a, b) => (a.pages > b.pages ? 1 : -1));
    sortByLength(bookCollection);
    console.log(bookCollection);    


JOIN(Concatena todos los elementos de un array en un string y lo devuelve)
EJP:
    const sample1 = ["Javi", "Lissette", "Dani"];
    const sample2 = ["Texto", 43, true];
    console.log(sample1.join("-")); // - Caracter de separacion
    console.log(sample2.join(" & ")); // Hace casting a string de los elementos.


MAP Y REDUCE

En MAP, aplicar una función transformadora elemento a elemento, crea un array con los el mismo numero de elementos
En REDUCE, lo trasforma a una sola cosa, sirve para sacar totales o estadisticas

EJP de MAP:

    const getTitleCollection = books => books.map(book => book.title);
    console.log(getTitleCollection(bookCollection));    //Solo me da los titulos

    const addOwner = (owner, books) => books.map(book => ({ ...book, owner}));
    console.log(addOwner("Jaime",bookCollection));      //Se añade owner a cada objeto
    
EJP de Reduce:
    const getTotalPages = books => books.reduce((sumPages, book) => sumPages + book.pages, 0); //1- El callback Result, 2-Valor de comienzo,3-Almacena suma, 4-Empieza en cero
    console.log(getTotalPages(bookCollection));

EJP de Reduce_2:
    const getTitlesString = books => books.reduce((titles, book) => titles + " " + book.title, "");
    console.log(getTitlesString(bookCollection));

EJP de Convinacion:
    const extracInreadBoolsSorted = books =>
        books
            .filter(book => !book.read)     // Selecciono los libros no leidos
            .map(book => ({title: book.title, pages: book.pages}))  //Cambio los objetos de nombre, nombre del nuevo campo: nombre a cambiar
            .sort((a,b) => b.pages - a.pages);      //Ordeno de las paginas de mayor a menos
        console.log(extracInreadBoolsSorted(bookCollection));

EJP de Convinacion 1:








    


