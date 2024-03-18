import Button from "./Button";
// import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import PropTypes from "prop-types";

export default function Section({ title, description, children = null, button, styled = true }) {
  return (
    <section className="section section--inline">
      {/* Header */}
      <div className="d-flex align-center justify-space-between cluster cluster-200">
        <div className="">
          <h2 className="heading heading-2">Frequently Answered Questions</h2>
          <p>
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
        </div>
        <Button variant="secondary">View all FAQ's</Button>
      </div>

      {/* Body */}
      <div className="">{children}</div>

      {/* Paginate */}
      <div className="">
        <div className="">
          <Button></Button>

          {/* Pagination */}
          <div className="d-flex cluster cluster-700 align-center">
            <Button
              variant="secondary"
              utilityClasses="btn--icon btn--round w-35px h-35px"
            >
              {/* <FaArrowLeft /> */}
            </Button>
            <div className="">
              <span className="">10</span> of 10
            </div>
            <Button
              variant="secondary"
              utilityClasses="btn--icon btn--round w-35px h-35px"
            >
              {/* <FaArrowRight /> */}
            </Button>
          </div>
        </div>
      </div>  
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styled: PropTypes.bool,
  button: PropTypes.object
};
