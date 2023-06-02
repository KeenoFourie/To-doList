const sortItems = document.querySelector("#sort_button")
const addItem = document.querySelector("#add_button")
const Input = document.querySelector("#input_item")
const output_list = document.querySelector("#listing_of_your_item")
let to_DoList = []


// Add item to local storage
addItem.addEventListener("click", ()=> {
    (input_item.value)
        to_DoList.push(input_item.value)
        input_item.value = "";
    if(Input = "") {
        
    }
    
    
// local storage
    localStorage.setItem("To-Do List", JSON.stringify(to_DoList))
});

// Add item to list below
addItem.addEventListener("click", ()=> {    
    to_DoList.forEach( (item) => {
        output_list.innerHTML += `
            <li>${item} <button id="clear_button" onclick="clear()">x</button> </li>
        `
    })
});

// Clear button
let clear = document.querySelector("#clear_button");