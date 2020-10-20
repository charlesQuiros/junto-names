import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import "./NamesList.scss";
import {
  faSortAmountUp,
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";

const SORT_OPTIONS = {
  NAME_ASC: { column: "name", direction: "asc" },
  NAME_DESC: { column: "name", direction: "desc" },
};

function useNames(sortBy = "NAME_ASC") {
  const [names, setNames] = useState([]);

  //The useEffect function NEEDS the array at the end otherwise it'll loop the store indefinitely
  useEffect(() => {
    const unsubscribe = firebase;
    firebase
      .firestore()
      .collection("names")
      //   .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newNames = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNames(newNames);
      });
    return () => unsubscribe();
  }, [sortBy]);

  return names;
}

const NamesList = () => {
  //TODO need to implement a sort feature
  const [sortBy, setSortBy] = useState("NAME_ASC");
  const names = useNames();
  return (
    <div>
      <div className="namesList-container">
        <div className="namesList-select-container">
          <FontAwesomeIcon icon="sort-amount-up" className="namesList-icon" />
          <select value={sortBy} className="namesList-select">
            <option value="NAME_ASC">Top Names</option>
            <option value="NAME_DESC">Bottom Names</option>
          </select>
        </div>
        <div className="namesList">
          <ol className="namesList-ol">
            {names.map((name) => (
              <li key={name.id} className="namesList-li">
                <div>
                  <p className="namesList-title">{name.title}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default NamesList;
