import { Bar } from "react-chartjs-2";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);
const labels = ["1", "2", "3", "4", "5", "6"];
const data_ = {
  labels: labels,
  datasets: [
    {
      label: "dataset",

      data: [65, 59, 83, 89, 76, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function UserPageAdmin() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    let admin = getCookie("admin");
    if (admin) {
      fetch("/api/admin-access")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else {
      setData(null);
      setLoading(false);
    }
  }, []);

  if (data === null) {
    return (
      <div className="max-h-[80vh] m-[2rem] flex flex-col justify-content-center align-items-center">
        <h2>Bar Sample with Next.js</h2>
        <Bar
          data={data_}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  } else {
    router.push("/admin/auth");
  }
}
