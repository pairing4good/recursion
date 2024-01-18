
function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        modifiedTodos.push('done - ' + todos[index]);
        transform(++index, todos, modifiedTodos);
        return modifiedTodos
    }else{
        return modifiedTodos
    }
}
