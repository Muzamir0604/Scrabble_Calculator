import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserEntryList } from "./actions/userEntryActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserEntryList());
  }, []);
  const list = useSelector((state) => state.userEntryReducer.list);

  return (
    <div className="App">
      {list.map((obj) => {
        return <p>{obj.word}</p>;
      })}
      {console.log(list)}
    </div>
  );
}

export default App;
