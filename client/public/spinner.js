import * as React from "react";
import { useTheme } from "styled-components";
const Spinner = (props) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      preserveAspectRatio="xMidYMid"
      style={{
        margin: "auto",
        background: "0 0",
        display: "block",
        shapeRendering: "auto",
      }}
      viewBox="0 0 100 100"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        r={24}
        fill="none"
        stroke={theme.colors.sage12}
        strokeDasharray="113.09733552923255 39.69911184307752"
        strokeWidth={8}
      >
        <animateTransform
          attributeName="transform"
          dur="0.8771929824561403s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  );
};
export default Spinner;
