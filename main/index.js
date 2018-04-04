import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from '../components/TodoApp'

function App(){
    return (
        <div className="container">
            <TodoApp />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)