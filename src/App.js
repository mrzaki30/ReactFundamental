import './App.css';
import shoppingIcon from './assets/shopping-icon.svg';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([
        { text: 'Learn React', count: 1 },
        { text: 'Learn Firebase', count: 1 },
        { text: 'Learn GraphQL', count: 1 },
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
                    <div className="todos"> todoss</div>
                ) : (
                    <div className="empty">No todos</div>
                )}
            </section>
        </>
    );
}

export default App;
