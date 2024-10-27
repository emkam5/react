import { useEffect } from "react";
import { useState } from "react";
import { Search } from "../../components/Search/Search";

export function UsersPage() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formData
        })
        e.target.reset();
        setMessage('Форма успешно отправлена')
    }
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    const [query, setQuery] = useState('');
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = users.filter((user) => {
        return user.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <section>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Имя пользователя" className="inp" />
                    <button type="submit" className="btn">Отправить форму</button>
                    <div className="message">{message}</div>
                </form>
                <Search handleChange={handleChange} />
                {
                    filteredProducts.length ?
                        filteredProducts.map((user) => {
                            return (
                                <div className="user">{user.name}</div>
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </section>
    )
}
