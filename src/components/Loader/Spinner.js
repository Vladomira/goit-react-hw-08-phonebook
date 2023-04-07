import { BallTriangle } from "react-loader-spinner";
import { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <BallTriangle
        type="BallTriangle"
        color="#8d125a"
        height={50}
        width={50}
        timeout={3000} //3 secs
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
        }}
      />
    );
  }
}
export default Spinner;
