function newItem() {
    //jQuery Code
    //1. Adding a new item to the list: 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === ''){
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //2. Crossing out an item out:
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dbclick", function crossOut() {
        li.toggleClass("stirke");
    });

    //3.(i) Adding the delete button:
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    //3. (ii) Adding Class delete
    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }

    $('#list').sortable();
}
