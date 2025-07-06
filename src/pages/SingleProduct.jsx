import { useLoaderData, Link } from 'react-router';
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, company, price, description, colors } = product.attributes;

  const dollars = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-96 object-cover rounded-lg w-full"
        />

        {/* Product */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h3 className="text-xl text-neutral-content font-bold mt-2">{company}</h3>
          <p className="mt-3 text-xl">{dollars}</p>
          <p className="mt-3 leading-8">{description}</p>

          {/* colors */}
          <div className="mt-4">
            <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                style={{ backgroundColor: color }}
                onClick={() => setProductColor(color)}
                className={`badge w-6 h-6 mr-2 ${color === productColor ? 'border-2 border-secondary' : ''} cursor-pointer`}
              />
            ))}
          </div>

          {/* amount */}
          <div className="form-control w-full max-w-xs mt-6">
            <label className="label mb-2" htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">amount</h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              name="amount"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>

          {/* cart btn */}
          <div className="mt-10">
            <button className="btn btn-secondary btn-md">Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
