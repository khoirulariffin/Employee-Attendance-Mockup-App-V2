import React, { useEffect, useState } from "react";
import ScreenSize from "./Pages/Errors/ScreenSize/ScreenSize";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return !isMobile ? (
    <ScreenSize />
  ) : (
    <Provider store={store}>
      {" "}
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
library.add(fab, far, fas);
