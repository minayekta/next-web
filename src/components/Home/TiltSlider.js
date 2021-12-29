import React from 'react';
import { currentlanguageCode, isRtl } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
// alert('objectobject');


function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };


    let el = ref.current;

    const handleMouseMove = e => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};


function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return /*#__PURE__*/(
    React.createElement("div", {
      ref: ref,
      className: "slide",
      "data-active": active,
      style: {
        "--offset": offset === 0 ? 0 : offset > 0 ? (offset + 0.2) : (offset - 0.2),
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }
    }, /*#__PURE__*/


      React.createElement("div", {
        className: "slideBackground",
        style: {
          backgroundImage: `url('${slide.image}')`,
        }
      }), /*#__PURE__*/

      React.createElement("div", { className: 'parent' },
        React.createElement("div", {
          className: `slideContent `,
          style: {
            backgroundImage: `url('${slide.image}')`,
          }
        }, /*#__PURE__*/


          React.createElement("div", { className: `slideContentInner_${slide.id}` }, /*#__PURE__*/
            React.createElement("p", { className: "slideTitle" }, slide.title), /*#__PURE__*/
            React.createElement("p", { className: "slideSubtitle" }, slide.subtitle), /*#__PURE__*/
            React.createElement("p", { className: "slideDescription" }, slide.description))))));

}
function TiltSlider(props) {
  const [state, dispatch] = React.useReducer(props.slidesReducer, initialState);

  return /*#__PURE__*/(
    React.createElement("div", { className: "slides" }, /*#__PURE__*/
      React.createElement("button", { onClick: () => dispatch({ type: "PREV" }) }, isRtl ? "\u203A" : <svg id="Group_2372" data-name="Group 2372" xmlns="http://www.w3.org/2000/svg" width="34.457" height="58.551" viewBox="0 0 34.457 58.551">
        <path id="Path_2540" data-name="Path 2540" d="M40.687,55.369l-5.182,5.182L6.23,31.275,35.505,2l5.182,5.182L16.593,31.275Z" transform="translate(-6.23 -2)" fill="#fff" />
      </svg>
      ),

      [...props.slides, ...props.slides, ...props.slides].map((slide, i) => {
        let offset = props.slides.length + (state.slideIndex - i);
        return /*#__PURE__*/React.createElement(Slide, { slide: slide, offset: offset, key: i });
      }), /*#__PURE__*/
      React.createElement("button", { onClick: () => dispatch({ type: "NEXT" }) }, isRtl ? "\u2039" : <svg id="Group_2372" data-name="Group 2372" xmlns="http://www.w3.org/2000/svg" width="34.457" height="58.551" viewBox="0 0 34.457 58.551">
        <path id="Path_2540" data-name="Path 2540" d="M6.23,55.37l5.182,5.182L40.687,31.276,11.412,2,6.23,7.182,30.324,31.276Z" transform="translate(-6.23 -2)" fill="#fff" />
      </svg>
      )));


}
export default TiltSlider;

// if (typeof window !== 'undefined') {
  // console.log('hereeeeeeeeee');
  // const elApp = document.getElementById("TiltSlider");
  // ReactDOM.render( /*#__PURE__*/React.createElement(TiltSlider, null), elApp);
// }