/*Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch y pintar en nuestro html (utilizando bootstrap vía cdn para los estilos) una tabla de 10 usuarios y debe contener las propiedades en sus columnas de Id, name, username, email y address-street. */

/*let element = document.querySelector('#li')*/
let tab = document.querySelector('#tabla')
const frag = document.createDocumentFragment()
let usuarios = fetch('https://jsonplaceholder.typicode.com/users');



usuarios
    .then(valor=>{
        return  valor.json()
    })

    .then(usuarios=>armarTabla(usuarios)
        
    )

function armarTabla(data){
    let users = data;
    for (let i = 0; i < users.length; i++) {
        
        let vectorUser = users[i];
        let id = vectorUser.id;
        let name = vectorUser.name;
        let username = vectorUser.username;
        let email = vectorUser.email;
        let address = vectorUser.address.street;


        let tbody = document.createElement("tbody")
        tbody.innerHTML = 
        
        `<tbody>
        <tr>
          <th scope="row">${id}</th>
          <td>${name}</td>
          <td>${username}</td>
          <td>${email}</td>
          <td>${address}</td>
        </tr>
         </tbody>`;

         tab.appendChild(tbody)
    }
}
