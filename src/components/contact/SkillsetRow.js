import React from "react";
import {
  reactLogo,
  cssLogo,
  htmlLogo,
  javascriptLogo,
  nodejsLogo,
  reactRouterLogo,
  reduxLogo,
  webpackLogo,
  babelLogo
} from "../../data";

const SkillsetRow = () => (
  <section className="icons-row-section">
    <h3 className="icons-section-title">My Current Favorite Stack</h3>
    <div className="icons">
      <div className="icons__item html">
        {htmlLogo}
        <span className="icons__item__name">HTML5</span>
      </div>
      <div className="icons__item  css">
        {cssLogo}
        <span className="icons__item__name">CSS3</span>
      </div>
      <div className="icons__item  javascript">
        {javascriptLogo}
        <span className="icons__item__name">JavaScript</span>
      </div>
      <div className="icons__item react">
        {reactLogo}
        <span className="icons__item__name">React</span>
      </div>
      <div className="icons__item react-router">
        {reactRouterLogo}
        <span className="icons__item__name">React Router</span>
      </div>
      <div className="icons__item redux">
        {reduxLogo}
        <span className="icons__item__name">Redux</span>
      </div>
      <div className="icons__item nodejs">
        {nodejsLogo}
        <span className="icons__item__name">Node.js</span>
      </div>
      <div className="icons__item webpack">
        {webpackLogo}
        <span className="icons__item__name">Webpack</span>
      </div>
      <div className="icons__item babel">
        {babelLogo}
        <span className="icons__item__name">Babel</span>
      </div>
    </div>
  </section>
);

export default SkillsetRow;
