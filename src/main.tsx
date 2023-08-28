// import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./scss/main.scss"
import { BrowserRouter as Router } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store.ts"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Router>
		<Provider store={store}>
			<PersistGate loading={"loading"} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</Router>
)
