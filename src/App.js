import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
	Navbar,
	ThemeSettings,
	Footer,
	UserProfile,
	Sidebar,
	Notifications,
	Header,
	Button,
	Cart,
	Chat,
	SparkLine,
	LineChart,
} from "./components";
import {
	Ecommerce,
	Kanban,
	Orders,
	Employees,
	Editor,
	Stacked,
	Pyramid,
	Customers,
	ColorPicker,
	ColorMapping,
	Editor,
} from "./pages";
import "./App.css";
const App = () => {
	const activeMenu = false;
	return (
		<div>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					<div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
						<TooltipComponent content="Settings" position="top">
							<button
								type="button"
								className="text-4xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
								style={{ backgroundColor: "pink", borderRadius: "50%" }}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
							<Sidebar />
						</div>
					) : (
						<div className="w-0 dark:bg-secondary-dark-bg">Sidebar w</div>
					)}
					<div
						className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
							activeMenu ? "md:ml-72" : "flex-1"
						}`}>
						<div className="fixed md:static dark:bg-main-dark-bg navbar w-full">
							Navbar
						</div>
					</div>
					<div>
						<Routes>
							<Route path="/" element="Home" />
							<Route path="/ecommerce" element="ecommerce" />
							<Route path="/orders" element="orders" />
							<Route path="/employees" element="employees" />
							<Route path="/customers" element="customers" />
							<Route path="/kanban" element="kanban" />
							<Route path="/editor" element="editor" />
							<Route path="/calendar" element="calendar" />
							<Route path="/color-picker" element="colorpicker" />
							<Route path="/line" element="line" />
							<Route path="/area" element="area" />
							<Route path="/bar" element="bar" />
							<Route path="/financial" element="financial" />
							<Route path="/colormapping" element="colormapping" />
							<Route path="/pyramid" element="pyramid" />
							<Route path="/stacked" element="stacked" />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
