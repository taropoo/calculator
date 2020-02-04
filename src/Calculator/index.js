import React from "react";

import "./index.scss";

export default function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator--container">
        <div className="calculator--result">0</div>
        <button className="button--sub-function">AC</button>
        <button className="button--sub-function">&#43;/&#8722;</button>
        <button className="button--sub-function">&#37;</button>
        <button className="button--main-function">&#247;</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="button--main-function">&#215;</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="button--main-function">&#8722;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="button--main-function">&#43;</button>
        <button className="button--zero">
          <div>0</div>
        </button>
        <button>&#46;</button>
        <button className="button--main-function">&#61;</button>
      </div>
    </div>
  );
}
