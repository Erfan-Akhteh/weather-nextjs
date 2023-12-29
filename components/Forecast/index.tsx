import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Props {
  forename: string[];
}

const Forecase = ({ forename }: Props) => {
  return (
    <div className="w-full h-fit flex justify-center flex-wrap mb-3 mt-3 pl-5 pr-5">
      <div className=" w-[60rem] h-[10rem] rounded-2xl flex flex-row   items-center p-1 gap-2">
        {forename?.map((item: any) => (
          <div
            key={crypto.randomUUID()}
            className="w-1/4 h-full  drop-shadow-md bg-white rounded-2xl"
          >
            <div className="w-full h-fit  flex items-center justify-between flex-col">
              <Image
                src={
                  item?.weather[0]?.main === "Haze"
                    ? "./haze.svg"
                    : item?.weather[0]?.main === "Clouds"
                    ? "./weather-svgrepo-com.svg"
                    : item?.weather[0]?.main === "Snowy"
                    ? "./snowy.svg"
                    : item?.weather[0]?.main === "Windy"
                    ? "./windy.svg"
                    : item?.weather[0]?.main === "Rain"
                    ? "./rainy.svg"
                    : item?.weather[0]?.main === "Clear" && item.sys.pod === "d"
                    ? "./sunny.svg"
                    : "./moon.svg"
                }
                alt="weather"
                width={80}
                height={40}
              />
              <span>{item.weather[0].main}</span>
              <span className="text-[1rem] relative">
                {Math.floor(item.main.temp_min - 273.15)}
                <span className="text-[0.5rem] text-end absolute">
                  o
                </span> / {Math.floor(item.main.temp_max - 273.15)}
                <span className="text-[0.5rem] text-end absolute">o</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecase;
