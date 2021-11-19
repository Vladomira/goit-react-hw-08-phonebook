import Loader from "react-loader-spinner";
import { Component } from "react";

export default class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#8d125a"
        height={50}
        width={50}
        timeout={3000} //3 secs
        style={{
          position: "fixed",
          top: "55%",
          left: "45%",
        }}
      />
    );
  }
}
