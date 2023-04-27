import React from 'react'
import { trpc } from '~/utils/trpc'

const QueryTest = () => {

    const data=trpc.clientNFT.getStoreNFTS.query({
        store_id:process.env.NEXT_PUBLIC_STORE_ID
    })

    console.log({data},"data")
  return (
    <div className='text-white max-w-4xl my-4 mx-auto'>
        <p>Tesing</p>
        {/* <p>{data}</p> */}
    </div>
  )
}

export default QueryTest