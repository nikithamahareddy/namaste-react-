import React from "react";
import { createRoot } from 'react-dom/client';

const jsxHeading = <h2 className="head" tabIndex="4" id ="heading">
    hello react jsx
    </h2>;
const root = createRoot(document.getElementById("root"));
root.render(jsxHeading);