import React, { useEffect , useState } from 'react'
import MultiActionAreaCard from '../Components/Card'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';

const Product = () => {

  const [productarr , setProductarr] = useState(false);

   const [Data , setData ] = useEffect(null);
   const navigate = useNavigate();
   useEffect(() => {
    async function data() {
      await axios('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    data();
   } , [] )

   const singleProduct = item => {
       navigate('./singleProduct/${item.id}');
   }

  return (
    <div>
      <Typography className='text-center mt-4' variant='h4'>Products </Typography>
      <div className="flex justify-center mt-10 items-center flex-wrap gap-5">
        {productarr ? productarr.map((item, index) => {
          return (

            <MultiActionAreaCard/>
          )
        }):<h1>Loading</h1> }
      </div>
    </div>
  )
}

export default Product
