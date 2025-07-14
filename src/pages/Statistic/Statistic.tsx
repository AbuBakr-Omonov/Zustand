import React from 'react'
import ProductChart from '../../components/ProductChart/ProductChart'

const Statistic = () => {
  return (
    <div className='statis w-[300px] min-h-[75vh]   '>
      <ProductChart/>
     
    </div>
  )
}

export default React.memo(Statistic)