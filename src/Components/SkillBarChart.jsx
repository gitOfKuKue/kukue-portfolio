import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import infos from '../JavaScripts/info';

// Register components to ChartJS (required)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillBarChart = () => {
  const data = {
    labels: infos.skills.map((skill) => skill.skillName),
    datasets: [
      {
        label: 'skill',
        data: infos.skills.map((skill) => skill.skillLevel),
        backgroundColor: '#1F7D53',
        barThickness: 15,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This makes the bar chart horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Skill Horizontal Bar Chart',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return <Bar data={data} options={options} width={450} />;
};

export default SkillBarChart;