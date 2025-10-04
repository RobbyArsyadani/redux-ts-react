import axios from "axios";
import { useEffect, useState } from "react";

export default function ListProducts() {
  const [data, setData] = useState([]);
  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products", {
        params: {
          limit: 10,
        },
      });
      setData(response.data.products);
      console.log("ini data: ", response.data.products);
    } catch (err) {
      console.log("Gagal get data: ", err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {data.map((product) => (
        <a href="#" className="group block" key={product.id}>
          <img
            src={product.images[0]}
            height={10}
            width={10}
            alt=""
            className="w-20 h-20"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {product.title}
            </h3>

            <p className="mt-1 text-sm text-gray-700">{product.price}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

