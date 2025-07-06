import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsGrid = () => {
  const { products } = useLoaderData()

 

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const attrs = product.attributes
        if (!attrs) return null

        const { title, price, image } = attrs
        const dollars = formatPrice(price)

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card w-full shadow-xl hover:shadow-2xl transition'
          >
            <figure>
              <img
                src={image}
                alt={title}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{dollars}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsGrid
