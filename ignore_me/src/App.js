import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
import AuthContext from './auth';
import Success from './components/Success';


const App = _ => {
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUser, setCurrentUser] = useState(null);
    // const [loading, setLoading] = useState(true)
    const authContextValue = {fetchWithCSRF};

    return (
        <AuthContext.Provider value={authContextValue}>
            {/* {loading ? <h1>Loading</h1> : */}
                <BrowserRouter>
                    {/* <NavBar currentUser={currentUser} /> */}
                    <Switch>
                        <Route exact path="/" component={Success} />
                    </Switch>
                </BrowserRouter>
            {/* } */}
        </AuthContext.Provider>
    );
}

export default App;
