import React from "react";
import { useSelector } from "react-redux";
import HobbyList from "../components/home/hobbyList";

import { useDispatch } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import casual from "casual-browserify";
function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  const handleAddHobbyClick = () => {
    const newHobby = {
      id: casual.uuid,
      title: casual.title,
    };
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  console.log("hobbyList", hobbyList);
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div>
      <h1>hahaha</h1>
      <button onClick={handleAddHobbyClick}>Random</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

export default HomePage;
