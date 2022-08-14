const url ="https://randomuser.me/api";

fetch(url)
    .then(function(response){
        console.log(response);
        return response.json();
    })

    .then(function(myJson){
        //console.log(myJson);
        const email = myJson.results[0].email;
        const p = document.createElement("p");
        p.innerText = email;
        document.body.appendChild(p);
    })