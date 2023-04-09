import { BallTriangle } from "react-loader-spinner";
import { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BallTriangle
          type="BallTriangle"
          color="#8d125a"
          height={50}
          width={50}
          timeout={3000}
        />
      </div>
    );
  }
}
export default Spinner;
