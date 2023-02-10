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
    },
    title: {
      display: false,
    },
    annotation: {
      annotations: {
        point01: {
          type: "point",
          xValue: 1.83,
          yValue: 0,
          radius: 4,
          borderColor: "#fff",
          borderWidth: 2,
          backgroundColor: "transparent",
        },
        point02: {
          type: "point",
          xValue: 1.83,
          yValue: 0,
          radius: 1,
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
        point11: {
          type: "point",
          xValue: 2.04,
          yValue: 1,
          radius: 4,
          borderColor: "#fff",
          borderWidth: 2,
          backgroundColor: "transparent",
        },
        point12: {
          type: "point",
          xValue: 2.04,
          yValue: 1,
          radius: 1,
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
        point21: {
          type: "point",
          xValue: 2.08,
          yValue: 2,
          radius: 4,
          borderColor: "#fff",
          borderWidth: 2,
          backgroundColor: "transparent",
        },
        point22: {
          type: "point",
          xValue: 2.08,
          yValue: 2,
          radius: 1,
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
        point41: {
          type: "point",
          xValue: 1.53,
          yValue: 4,
          radius: 4,
          borderColor: "#fff",
          borderWidth: 2,
          backgroundColor: "transparent",
        },
        point42: {
          type: "point",
          xValue: 1.53,
          yValue: 4,
          radius: 1,
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
        point51: {
          type: "point",
          xValue: 1.53,
          yValue: 5,
          radius: 4,
          borderColor: "#fff",
          borderWidth: 2,
          backgroundColor: "transparent",
        },
        point52: {
          type: "point",
          xValue: 1.53,
          yValue: 5,
          radius: 1,
          borderColor: "#fff",
          backgroundColor: "#fff",
        },
        line1: {
          type: "line",
          yMin: 3,
          yMax: 3,
          borderColor: "black",
          borderWidth: 1,
          borderDash: [10, 5],
        },
      },
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
