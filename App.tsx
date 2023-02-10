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
import annotationPlugin from "chartjs-plugin-annotation";
import { Bar } from "react-chartjs-2";
import "./App.css";
import { options, data } from "./constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

export function App() {
  return (
    <div className="barChart">
      <div className="chartTitle">
        <p>Where Are We Going to Land?</p>
        <span className="badge certain">Certain</span>
        <span className="badge expected">Exptected</span>
        <span className="badge unlikely">Unlikely</span>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}
