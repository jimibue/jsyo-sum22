const {getInitTodos, addTodo, updateTodo, removeTodo} = require('../lectures/CRUD');

it('test Read', ()=>{
    expect(getInitTodos().length).toBe(2)
})

it('test Create',()=>{
    // we go to a website and grab the todos
    let todos = getInitTodos()
    // then we go to form and create a new todo
    const newTodo = {id:3, complete:false, name:'dishes'}
    // we can't mutate todos...
    expect(addTodo(todos,newTodo).length).toBe(3)
    expect(todos.length).toBe(2)
})

it('test Update',()=>{
    // we go to a website and grab the todos
    let todos = getInitTodos()
    
   
    // update todo should return a new list of todos with the item
    // completetoggled
    let newTodos = removeTodo(todos,1) 
 
    expect(newTodos.length).toBe(1)
    expect(newTodos[0].id).toBe(2)
    expect(todos.length).toBe(2)
})

it('test Filter',()=>{
    // we go to a website and grab the todos
    let todos = getInitTodos()
    
   
    // update todo should return a new list of todos with the item
    // completetoggled
    let newTodos = updateTodo(todos,1) 
    let newFirstTodo = newTodos[0]
    let oldFirstTodo = todos[0]
    expect(newFirstTodo.complete).toBe(true)
    expect(oldFirstTodo.complete).toBe(false)
})