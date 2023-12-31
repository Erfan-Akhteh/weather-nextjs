"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import MainWeather from "../Main";
import Forecase from "../Forecast";
import toast, { Toaster } from "react-hot-toast";


const Search = () => {
  const [value, setValue] = useState("");
  const [dataWeather, setDataWeather] = useState();
  const [forecase, setForecase] = useState();
  const fetchData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=e93b91375ee28cd99169751c1abd9335&cnt=4`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataWeather(data);
        setForecase(data.list);
        setValue("");
        if (data.cod === "404") toast.error("Search agin please");
      })
      .catch((err) => console.log(err));
  };
console.log(dataWeather)
  return (
    <>
      <Toaster />
      <div className="w-full h-24 flex items-center justify-center ">
        <div className="w-full h-14 flex justify-center  ">
          <span onClick={fetchData}>
            <CiSearch className=" w-9 relative   left-[-20.9rem]  h-14  z-20 cursor-pointer" />
          </span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            className="w-[45rem] px-16 rounded-2xl h-14 bg-white absolute z-0 shadow-2xl outline-none "
          />
        </div>
      </div>
      {dataWeather && forecase ? (
        <>
          {" "}
          <MainWeather data={dataWeather} />
          <Forecase forecase={forecase} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Search;
