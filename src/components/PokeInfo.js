import React from 'react'
import "../styles/Info.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from 'react-chartjs-2';
  // import faker from 'faker';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function PokeInfo({pokeData}) {
    const data = {
        labels: ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"],
        datasets: [
          {
            label: "Stats",
            data: [45,49,49,65,65,45],
            backgroundColor: "rgba(32, 201, 77, 0.2)",
            borderColor: "rgba(32, 201, 77, 1)",
            borderWidth: 1
          }
        ]
      };
    
      const options = {
        responsive: true,
        aspectRatio: 3/2,
        plugins:{
          legend:{
            position: 'bottom',
            display: false
          },
          title: {
            display: true,
            text: 'Stats',
            color: 'rgb(10,10,10)',
            align:'start',
          },
        },
      };

  return (
    <div className='Info'>
        <div className='Stats'><Bar data={data} options={options}/></div>
        <div>Weight: {pokeData.weight} Kg</div>
        <div>Type</div>
        <div>Weaknesses</div>
    </div>
  )
}

export default PokeInfo