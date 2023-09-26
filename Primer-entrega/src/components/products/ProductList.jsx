import React from 'react'
import UseAsyncMock from '../hooks/UseAsyncMock'
import products from '../mocks/products.json'
import { CircularProgress, Typography, Grid } from '@mui/material'
import ProductDetail from './ProductDetail'



const ProductList = () => {
  
    const {data, loading} =UseAsyncMock(products)
    if (loading) return <CircularProgress />
    return (
        <div className='container'>
            <Typography variant="h2" style={{ color: "red"}}>
                Productos
            </Typography>
            <Grid container spacing={3}>
                {
                    data.map((product)=>{
                        return(
                            <ProductDetail key={product.id} product={product}>

                            </ProductDetail>
                        )
                    })
                }
            </Grid>


        </div>
    );
}

export default ProductList