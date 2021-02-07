import React from 'react';
import {radar_visualization} from "../utils/radar";

const TechRadar = () => {

  const load = () => radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
      background: "#fff",
      grid: "#bbb",
      inactive: "#ddd"
    },
    title: "My Radar",
    quadrants: [
      { name: "Bottom Right" },
      { name: "Bottom Left" },
      { name: "Top Left" },
      { name: "Top Right" }
    ],
    rings: [
      { name: "INNER",  color: "#93c47d" },
      { name: "SECOND", color: "#b7e1cd" },
      { name: "THIRD",  color: "#fce8b2" },
      { name: "OUTER",  color: "#f4c7c3" }
    ],
    print_layout: true,
    entries: [
      {
        label: "Some Entry",
        quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 2,              // 0,1,2,3 (starting from inside)
        moved: -1             // -1 = moved out (triangle pointing down)
                              //  0 = not moved (circle)
                              //  1 = moved in  (triangle pointing up)
      },
      // ...
    ]
  });

  return (
    <div>
      <button onClick={() => load()}>Charger</button>
      <svg id="radar"/>
    </div>
  );
};

export default TechRadar;
