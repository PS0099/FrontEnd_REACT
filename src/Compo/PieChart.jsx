import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell } from "recharts";

const DonutChart = () => {
  const tasks = useSelector((state) => state.main.tasks);
  let p = 0;
  let d = 0;

  tasks.forEach((task) => {
    if (task.completed) {
      d++;
    } else {
      p++;
    }
  });

  console.log(d, p);

  const data = [
    { name: "Pending", value: p },
    { name: "Done", value: d },
  ];

  const COLORS = ["#102F10", "#3D8B3D"]; // Dark Green & Light Green
  return (
    <div className="relative flex flex-col items-center w-[200px] h-[220px]">
      {/* Pie Chart */}
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Custom Legend at Bottom Left */}
      <div className="absolute bottom-[10px] left-0 flex gap-2 text-xs">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#102F10] inline-block rounded-full mr-1"></span>
          Pending
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#3D8B3D] inline-block rounded-full mr-1"></span>
          Done
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
