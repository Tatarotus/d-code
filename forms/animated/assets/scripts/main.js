import Login from "./components/login-container";
import "../styles/main.scss";

const components = [
  {
    class: Login,
    selector: ".login-container"
  }
];

components.forEach(component => {
  if (document.querySelector(component.selector) !== null) {
    document
      .querySelectorAll(component.selector)
      .forEach(element => new component.class(element, component.options));
  }
});
