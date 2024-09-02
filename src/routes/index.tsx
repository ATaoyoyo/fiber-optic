import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageLayout from "../layout";
import Login from "../views/login";
import Home from "../views/home";
import Exception403 from "../views/exception/403";
import WorkOrder from "../views/workorder";
import AlarmRecord from "../views/alarmrecord";
import Area from "../views/area";
import ErrorCatch from "../views/errorcatch";
import Device from "../views/device";
import Scheduling from "../views/scheduling";
import AdminSetting from "../views/adminsetting";

const routes = [
	{
		path: "/",
		element: <PageLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/workorder",
				element: <WorkOrder />,
			},
			{
				path: "/alarmrecord",
				element: <AlarmRecord />,
			},
			{
				path: "/area",
				element: <Area />,
			},
			{
				path: "/errorcatch",
				element: <ErrorCatch />,
			},
			{
				path: "device",
				element: <Device />,
			},
			{
				path: "scheduling",
				element: <Scheduling />,
			},
			{
				path: "adminsetting",
				element: <AdminSetting />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <Exception403 />,
	},
];

const router = createBrowserRouter(routes);

export default function Router() {
	return <RouterProvider router={router} />;
}
