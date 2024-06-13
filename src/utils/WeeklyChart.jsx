import React from "react";

const WeeklyChart = ({ data }) => {
  // Calculate the maximum value in data to set the scale
  const maxValue = Math.max(...data) < 10000 ? 10000 : Math.max(...data);
  const chartHeight = 200; // Fixed height for the chart

  // Calculate the interval for y-axis labels
  const yInterval = Math.ceil(maxValue / 5);

  return (
    <div className="h-[200px] relative w-full max-w-lg mx-auto">
      <div className=" w-full   ">
        {/* Y-axis labels */}
        {[...Array(6)].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute top-0 left-0 w-full bg-gray-300"
              style={{ top: `${(chartHeight / 5) * index}px` }}
            ></div>
            <div
              className="absolute top-0 left-0 text-xs text-gray-500"
              style={{ top: `${(chartHeight / 5) * index - 8}px` }}
            >
              {((maxValue / 5) * (5 - index)) / 1000}k
            </div>
          </React.Fragment>
        ))}

        {/* Bars */}
        {data.map((value, index) => {
          const height = (value / maxValue) * chartHeight;
          return (
            <>
              <div
                key={index}
                className="  md:block hidden   absolute bg-primary  bottom-0 transition-all duration-500"
                style={{
                  left: `${(index + 0.5) * (100 / data.length)}%`,
                  height: `${height}px`,
                  width: `10px`,
                  bottom: 0,
                }}
              />
              <div
                key={index}
                className=" sm:block md:hidden hidden   absolute bg-primary  bottom-0 transition-all duration-500"
                style={{
                  left: `${(index + 0.5) * (100 / data.length)}%`,
                  height: `${height}px`,
                  width: `10px`,
                  bottom: 0,
                }}
              />
              <div
                key={index}
                className=" sm:hidden md:hidden    absolute bg-primary  bottom-0 transition-all duration-500"
                style={{
                  left: `${(index + 0.5) * (100 / data.length)}%`,
                  height: `${height}px`,
                  width: `10px`,
                  bottom: 0,
                }}
              />
            </>
          );
        })}
        {/* X-axis labels */}
        <div className="absolute left-0 right-0 flex justify-between px-2 ml-2 mt-2 bottom-[-1.5rem]">
          {["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"].map(
            (day, index) => (
              <div
                key={index}
                className="text-sm text-gray-700"
                style={{ width: `${100 / data.length}%`, textAlign: "center" }}
              >
                {day}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeklyChart;
