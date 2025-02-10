import { render } from "solid-js/web";

const element = document.getElementById("app");

if (!element) {
  throw new Error("Failed to find element with id 'app'");
}

render(() => <h1>Extension Options</h1>, element);
