1. En el terminal donde tengo todas las dependencias "npm install".
   
2. CODIGO DEL BACKEND Carpeta SERVER/SRC/ data.json, aparecen la lista de cuentas y los movimientos de cada.
3. En la misma el fichero login, donde tengo los datos para logearme.

4. CODIGO DEL FRONTEND Carpeta SRC, la estructura que tiene esa carpete la podemos encontrar en casos reales.
5. En carpeta SRC/pages tenemos la distribucion de la barra de la pagina bien segmentada.
6. En la carpeta COMMON, tenemos los archivos que nos ayudan a interactuar con el HTML.

7. En la carpeta raiz en .env viene la ruta del puerto donde corre el servidor.
8. Con el comando "npm start" me arranca el servidor.

9. Para empezar a manipularlo carpeta SRC/PAGES/LOGIN/, creo un nuevo archivo login.js
10. En esa misma carpeta en el archivo login.html tengo que hacer referencia a login.js 
11. En esta misma carpeta crea el fichero login.api.js, aqui añadimos toda ña informacion relaccionada con la API y el servidor

12. Instalamos una libreria para hacer las validaciones del loging, llamada "FONK". Es de lemond code.
13. Para instalarla npm install @lemoncode/fonk --save (Hay que estar fuera del servidor).
14. Creamos un nuevo fichero dentro de la carpeta de SRC/PAGES/LOGIN/, donde vamos hacer las validaciones

15. En SRC/CORE/ROUTER/history.js Se indica el historial de nevegacion y las rutas en routes.js.
16. Importo estos dos archivos a login.js

17. Para cambiar de contraseña y usuario en SERVER/SRC/login.niddleware.js

18. Para implementar las cuentas en SRC/PAGES/ACOUNTS-LIST/account-list.helpers.js
19. En esa carpeta creo el fichero principal que se va a llamar igual a la carpeta.
20. Vinculo ese fichero con el html de esa carpeta.
21. Al final del todo  <script src="account-list.js"></script>
22. Creo otro fichero en esa carpeta encargado de la API account-list.api.js
23. En ese archivo importamos axios de primeras.


24. Un servidor "mockeado" o "mock server" es un servidor simulado que imita el comportamiento de un servidor real pero sin la funcionalidad completa. Los servidores mockeados se utilizan comúnmente en pruebas de software y desarrollo de aplicaciones para simular el comportamiento de un servicio o API sin depender de la implementación real. Un servidor mockeado puede ser configurado para responder a solicitudes y devolver respuestas predefinidas o generadas de forma programática. Esto permite a los desarrolladores probar y depurar aplicaciones sin depender de servicios externos reales, lo que puede ser útil en situaciones en las que los servicios reales no están disponibles o pueden tener un comportamiento impredecible.
    
25. RESUMEN:
26. Al archivo html referenciamos el archivo principal "nombre_carpeta".js
27. En este importamos el resto: api...

28. Vamos a mappear los datos de las cuentas para ediitar el saldo y la fecha
29. Creamos un nuevo archivo account-list.mapper.js

30. Ahora tengo que esperar a que se eliga una opcion en los movimientos para que se mueva a una pestaña o a otra. En account.list.js import una funcion nueva.

31. Ahora nos centramos en la opcion de crear cuenta desde el boton o desde pulsando encima de la cuenta.
32. Nos vamos a la carpeta SRC/PAFES/ACCOUNT y solo tenemos un html
33. Creamos nuestro archivo pricipal de "nombre-carpeta.js"
34. Lo scripteo alfinal de html, dentro del body.
35. Se parece un poco a la pagina de loging asi que voy a ir dando los mismos pasos.
36. Creamos ahora en las misma carpeta account.validation.js