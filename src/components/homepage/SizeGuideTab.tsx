import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectedSize, setSize } from "../../features/sizechart/sizeSlice";

const SizeGuideTab = () => {
  const dispatch = useAppDispatch();
  const size = useAppSelector(selectedSize);

  useEffect(() => {
    let data = localStorage.getItem("size");
    if (data) {
      dispatch(setSize(data));
    }
  }, []);

  function setSizeHandler(value: string) {
    dispatch(setSize(value));
    localStorage.setItem("size", value);
  }

  return (
    <div className="col">
      <button
        onClick={() => setSizeHandler("XS")}
        type="button"
        className={
          size === "XS"
            ? "btn btn-outline-secondary px-4 m-2 active"
            : "btn btn-outline-secondary px-4 m-2"
        }
      >
        XS
      </button>
      <button
        onClick={() => setSizeHandler("S")}
        type="button"
        className={
          size === "S"
            ? "btn btn-outline-secondary px-4 m-2 active"
            : "btn btn-outline-secondary px-4 m-2"
        }
      >
        S
      </button>

      <button
        onClick={() => setSizeHandler("M")}
        type="button"
        className={
          size === "M"
            ? "btn btn-outline-secondary px-4 m-2 active"
            : "btn btn-outline-secondary px-4 m-2"
        }
      >
        M
      </button>

      <button
        onClick={() => setSizeHandler("L")}
        type="button"
        className={
          size === "L"
            ? "btn btn-outline-secondary px-4 m-2 active"
            : "btn btn-outline-secondary px-4 m-2"
        }
      >
        L
      </button>

      <button
        onClick={() => setSizeHandler("XXL")}
        type="button"
        className={
          size === "XXL"
            ? "btn btn-outline-secondary px-4 m-2 active"
            : "btn btn-outline-secondary px-4 m-2"
        }
      >
        XXL
      </button>
    </div>
  );
};

export default SizeGuideTab;
