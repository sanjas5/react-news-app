import { RotatingLines } from "react-loader-spinner";
import "./loader.css";

function Loader() {
  return (
    <div className="loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
