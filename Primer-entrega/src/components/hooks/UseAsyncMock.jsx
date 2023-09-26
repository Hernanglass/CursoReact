import React, { useState } from 'react'
import { useEffect } from 'react';

const UseAsyncMock = (mock) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);


  const newMockPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(mock)
    }, 1000);
  })
  useEffect(()=>{
    newMockPromise.then((res)=> {setData(res), setLoading(false)}) 
  }, [])

    return {data, loading};
}

export default UseAsyncMock