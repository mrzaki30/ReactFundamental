import './App.css';
import shoppingIcon from './assets/shopping-icon.svg';
import plusIcon from './assets/plus-icon.svg';
import minusIcon from './assets/minus-icon.svg';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([
        { title: 'Learn React', count: 1 },
        { title: 'Learn Firebase', count: 1 },
        { title: 'Learn GraphQL', count: 1 },
    ]);
    // console.log(todos);
    console.log(value);
    return (
        <>
            <nav className="nav" >
                <img className="nav-icon" src={shoppingIcon} alt="Shopping Cart" />
                <h1 className="nav-title">Shopping Cart</h1>
            </nav>
            <section className="container">
                <form className="form">
                    <input onChange={(e) => {
                        setValue(e.target.value)
                    }}
                        value={value} type="text" className="input" placeholder="List" />
                    <button className="add-button" type="submit">add</button>
                </form>
                {todos.length > 0 ? (
                    <div className="todos">
                        {todos.map((todo, index) => {
                            return (
                                <div key={index} className="todo">
                                    {todo.title}
                                    <div className="todo-icon-wrapper">
                                        <div className="todo-count">
                                            {todo.count}
                                        </div>
                                        <button className="todo-action-button">
                                            <img src={minusIcon}></img>
                                        </button>
                                        <button className="todo-action-button">
                                            <img src={plusIcon}></img>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div> kosong</div>
                )}
            </section>
        </>
    );
}

export default App;
