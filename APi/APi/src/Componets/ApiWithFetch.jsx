import React, { useEffect } from "react";

export default function ApiWithFetch() {
    useEffect(() => {
        fetchApi();
      }, []);
      const fetchApi = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response);
        const res = await response.json();
        console.log(res);
      };
      return <></>;
}
