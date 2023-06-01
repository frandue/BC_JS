import axios from "axios";

axios
.get("https://api.github.com/orgs/apple/members")
.then(response => {
  return(response.data);
})
.then(data => {
  for (let item of data){
    document.write(item.login);
    //console.log(response);
  }
})
.catch(error => {
  document.write("Se ha producido un error en la llamada API")
});



// fetch("https://api.github.com/orgs/apple/members")   //Comentar varias lineas Ctrl+k+c     //Descomentar varias lineas Ctrl+k+u
//     .then(response => {
//       console.log(response);
//         return response.json();
//     })
//     .then(data => {
//       for (item of data) {
//         document.write(item.login);
//         }
//     })
//     .catch(error => {
//         document.write("Se ha producido un error en la llamada a la  API")
//     });
