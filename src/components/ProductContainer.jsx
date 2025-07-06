import { useLoaderData } from 'react-router-dom'
import ProductList from './ProductList'
import ProductsGrid from './ProductsGrid'
import { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const ProductContainer = () => {
  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')

  const setActiveStyle = (pattern) => {
    return `text-xl btn btn-static btn-sm ${pattern === layout ? 'btn-primary-content' : 'btn-ghost text-based-content'}`
  }

  return (
    <>
      {/* Header */}
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4>{totalProducts} products</h4>
        <div className='flex gap-2'>
          <button type='button' onClick={() => setLayout('grid')} className={setActiveStyle('grid')}>
            <BsFillGridFill />
          </button>
          <button type='button' onClick={() => setLayout('list')} className={setActiveStyle('list')}>
            <BsList />
          </button>
        </div>
      </div>
      <>
        {layout === 'grid' ? <ProductsGrid /> : <ProductList />}
      </>
    </>
  )
}

export default ProductContainer
