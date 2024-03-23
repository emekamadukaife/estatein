import { useEffect, useReducer } from "react";
import Button from "./Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Paginate() {

 
  return (
    <div className="paginate d-flex cluster cluster-700 align-center justify-end">
      <Button
        variant="secondary"
        utilityClasses="btn--icon btn--round w-35px h-35px"
      >
        <FaArrowLeft />
      </Button>
      <div className="paginate_counter">
        <span className="">10</span> of 10
      </div>
      <Button
        variant="secondary"
        utilityClasses="btn--icon btn--round w-35px h-35px"
      >
        <FaArrowRight />
      </Button>
    </div>
  );
}
