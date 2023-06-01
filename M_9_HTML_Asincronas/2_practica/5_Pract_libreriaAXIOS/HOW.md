1. Abre una terminal en la carpeta de tu proyecto y ejecuta los siguientes comandos:
```bash
    npm init -y
    npm i -D axios
```
2. Agrega el siguiente script en el archivo package.json:
```bash
    "scripts": {
      "start": "parcel index.html"
     (Elimminar el que viene por defecto, test)
   }
```

3. En la etiqueta script del html añadir el tipo modulo:
```bash
     <script src="./src/index.js" type="module"></script>
```

4. Ejecuta el siguiente comando en la terminal para pararlo:
```bash
    npm start
```
  *Esto iniciará el servidor de desarrollo de Parcel y compilará tu código JavaScript.
  Luego podrás acceder a tu página en http://localhost:1234*

5. Para salir de Parcel
```bash
    Ctrl+c -> para parar la aplicacion
```