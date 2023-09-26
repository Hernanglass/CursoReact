import { CardContent, Typography, Grid, Card } from '@mui/material';
import React, { useState } from 'react'

const ProductDetail = ({product, children}) => {
  
   const {id, image, title, price} = product
   const [iseSelected, setIsSelected] = useState(false);

    return ( <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className= "card-products-container">
            <img src={image} />
            <CardContent>
                <Typography> {title} </Typography>
                <Typography> {price} </Typography>
            </CardContent>
        </Card>
    </Grid>);
}

export default ProductDetail