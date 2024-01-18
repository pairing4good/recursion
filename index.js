
function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        // on this line - prepend the string 'done - ' to each `todo` description
        // on this line - call transform recursively
        return modifiedTodos
    }else{
        return modifiedTodos
    }
}
