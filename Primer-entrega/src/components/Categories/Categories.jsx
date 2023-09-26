import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import UseAsyncMock from '../hooks/UseAsyncMock';
import categories from '../mocks/categorias.json';
import { Link } from 'react-router-dom';

const Categories = () => {
const {data, loading} = UseAsyncMock(categories)

if(loading){
    return <CircularProgress />
} 


  return (<div className='container'>
    <Typography variant="h2" style={{color: "black"}}> 
    Categorias
    </Typography>
{
    data.map((category)=>{
        return (
            <Card key={category.id}>
                <CardContent component={Link} to= {`/category/${category.category}`}>
                    <Typography> {category.category}</Typography>
                </CardContent>
            </Card>
        )
    })
}

  </div> );
}

export default Categories
