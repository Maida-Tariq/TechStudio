import React from "react";

const CircularSection = () => {
  const services = [
    { name: "Frontend Development", angle: 0 },
    { name: "Backend Development", angle: 45 },
    { name: "Full-Stack Development", angle: 90 },
    { name: "UI/UX Design", angle: 135 },
    { name: "Responsive Design", angle: 180 },
    { name: "Web Optimization", angle: 225 },
    { name: "API Integration", angle: 270 },
    { name: "Website Maintenance", angle: 315 },
  ];

  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* ECAT Circle with Dotted Lines Above and Below */}
      <div className="absolute -top-24 flex flex-col items-center">
        {/* Dotted Line Above ECAT */}
        <div className="h-8 border-dotted border-b-2 border-mid border-700"></div>

        {/* ECAT Circle */}
        <div className="relative w-8 h-8 bg-white rounded-full border-2 border-mid border-700 flex items-center justify-center shadow-lg mt-1 mb-1">

          {/* Vertical Dotted Line Downward */}
          <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 h-20 border-dotted border-l-2 border-mid border-800"></div>
        </div>

        {/* Dotted Line Below ECAT */}
        <div className="h-12 border-dotted border-b-2 border-mid border-700"></div>
      </div>

      {/* Central Circle */}
      <div className="relative flex items-center justify-center w-40 h-40 bg-mid bg-700 rounded-full z-10">
        <div className="text-white text-4xl">A V</div>
      </div>

      {/* Outer Circle */}
      <div className="absolute w-96 h-96 bg-transparent rounded-full border-2 border-mid border-700"></div>

      {/* Service Bubbles */}
      {services.map((service, index) => {
        const angleInRadians = (service.angle * Math.PI) / 180;
        const radius = 200; // Adjust the radius to control the distance from the center
        const x = Math.cos(angleInRadians) * radius;
        const y = Math.sin(angleInRadians) * radius;

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center w-24 h-24 bg-white rounded-full border border-mid border-700"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <span className="text-center text-sm">{service.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CircularSection;
