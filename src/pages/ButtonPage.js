import Button from "../components/Button";
import { GoBell } from "react-icons/go";

const ButtonPage = () => {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click Here!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success className="mb-5">
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning className="mb-5">
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button danger rounded className="mb-5">
          Something!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
