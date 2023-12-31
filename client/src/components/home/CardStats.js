import React, { useEffect, useState } from "react";
import { routes } from "../../api";

function CardStats() {
  const [listarEmpresas, setListarEmpresas] = useState([]);
  const getListagemUrl = routes.empresas.get;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const fetchTipos = async () => {
          try {
            const response = await fetch(getListagemUrl, {
              headers: {
                Authorization: `${token}`,
              },
            });
            if (response.ok) {
              const data = await response.json();
              setListarEmpresas(data.rows.length);
              console.log("CardStats", data);
            } else {
              console.error("Os dados da API não são um array:");
            }
          } catch (error) {
            console.error("Erro ao buscar os dados:", error);
          }
        };

        fetchTipos();
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
  }, [token]);

  const items = listarEmpresas;

  return (
    <div className="px-8 bg-slate-950  h-full flex items-center rounded-lg justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-slate-900 sm:w-23 sm:h-23">
          <svg
            viewBox="0 0 64 64"
            id="fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-14"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect
                height="58"
                style={{ fill: "#cfcfd9" }}
                width="46"
                x="9"
                y="3"
              ></rect>
              <rect
                height="50"
                style={{ fill: "#d9dae2" }}
                width="38"
                x="13"
                y="7"
              ></rect>
              <path
                d="M13,7H51a0,0,0,0,1,0,0V19A38,38,0,0,1,13,57h0a0,0,0,0,1,0,0V7A0,0,0,0,1,13,7Z"
                style={{fill:"#e5e6eb"}}
              ></path>
              <path
                d="M32,21a4,4,0,0,1-4-4,3.952,3.952,0,0,1,.492-1.911L26.863,8.575,28.8,8.091l1.731,6.926a1,1,0,0,1-.157.824,2,2,0,1,0,3.244,0,1,1,0,0,1-.157-.824L35.28,7.758l1.94.484-1.712,6.847A3.952,3.952,0,0,1,36,17,4,4,0,0,1,32,21Z"
                style={{fill:"#fff"}}
              ></path>
              <rect
                height="4"
                style={{fill:"#027de5"}}
                width="10"
                x="35"
                y="48"
              ></rect>
              <rect
                height="2"
                style={{fill:"#027de5"}}
                width="7"
                x="22"
                y="27"
              ></rect>
              <rect
                height="2"
                style={{fill:"#027de5"}}
                width="2"
                x="31"
                y="27"
              ></rect>
              <rect
                height="2"
                style={{fill:"#027de5"}}
                width="9"
                x="35"
                y="27"
              ></rect>
              <rect
                height="8"
                style={{fill:"#027de5"}}
                width="8"
                x="39"
                y="14"
              ></rect>
              <rect
                height="2"
                style={{fill:"#027de5"}}
                width="25"
                x="19"
                y="32"
              ></rect>
              <rect
                height="2"
                style={{fill:"#027de5"}}
                width="25"
                x="19"
                y="37"
              ></rect>
              <rect
                height="2"
                style={{fill:"#027de5"}}
                width="13"
                x="19"
                y="42"
              ></rect>
              <rect height="6" style={{fill:"#444"}} width="14" x="25" y="3"></rect>
              <path d="M55,2H9A1,1,0,0,0,8,3V61a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1V3A1,1,0,0,0,55,2ZM25,10h2.219l1.273,5.089A3.952,3.952,0,0,0,28,17a4,4,0,0,0,8,0,3.952,3.952,0,0,0-.492-1.911L36.781,10H39a1,1,0,0,0,1-1V8H50V56H14V8H24V9A1,1,0,0,0,25,10Zm8.622,5.841a2,2,0,1,1-3.244,0,1,1,0,0,0,.157-.824L29.281,10h5.438l-1.254,5.017A1,1,0,0,0,33.622,15.841ZM38,8H26V4H38ZM54,60H10V4H24V6H13a1,1,0,0,0-1,1V57a1,1,0,0,0,1,1H51a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H40V4H54Z"></path>
            </g>
          </svg>
        </div>
        <h6 className="text-4xl font-bold text-gray-50">{items}</h6>
        <p className="font-bold text-md text-gray-50">Empresas</p>
      </div>
    </div>
  );
}

export default CardStats;
