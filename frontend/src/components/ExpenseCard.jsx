import React from "react";
import ReactECharts from "echarts-for-react";
import { animate } from "framer-motion";

const ExpenseCard = () => {
  const categoryExpenses = [
    { value: 5000, name: "Food" },
    { value: 3000, name: "Transport" },
    { value: 2000, name: "Entertainment" },
  ];

  const chartOptions = {
    title: {
      text: "Expenses",
      top: "45%",
      left: "center",
    },
    series: [
        {
          type: "pie",
          radius: ["50%", "80%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "14",
              fontWeight: "bold",
            },
          },
          data: categoryExpenses, 
          animation:true,
        },
      ],
  };
  return (
    <div className="bg-white bg-opacity-20  border-[#2b1055] shadow-[#2b1055] shadow-sm rounded-xl p-4 w-full md:w-1/3 text-[#e0e0e0]">
    <h2 className="text-xl font-bold mb-2 text-[#ffba08]">Expense Overview</h2>
    <ReactECharts option={chartOptions} style={{ height: "250px" }} />
  </div>
  );
};

export default ExpenseCard;
