import React from "react";
import { FcStatistics, FcNext } from "react-icons/fc";
export const SuggestionContent = ({
  id,
  classNameMain,
  classNameTitle,
  icon,
  typeText,
  text,
}) => {
  function TextDynamic({ typeText, text }) {
    switch (typeText) {
      case "h1":
        return <h1>{text}</h1>;
      case "p":
        return <p>{text}</p>;
      default:
        return "";
    }
  }
  function IconDynamic({ icon }) {
    switch (icon) {
      case "FcStatistics":
        return <FcStatistics className="icon" />;
      case "FcNext":
        return <FcNext className="icon" />;
      default:
        return "";
    }
  }
  return (
    <div className={classNameMain}>
      <div className={classNameTitle}>
        <IconDynamic icon={icon} />
        <TextDynamic typeText={typeText} text={text} />
      </div>
    </div>
  );
};
