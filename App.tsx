import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const annotation1 = {
  type: 'line',
  borderColor: 'black',
  borderWidth: 5,
  click: function({chart, element}) {
    console.log('Line annotation clicked');
  },
  label: {
    backgroundColor: 'red',
    content: 'Test Label',
    display: true
  },
  scaleID: 'y',
  value: 60,
};

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Where Are We Going to Land?",
      color: "#1e204a",
      font: {
        family: "Arial",
        size: 20,
        weight: "bold",
        lineHeight: 1.2,
      },
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    annotation: {
      annotations: [{
        annotation1,
      }],
    },
  },
  scales: {
    x: {
      stacked: true,
      min: 0.5,
      max: 3,
      position: "top" as const,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: number) {
          return "$" + value + "M";
        },
      },
    },
    x1: {
      stacked: true,
      min: 6.5,
      max: 9.0,
      position: "bottom" as const,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: number) {
          return "$" + value + "M";
        },
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "CURRENT MO.",
  "NEXT MO.",
  "FOLLOWING MO.",
  "",
  "CURRENT Q",
  "NEXT Q",
];

export const data = {
  labels,
  datasets: [
    {
      label: "CERTAIN",
      data: [
        [1.53, 1.76],
        [1.05, 1.4],
        [1, 1.45],
        [],
        [0.75, 1.25],
        [0.97, 1.48],
      ],
      borderColor: "transparent",
      backgroundColor: "#77b9e5",
    },
    {
      label: "EXPECTED",
      // data: [
      //   [1.76, 2.17],
      //   [1.4, 2.1],
      //   [1.45, 2.05],
      // ],
      data: [0.41, 0.7, 0.6, 0, 0.67, 0.92],
      borderColor: "transparent",
      backgroundColor: "#e7c81c",
    },
    {
      label: "UNLIKELY",
      // data: [
      //   [2.17, 2.42],
      //   [2.1, 2.5],
      //   [2.05, 2.5],
      // ],
      data: [0.25, 0.4, 0.45, 0, 0.5, 0.25],
      borderColor: "transparent",
      backgroundColor: "#ee3f37",
    },
  ],
};

export function App() {
  return <Bar options={options} data={data} />;
}
