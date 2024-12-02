import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Components/DataSlice';

export default function MenCategory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const [show, setShow] = useState(null);

  const handleViewMore = (id) => {
    setShow((prevId) => (prevId === id ? null : id));
  };

  const productData = useSelector((state) => state.dataKey);

  const menCategory = productData.data?.filter(
    (product) => product.category === "men's clothing"
  );

  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />

      <div className="flex gap-[20px] mx-[2%] flex-wrap pt-6">
        {productData.loading && <p className="text-center w-full">Loading...</p>}

        {menCategory?.map((product) => (
          <div
            key={product.id}
            className="w-[100%] sm:w-[48%] md:w-[32%] lg:w-[23%] bg-gray-900 border border-gray-700 p-5 rounded-[10px] shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="imageDiv flex justify-center">
              <img
                className="h-[30vh] object-contain rounded-[8px] border border-gray-700"
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="txt mt-4">
              <p className="text-lg font-semibold">{product.title}</p>
              <p className="text-sm text-gray-400">{product.category}</p>
              <p className="text-xl mt-2 font-bold">₹ {product.price}</p>
              <p className="text-sm text-gray-400">Rating: {product.rating.count}</p>

              {show === product.id && (
                <p className="text-gray-300 mt-2">{product.description}</p>
              )}

              <p
                className="text-blue-500 font-semibold cursor-pointer mt-2 hover:underline"
                onClick={() => handleViewMore(product.id)}
              >
                {show === product.id ? "View Less..." : "View More..."}
              </p>

              <button className="h-[45px] w-full bg-white text-black font-bold mt-4 rounded-[5px] hover:bg-gray-700 hover:text-white transition-all">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
