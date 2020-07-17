import * as React from "react";
import "./styles.scss";

export interface typographyInterface {
  label: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: string;
  tag?: string;
  className?: string;
}

const Typography = ({
  label,
  fontSize = "default",
  fontColor = "black",
  fontWeight = "normal",
  tag = "p",
  className = "",
}: typographyInterface) => {
  let fontsize = `text-size--text-${fontSize}`;
  let fontcolor = `text-color--text-${fontColor}`;
  let fontweight = `text-wight--text-${fontWeight}`;

  let fontClass = `${fontsize} ${fontcolor} ${fontweight} ${className}`;

  switch (tag) {
    case "span":
      return <span className={fontClass}>{label}</span>;

    case "h1":
      return <h1 className={fontClass}>{label}</h1>;

    case "h2":
      return <h2 className={fontClass}>{label}</h2>;

    case "h3":
      return <h3 className={fontClass}>{label}</h3>;

    case "h4":
      return <h4 className={fontClass}>{label}</h4>;

    case "h5":
      return <h5 className={fontClass}>{label}</h5>;

    case "h6":
      return <h6 className={fontClass}>{label}</h6>;

    case "p":
      return <p className={fontClass}>{label}</p>;

    case "div":
      return <div className={fontClass}>{label}</div>;

    default:
      return <React.Fragment />;
  }
};

export default Typography;
