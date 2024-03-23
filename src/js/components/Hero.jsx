import Button from "./Button";
import heroImage from "/media/images/hero.png";
import cardIcon1 from "/media/icons/cardOne.svg";
import cardIcon2 from "/media/icons/cardTwo.svg";
import cardIcon3 from "/media/icons/cardThree.svg";
import cardIcon4 from "/media/icons/cardFour.png";

const data = {
  flashCards: [
    "200+ happy customers",
    "10k+ properties for clients",
    "16+ years of experience",
  ],
  cards: [
    "find your dream home",
    "Unlock property value",
    "Effortless property management",
    "smart investments, informed decisions",
  ],
  icons: [
    cardIcon1, cardIcon2, cardIcon3, cardIcon4
  ]
};

export default function Hero() {
  return (
    <section className="hero_container section">
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
            {data.flashCards.map((data, i) => {
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
          <img src={heroImage} alt="" width="100%" height="100%" />
        </div>
      </div>

      <div className="section--fw-sm border-sm d-flex flex-fill flex-wrap shadow-lg cluster cluster-700 p-7 mt-5-sm">
        {data.cards.map((text, i) => {
          return (
            <a href="" className="text-decorate-none " key={i}>
              <div className="card card--sm card--link d-flex flex-center hover-secondary flex-column cluster-500 h-100">
                <div className="card_header">
                  <img src={data.icons[i]} alt="" />
                </div>
                <div className="card_body">
                  <p className="text-capitalize heading text-align-center">
                    {text}
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
