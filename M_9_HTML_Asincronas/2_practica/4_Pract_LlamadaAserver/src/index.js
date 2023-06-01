fetch("https://api.github.com/orgs/apple/members")
    .then(response => {
      console.log(response);
        return response.json();
    })
    .then(data => {
      for (item of data) {
        document.write(item.login);
        }
    })
    .catch(error => {
        document.write("Se ha producido un error en la llamada a la  API")
    });

