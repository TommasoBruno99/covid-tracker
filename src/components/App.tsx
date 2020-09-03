import React from 'react';

import './App.css';

// Components
import Chart from './Chart/Chart';
import Cards from './Cards/Cards';


const App: React.FC = (): JSX.Element => {

    return (
        <div className="main-div">
            <h1 className="title"> COVID19 TRACKER </h1>
            <div className="wrapper">
                <Cards />
                <Chart />
            </div>

        </div>
    )
}

export default App;