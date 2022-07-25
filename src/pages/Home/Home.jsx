import React, { useEffect, useState } from "react";
import "./Home.scss";
import { BiChevronDown } from "react-icons/bi";
import { getArray } from "../../helpers/getArray";
import { descriptionArray } from "../../data/Home/description";
import { DescriptionContent } from "../../components/Home/DescriptionContent";
import { suggestionArray } from "../../data/Home/suggestion";
import { SuggestionContent } from "../../components/Home/SuggestionContent";

export const Home = () => {
  const [description, setDescription] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    getArray(descriptionArray).then((res) => {
      setDescription(res);
    });
    getArray(suggestionArray).then((res) => {
      setSuggestion(res);
    });
  }, []);

  return (
    <div id="home">
      <div id="welcome">
        <h1>Bienvenid@ a Vaetics React JS</h1>
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/vaetics-react.appspot.com/o/vaetics.png?alt=media&token=a671341f-d8c3-4e79-8a24-9edd1c8da351"
          }
          alt="logo-vaetics"
        />
        <a href="#description" className="swippe">
          <BiChevronDown className="down" />
          <BiChevronDown className="down" />
          <BiChevronDown className="down" />
        </a>
        <h2>Alpha v1.0</h2>
      </div>
      <div id="description">
        {description.map((res) => (
          <DescriptionContent {...res} />
        ))}
      </div>
      <div id="suggestion">
        {suggestion.map((res) => (
          <SuggestionContent {...res} />
        ))}
      </div>
    </div>
  );
};
