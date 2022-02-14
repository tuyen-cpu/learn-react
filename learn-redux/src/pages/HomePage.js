import React from "react";
import { useSelector } from "react-redux";
import HobbyList from "../components/home/hobbyList";

import { useDispatch } from "react-redux";
import { addNewHobby } from "../actions/hobby";
import casual from "casual-browserify";
function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
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
  return (
    <div>
      <h1>hahaha</h1>
      <button onClick={handleAddHobbyClick}>Random</button>
      <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>
  );
}

export default HomePage;
