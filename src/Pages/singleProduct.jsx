import React from 'react'
import  { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import MultiActionAreaCard from '../Components/Card';
import { Box, Typography ,  } from '@mui/material';


const singleProduct = () => {
  const [data , setData] = useState(null);
  const {id} = useParams()

  useEffect(() => {
      axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        res.json()
        .then(res => {
          setData(res)           
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          
        })
      } , [] )

  } , [])
  console.log(data);
  
return (
  <>
  <Typography variant='h5' className='text-center mt-3 fw-bold'>

    Product Name
    {Product.title}
  </Typography>

   

 {<Box className='d-flex justify-content-center mt-5'>
    <ImgMediaCard img={data.image} title={data.title} price={data.price} description={data.description}/>
  </Box>}

  </>
)

}

export default singleProduct
