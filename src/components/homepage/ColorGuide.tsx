import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectedColor, setColor } from "../../features/sizechart/sizeSlice";

const ColorGuide = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectedColor);

  useEffect(() => {
    let data = localStorage.getItem("color");
    if (data) {
      dispatch(setColor(data));
    }
  }, []);

  function setColorHandler(value: string) {
    dispatch(setColor(value));
    localStorage.setItem("color", value);
  }

  return (
    <>
      <p>
        <strong>Color:</strong> {color}
      </p>
      <button
        onClick={() => setColorHandler("Conchiglia 1")}
        className={
          color === "Conchiglia 1"
            ? "btn btn-outline-secondary p-0 rounded-0 me-2"
            : "btn p-0 rounded-0 me-2"
        }
      >
        <img src="images/pic01.jpeg" width={50} className="img-fluid" />
      </button>
      <button
        onClick={() => setColorHandler("Conchiglia 2")}
        className={
          color === "Conchiglia 2"
            ? "btn btn-outline-secondary p-0 rounded-0 me-2"
            : "btn p-0 rounded-0 me-2"
        }
      >
        <img src="images/pic02.jpeg" width={50} className="img-fluid" />
      </button>
    </>
  );
};

export default ColorGuide;
