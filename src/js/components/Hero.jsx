import Button from "./Button";
import heroImage from "/media/images/hero.png";
import cardIconOne from "/media/icons/cardOne.svg"
import cardIconTwo  from "/media/icons/cardTwo.svg";
import cardIconThree from "/media/icons/cardThree.svg";
import cardIconFour from "/media/icons/cardFour.png";

const data = [
  "200+ happy customers",
  "10k+ properties for clients",
  "16+ years of experience",
];

const cardsData = [
  [cardIconOne, "find your dream home"],
  [cardIconTwo, "Unlock property value"],
  [cardIconThree, "Effortless property management"],
  [cardIconFour, "smart investments, informed decisions"]
]

export default function Hero() {


  return (
    <section className="hero_container section section--left-md">
      <div className="hero d-flex flex-center flex-equal">
        <div className="hero_slideOne stack stack-600">
          <div className="stack stack-700">
            <h1 className="heading heading-1">
              Discover your dream property with{" "}
              <span className="color-accent">EstateIn</span>{" "}
            </h1>
            <p>
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>

          {/* A new component */}
          <div className="hero_btn-group d-flex cluster cluster-700">
            <Button variant="outline">Learn more</Button>
            <Button variant="primary">Browse Properties</Button>
          </div>

          <div className="d-flex flex-wrap flex-fill cluster cluster-700">
            {data.map((data, i) => {
              const [headingText, ...text] = data.split(" ");

              return (
                <div className="card card--xs" key={i}>
                  <p className="d-flex flex-column">
                    <span className="heading-3 heading">{headingText}</span>
                    <span className="text-capitalize">{text.join(" ")}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="hero_slideTwo overflow-hide"
          style={{ "--bg-image": `url(${heroImage})` }}
        >
          <img src={heroImage} alt="" />
        </div>
      </div>

      <div className="section--flush-left-md border-sm d-flex flex-fill flex-wrap shadow-lg cluster cluster-700 p-7">
        {cardsData.map((data, i) => {
          return (
            <a href="" className="text-decorate-none " key={i}>
              <div className="card card--sm card--link d-flex flex-center hover-secondary flex-column cluster-500 h-100">
                <div className="card_header">
                  <img src={data[0]} alt="" />
                </div>
                <div className="card_body">
                  <p className="text-capitalize heading text-align-center">
                    {data[1]}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
