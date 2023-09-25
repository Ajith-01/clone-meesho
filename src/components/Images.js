import React from "react";

function Images() {
  return (
    <div>
      <div class="img-group">
        <div class="img">
          <img src={require("./first.png")} alt="" />
        </div>
        <div class="img">
          <img src={require("./second.png")} alt="" />
        </div>
        <div class="img">
          <img src={require("./third.png")} alt="" />
        </div>
        <div class="img">
          <img src={require("./fourth.png")} alt="" />
        </div>
        <div class="img">
          <img src={require("./fifth.png")} alt="" />
        </div>
        <div class="img" id="img6">
          <img src={require("./sixth.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Images;
