import React from "react";
import SizeGuideTab from "./SizeGuideTab";
import { useAppSelector } from "../app/hooks";
import { selectedSize } from "../features/sizechart/sizeSlice";

const SizeGuide = () => {
  const size = useAppSelector(selectedSize);

  return (
    <div className="row mt-5">
      <div className="col-6">
        <p>
          <strong className="text-uppercase">size: </strong> {size}
        </p>
      </div>
      <div className="col-6 text-end">
        <p>SIZE GUIDE</p>
      </div>
      <SizeGuideTab />
    </div>
  );
};

export default SizeGuide;
