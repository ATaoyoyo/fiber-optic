import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./routes/index";

import "@arco-design/web-react/dist/css/arco.css";
import "./style/index.less";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router />
	</StrictMode>
);
