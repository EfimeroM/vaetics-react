import React from "react";
import {
  FcGraduationCap,
  FcComboChart,
  FcDocument,
  FcAssistant,
} from "react-icons/fc";
import { BiGhost } from "react-icons/bi";
export const DescriptionContent = ({
  id,
  classNameMain,
  icon,
  title,
  text,
}) => {
  function IconDynamic({icon}) {
    switch (icon) {
      case "FcGraduationCap":
        return <FcGraduationCap className="icon" />;
      case "FcComboChart":
        return <FcComboChart className="icon" />;
      case "FcDocument":
        return <FcDocument className="icon" />;
      case "BiGhost":
        return (
          <BiGhost style={{ color: "rgb(228, 3, 82)" }} className="icon" />
        );
      case "FcAssistant":
        return <FcAssistant className="icon" />;
      default:
        return "";
    }
  }
  return (
    <div className={classNameMain}>
      <div className="title">
        <IconDynamic icon={icon} />
        <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </div>
  );
};
