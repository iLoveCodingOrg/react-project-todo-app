import React from 'react'
import NewItem from './NewItem'
import Todo from './Todo'

export default class TodoApp extends React.Component{
  constructor(){
    super();
    this.state = {
      list: [
        "Get Milk",
        "Finish Homework",
        "Code a website"
      ]
    }
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(item){
    let newList = this.state.list
    newList.push(item)
    this.setState({
      list: newList
    })
  }

  deleteItem(index){
    let newList = this.state.list
    newList.splice(index, 1)

    this.setState({
      list: newList
    })
  }

  render(){
    return(
      <div>
        <h3 className="text-center">Todo List App</h3>
        <NewItem addItem={this.addItem}/>
        <br/>
        <ul className="list-group">
          {this.state.list.map((item, index)=>{
            return <Todo
              todoId={index}
              onDelete={this.deleteItem}
              key={index} item={item}/>
          })}
        </ul>
      </div>
    )
  }
}