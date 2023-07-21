import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectedSize, setSize } from "../features/sizechart/sizeSlice";

const SizeGuideTab = () => {
  const dispatch = useAppDispatch();
  const size = useAppSelector(selectedSize);

  return (
    <div className="col">
      <button
        onClick={() => dispatch(setSize("XS"))}
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
        onClick={() => dispatch(setSize("S"))}
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
        onClick={() => dispatch(setSize("M"))}
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
        onClick={() => dispatch(setSize("L"))}
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
        onClick={() => dispatch(setSize("XXL"))}
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
