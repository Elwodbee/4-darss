fetch("https://jsonplaceholder.typicode.com/todos")
.then(sorov => sorov.json())
.then(javob =>{
    javob.forEach(item => {
        
        
        const wrapper = document.createElement("div");
        const newText = document.createElement("h2");
        const newId = document.createElement("p");
        const newUser = document.createElement("h3");
        const newComplet = document.createElement("p");
        
        
        wrapper.style.width = "400px";
        wrapper.style.height = "400px";
        wrapper.style.border = "4px solid black";

        newComplet.textContent = item.completed;
        newUser.textContent = item.userId;
        newId.textContent = item.id;
        newText.textContent = item.title;
        document.body.append(newText,newId,newUser,newComplet);
        
        document.body.appendChild(wrapper);
    });
})
.catch(error => {
    console.log("XATO");
})