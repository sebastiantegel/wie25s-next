import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!loading) return;

    const getData = async () => {
      try {
        const response = await fetch(url);
        const dataFromApi: T = await response.json();
        setData(dataFromApi);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  });

  // {
  //   loading: true,
  //   data: { ... }
  // }
  return { loading, data };
};
