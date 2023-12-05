import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

function useFlip(initialState = true) {
  const [isFlipped, setIsFlipped] = useState(initialState);

  function flip() {
    setIsFlipped(!isFlipped);
  }

  return [isFlipped, flip];
}

function useAxios(url) {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(url);
      setData(function (prevData) {
        return [...prevData, { ...response.data, id: uuid() }];
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  return [data, fetchData];
}

export { useFlip, useAxios };
