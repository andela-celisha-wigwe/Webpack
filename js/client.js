import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Todos}></IndexRoute>
			<Route path="favorites" component={Favorites}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
app);