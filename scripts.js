function addFunction() {


    //take user input
    var user_input = document.getElementById("user_input").value;

    //create elements list item element li
    var listItem = document.createElement("li");

    //create child element(check box, text Node, delete button)
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox"

    var textNode = document.createTextNode(user_input);


    var deleteButton = document.createElement("button");
    deleteButton.type="button";
    deleteButton.textContent="Delete";
    deleteButton.onclick= deletefunction;

    //append child elements to parent li
    listItem.appendChild(checkBox);
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);

    //append li listitem to todolist
    document.getElementById("todoList").appendChild(listItem);

    //set the input to ""    
    document.getElementById("user_input").value = "";
    
}

//create delete function
function deletefunction() {
    var listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
}
