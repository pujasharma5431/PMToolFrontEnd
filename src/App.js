import React, {useState} from 'react'
import Dashboard from "./Dashboard/Dashboard";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
    const [darkMode, setDarkMode] = useState(false)
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light"
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Router>

                <div>
                <Dashboard
                    check={darkMode}
                    change={() => setDarkMode(!darkMode)}
                />
                </div>




            </Router>
        </ThemeProvider>
    );

}

export default App;
