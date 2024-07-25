import { useParams } from 'react-router-dom'
import '../CSS/SearchProductPage.css'
import ProductPage from './ProductPage';
import { useEffect, useState } from 'react';
import { items } from '../Data/ProductPageData';
export default function SearchProductPage() {
    const [data, setData] = useState([])
    const { term } = useParams();

    useEffect(() => {
        const element = items.filter((product) => product.brandname.toLowerCase().includes(term.toLocaleLowerCase()));

        setData(element)
    }, [term])
    return (
        <section className="SearchProductPage">
            <ProductPage items={data} />
        </section>
    )
}