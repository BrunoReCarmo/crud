import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { routes } from "../../api";

function CardGraphics() {
  const [empresasAtivas, setEmpresasAtivas] = useState(0);
  const [empresasInativas, setEmpresasInativas] = useState(0);
  const getListagemUrl = routes.empresas.get;

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const fetchEmpresas = async () => {
          try {
            const response = await fetch(getListagemUrl, {
              headers: {
                Authorization: `${token}`,
              },
            });
            if (response.ok) {
              const data = await response.json();

              const ativas = data.rows.filter(
                (empresa) => empresa.status === 1
              );
              const inativas = data.rows.filter(
                (empresa) => empresa.status === 0
              );

              setEmpresasAtivas(ativas.length);
              setEmpresasInativas(inativas.length);

              console.log("CardStats", data);
            } else {
              console.error("Os dados da API não são um array.");
            }
          } catch (error) {
            console.error("Erro ao buscar os dados:", error);
          }
        };

        fetchEmpresas();
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
  }, [token, getListagemUrl]);

  useEffect(() => {
    const dataPie = {
      labels: ["Ativos", "Não ativos"],
      datasets: [
        {
          label: "Status",
          data: [empresasAtivas, empresasInativas],
          backgroundColor: ["#38A169", "#E53E3E"],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "doughnut",
      data: dataPie,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
            position: "top",
            align: "start",
          },
        },
      },
    };

    const chartPie = new Chart(document.getElementById("chartPie"), configPie);

    return () => {
      chartPie.destroy();
    };
  }, [empresasAtivas, empresasInativas]);

  return (
    <div className="shadow-lg h-full rounded-lg overflow-hidden w-[180px] flex flex-col items-center justify-center">
      <canvas id="chartPie"></canvas>
      <p className="font-bold text-md text-gray-50 flex text-center mt-2">Status CPNJ</p>
    </div>
  );
}

export default CardGraphics;
