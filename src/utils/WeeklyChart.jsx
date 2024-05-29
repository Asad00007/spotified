import React from 'react';

const WeeklyChart = ({ data }) => {
  // Calculate the maximum value in data to set the scale
  const maxValue = Math.max(...data);
  const chartHeight = 400; // Fixed height for the chart

  // Calculate the interval for y-axis labels
  const yInterval = Math.ceil(maxValue / 5);

  return (
    <div className="h-[400px] relative w-full max-w-lg mx-auto">
      <div className=" w-full   ">
    {/* Y-axis labels */}
{[...Array(6)].map((_, index) => (
  <React.Fragment key={index}>
    <div className="absolute top-0 left-0 w-full bg-gray-300" style={{ top: `${(chartHeight / 5) * index}px` }}></div>
    <div className="absolute top-0 left-0 text-xs text-gray-500" style={{ top: `${(chartHeight / 5) * index - 8}px` }}>
    {((maxValue / 5) * (5 - index)) / 1000}k 
    </div>
  </React.Fragment>
))}

    
        {/* Bars */}
        {data.map((value, index) => (
        <>
          <div
            key={index}
            className="  md:block hidden   absolute bg-green-600  bottom-0 transition-all duration-500"
            style={{
              left: `${(index * 74) + 54}px`,
              height: `${(value / maxValue) * 100}%`,
              width: '10px',
              bottom: 0,
            }}
          />
          <div
            key={index}
            className=" sm:block md:hidden hidden   absolute bg-green-600  bottom-0 transition-all duration-500"
            style={{
              left: `${(index * 80) + 54}px`,
              height: `${(value / maxValue) * 100}%`,
              width: '10px',
              bottom: 0,
            }}
          />
          <div
            key={index}
            className=" sm:hidden md:hidden    absolute bg-green-600  bottom-0 transition-all duration-500"
            style={{
              left: `${(index * 45) + 54}px`,
              height: `${(value / maxValue) * 100}%`,
              width: '10px',
              bottom: 0,
            }}
          />
        </>
        ))}
        {/* X-axis labels */}
        <div className= "  flex justify-between space-x-2 absolute -bottom-10 ml-10 w-full   py-2">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="  flex space-x-4 text-sm  text-gray-700">{day}</div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default WeeklyChart;
