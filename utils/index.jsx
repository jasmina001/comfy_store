import axios from 'axios'

// ======> Product API <=====//
const productUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productUrl
})

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "USD"
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1
    return <option value={amount} key={amount}>{amount}</option>
  })
}
