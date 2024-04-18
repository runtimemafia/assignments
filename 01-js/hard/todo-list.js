/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  
  constructor(){
    this.todos = [];
  }

  add(string){
    this.todos.push(string);
  }

  remove(index){
    this.todos.splice(index, 1)
  }

  update(index, string){
    if(typeof(index) === "number" && index < this.todos.length){
      this.todos[index] = string;
    }
  }

  getAll(){
    return this.todos;
  }

  get(index){
    return this.todos[index] ? this.todos[index] : null;
  }

  clear(){
    this.todos = [];
  }


}

module.exports = Todo;