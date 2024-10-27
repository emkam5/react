import s from './CatalogPage.module.css';
import { products } from '../../data/data.js';
import { Card } from '../../components/Card/Card.jsx';
import { useState } from 'react';
import { Search } from '../../components/Search/Search.jsx';

export function CatalogPage() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function sort(e) {
        setSorting(e.target.value);
    }
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
        &&
        (product.category == category  || category == 0);

    })

    const sortProduct = (sorting, products) => {
        switch (sorting) {
            case 'price_arc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...products].sort((a, b) => b.price - a.price);
            case 'count_arc':
                return [...products].sort((a, b) => a.count - b.count);
            case 'count_desc':
                return [...products].sort((a, b) => b.count - a.count);
            default:
                return products;
        }
    }
    const sortedFilteredProducts = sortProduct(sorting, filteredProducts);
    return (
        <div className="container">
            <div className={s.catalog}>
                <h1 className={s.hh}>Каталог товаров</h1>
                <div className={s.categories}>
                    <h3>Категории: </h3>
                    <button onClick={()=>setCategory(0)} className={s.btn}>Все</button>
                    <button onClick={()=>setCategory(1)} className={s.btn}>R17 диски</button>
                    <button onClick={()=>setCategory(2)} className={s.btn}>R18 диски</button>
                </div>
                <div className={s.block}>
                    <Search handleChange={handleChange} />
                    <select onChange={sort} className={s.select}>
                        <option value="price_arc">По возрастанию цены</option>
                        <option value="price_desc">По убыванию цены</option>
                        <option value="count_arc">По возрастанию кол-во</option>
                        <option value="count_desc">По убыванию кол-во</option>
                    </select>
                </div>
                <div className={s.catalogs}>
                    {
                        sortedFilteredProducts.length ?
                            sortedFilteredProducts.map((product, index) => {
                                return (
                                    <Card {...product} />
                                )
                            })
                            :
                            <p className="error">Ничего не найдено по запросу "{query}"</p>
                    }
                </div>
            </div>
        </div>
    )
}