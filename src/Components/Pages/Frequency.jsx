import { Typewriter } from "react-simple-typewriter";
import Freq from "../../assets/image/questions-concept-people-ask-frequently-asked-questions-faq-vector-flat-2M4G96R.jpg";

const Frequency = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-16 font-display font-bold shadow-xl bg-purple-50 p-2">
        {""}
        <span style={{ color: "purple", fontWeight: "semiBold" }}>
          <Typewriter
            words={[" Frequency Ask?"]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>
      <div className=" md:flex justify-center items-center space-x-4 mt-16 p-4 md:ml-12">
        <div>
          <img className=" " src={Freq} alt="" />
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Landscape Painting Templates
            </div>
            <div className="collapse-content">
              <p>
                Immerse yourself in the beauty of nature with our stunning
                landscape painting templates. From mountain vistas to serene
                forest scenes, our templates provide the perfect starting point
                for your next masterpiece.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Portrait Drawing Templates
            </div>
            <div className="collapse-content">
              <p>
                Capture the essence of your subjects with our diverse collection
                of portrait drawing templates. Whether you prefer pencil
                sketches, ink outlines, or acrylic canvases, we have templates
                to suit every style and preference.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Watercolour Painting Templates
            </div>
            <div className="collapse-content">
              <p>
                Dive into the world of watercolor painting with our vibrant
                templates featuring floral art and animal portraits. Let your
                creativity flow as you bring these colorful creations to life on
                paper or canvas.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Oil Painting Templates
            </div>
            <div className="collapse-content">
              <p>
                Experience the richness and depth of oil painting with our
                realistic and abstract templates. Whether you are aiming for
                lifelike portraits or bold abstract expressions, our templates
                offer endless possibilities for artistic exploration.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Charcoal Sketching Templates
            </div>
            <div className="collapse-content">
              <p>
                Delve into the art of charcoal sketching with our figure
                sketches and architectural drawings. Explore the contrasts and
                textures of charcoal as you create captivating sketches of
                figures and structures.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Cartoon Drawing Templates
            </div>
            <div className="collapse-content">
              <p>
                Unleash your imagination with our collection of cartoon drawing
                templates. From comic strip layouts to superhero designs, these
                templates are perfect for bringing your favorite characters and
                stories to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequency;
