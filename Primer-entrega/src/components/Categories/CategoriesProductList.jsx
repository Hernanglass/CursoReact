import React from 'react'
import { useParams } from 'react-router-dom';
import UseAsyncMock from '../hooks/UseAsyncMock';
import products from '../mocks/products.json';
import { CircularProgress, Grid, } from '@mui/material';
import ProductDetail from '../products/ProductDetail';

const CategoriesProductList = () => {
  
  const {categoryId} = useParams();
  const {data, loading} = UseAsyncMock(products)
  
    if(loading) return <CircularProgress />

    const categorySelected = data.filter( category => category.category.toLowerCase() === categoryId.toLocaleLowerCase());

    return ( <div className= "container">
            <Grid container spacing={3}>
                {categorySelected.map((product) => {
                    return <ProductDetail key={product.id} product={product} />
                })}
            </Grid>
    </div> );
}

export default CategoriesProductList