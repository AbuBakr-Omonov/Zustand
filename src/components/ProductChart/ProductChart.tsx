import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { api } from "../../api";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductChart = () => {
  const [products, setProducts] = useState<any>(null);

    useEffect(() => {
        api.get(`/products?limit=5`).then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
        });
    }, []);

  const title = products?.map((product: any) => product?.title);
  const price = products?.map((product: any) => product?.price);
  

  const data = {
    labels:title,
    datasets: [
      {
        label: "narxi",
        data: price,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default ProductChart;
