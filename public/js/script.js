function clicked(checkbox){
    var curr = checkbox.nextElementSibling;

    if(checkbox.checked){
        curr.style.textDecoration = "line-through";
    }    
    else{
        curr.style.textDecoration = "none";
    }
}