// Create(POST), Read(GET), Update(PUT), Destroy(DELETE) (web 101)

//TODO CRUD in js update the to have be complete or not
// const todos = ['eat','sleep', 'code']

// READ -GETTING LIST OF TODOS
const todos = [
  { id: 1, complete: false, name: "eat" },
  { id: 2, complete: true, name: "sleep" },
];


//Read (will be done with API Call to get these)
const getInitTodos = ()=>{
    return todos
}


// get todo from FORM 
const addTodo = (todosState, todo)=>{
    return [todo, ...todosState]
}

// click todo event that triggers this
const updateTodo = (listOfTodos, id)=>{
    // do the logic

    // with map onliner
    return listOfTodos.map((t)=> t.id === id ? {...t, complete: !t.complete} : t)

    
     // with map onliner
    // return listOfTodos.map(t=> {
    //     // if the todo matches th id passed toggling complet on that todo
    //     // and return
    //     if(t.id === id ){
    //         return {...t, complete: !t.complete} 
    //     } 
    //     // else it doesn't match just return the todo as is
    //     return t
    // })


    // Another way
    // Gotcha ... is it does a shallow {{}}
    // let cloneTodos = [...listOfTodos]
    // let index = cloneTodos.findIndex((t)=> t.id ===id)
    // cloneTodos[index].complete = !cloneTodos[index].complete
    // return cloneTodos

}

// click event on TODO to trigger this
const removeTodo = (todosState, id)=>{
    // I want throw my todoState and remove the todo with id given
   return todosState.filter((t)=> t.id !== id)
}

module.exports = { getInitTodos, addTodo,updateTodo,removeTodo }


