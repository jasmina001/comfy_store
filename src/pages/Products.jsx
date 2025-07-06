// Products.jsx
import { Filters, PaginationContainer, ProductContainer } from '../components'
import { customFetch } from '../utils'

export const loader = async () => {
  const response = await customFetch('/products')
  const products = response.data.data
  const meta = response.data.meta
  return { products, meta }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  )
}

export default Products
