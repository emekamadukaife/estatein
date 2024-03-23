import Button from "./Button";
import Paginate from "./Paginate";
import { useRef } from "react";
import PropTypes from "prop-types";

const data = [
  {
    title: "How do I search for properties on Estatein?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    buttonText: "Read More",
  },
  {
    title: "How do I search for properties on Estatein?",
    description:
      "What documents do I need to sell my property through Estatein?",
    buttonText: "Read More",
  },
  {
    title: "How can I contact an Estatein agent?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
    buttonText: "Read More",
  },
];

// {
//   title,
//   description,
//   children = null,
//   button,
//   styled = true,
// }

function getVisibleElements() {
  
}
export default function Section() {
  const toPaginate = useRef(null);


  const foward = () => {};

  const seeMoreButton = (
    <Button
      variant="secondary"
      utilityClasses="d-none-sm"
      onClick={getVisibleElements}
    >
      View all FAQ's
    </Button>
  );
  return (
    <section className="section stack stack-500">
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
        {seeMoreButton}
      </div>

      {/* Body */}
      <div className="section_body ">
        <div
          className="d-flex cluster cluster-600 flex-fill overflow-hide"
          ref={toPaginate}
        >
          {data.map(({ title, description, buttonText }, i) => {
            return (
              <div
                className="card card--flush p-6"
                style={{ minWidth: "100%" }}
                key={i}
              >
                <h3 className="heading heading-4">{title}</h3>
                <p>{description}</p>

                <div className="card_footer">
                  <Button variant="secondary">{buttonText}</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section_footer d-flex align-center justify-space-between">
        {/* More Button */}
        <Button variant="secondary" utilityClasses="d-none-md">
          View all FAQ's
        </Button>

        <Paginate />
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styled: PropTypes.bool,
  button: PropTypes.object,
};
