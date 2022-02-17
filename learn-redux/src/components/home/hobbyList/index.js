import React from "react";
import PropTypes from "prop-types";
import "./hobbyList.css";
function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          className={hobby.id === activeId ? "active" : ""}
          key={hobby.id}
          onClick={() => {
            handleClick(hobby);
          }}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
