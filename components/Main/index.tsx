import Image from "next/image";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosWater } from "react-icons/io";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FaCompressAlt } from "react-icons/fa";
const MainWeather = ({ data }: any) => {
  return (
    <div className="w-full h-fit flex justify-center mb-3 mt-3 pl-5 pr-5 ">
      <div className="w-[60rem] h-[28rem] bg-white p-2 rounded-2xl flex flex-row  ">
        <div className="w-1/2 h-full flex items-center justify-center flex-col  ">
          <div className="w-full h-fit pl-10 text-[2.8rem] mt-5 text-gray-700">
            {" "}
            {data?.city.name}
          </div>
          <div className="w-full h-fit pl-10 text-[2.8rem] mt-5 text-gray-700 flex  items-center">
            <Image
              src={
                data?.list[0]?.main === "Haze"
                  ? "./haze.svg"
                  : data?.list[0]?.weather[0].main === "Clouds"
                  ? "./weather-svgrepo-com.svg"
                  : data?.list[0]?.weather[0].main === "Snowy"
                  ? "./snowy.svg"
                  : data?.list[0]?.weather[0].main === "Windy"
                  ? "./windy.svg"
                  : data?.list[0]?.weather[0].main === "Rain"
                  ? "./rainy.svg"
                  : data?.list[0]?.weather[0].main === "Clear" &&
                    data?.list[0].sys.pod === "d"
                  ? "./sunny.svg"
                  : "./moon.svg"
              }
              alt="weather"
              width={200}
              height={200}
            />
            <span className="text-[9rem] relative">
              {Math.floor(data.list[0].main.temp - 273.15)}
              <span className="text-[5rem] text-end absolute">o</span>
            </span>
          </div>
          <div className="w-full h-fit pl-10 text-[2.8rem] mt-5 text-gray-600 ">
            {" "}
            {data?.list[0].weather[0]?.description}
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center flex-col text-center gap-7 ">
          <div className="w-full h-fit pl-10 text-[2rem] mt-5 text-gray-600 relative">
            Fells {Math.floor(data?.list[0].main?.feels_like - 273.15)}
            <span className="text-[1rem]  absolute">o</span>
          </div>
          <div className="w-full h-fit pl-10 text-md mt-5 text-gray-600 flex flex-row justify-center">
            <div className="h-fit w-1/3 flex items-center justify-center pl-10">
              <span className="">
                <IoIosArrowRoundUp className="text-[2rem]" />
              </span>
              <span className="text-[2rem] relative">
                {Math.floor(data?.list[0].main?.temp_max - 273.15)}
                <span className="text-[1rem]  absolute">o</span>
              </span>
            </div>
            <div className="h-fit w-1/3 flex items-center justify-center pr-10">
              <span className="">
                <IoIosArrowRoundDown className="text-[2rem]" />
              </span>
              <span className="text-[2rem] relative">
                {Math.floor(data?.list[0].main?.temp_min - 273.15)}
                <span className="text-[1rem]  absolute">o</span>
              </span>
            </div>
          </div>
          <div className="w-full h-fit pl-10 text-[1rem] mt-5 text-gray-600 flex flex-row justify-center">
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="">
                <IoIosWater className="text-[1.5rem]" />
              </span>
            </div>
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="text-lg">Humbily</span>
            </div>
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="text-lg">{data?.list[0].main?.humidity}%</span>
            </div>
          </div>
          <div className="w-full h-fit pl-10 text-[1rem] mt-5 text-gray-600 flex flex-row justify-center">
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="">
                <TiWeatherWindyCloudy className="text-[1.5rem]" />
              </span>
            </div>
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="text-lg">Windy</span>
            </div>
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="text-lg">{data?.list[0].wind?.speed}kph</span>
            </div>
          </div>
          <div className="w-full h-fit pl-10 text-[1rem] mt-5 text-gray-600 flex flex-row justify-center">
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="">
                <FaCompressAlt className="text-[1.5rem]" />
              </span>
            </div>
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="text-lg">Pressure</span>
            </div>
            <div className="h-fit w-1/4 flex items-center justify-center ">
              <span className="text-lg">
                {Math.floor(data?.list[0].main?.pressure / 10)}hPa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
