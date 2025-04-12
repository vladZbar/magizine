import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Shared/store/store";
import App from "./App/App";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
