import React from 'react';
import CountUp from 'react-countup';

import './Card.css';

interface ICardProps {
    bottomBar: string;
    info: string;
    number: number;
    description: string;
    date: Date | undefined;
}

const Card: React.FC<ICardProps> = (props: ICardProps): JSX.Element => {

    return (
        <div className="card">
            <div className="card-info">
                <h2 className="info">{props.info.toUpperCase()}</h2>
                <h2><CountUp start={0} end={props.number} separator={'.'}></CountUp></h2>
                {props.date ? <p className="date">{new Date(props.date).toDateString()}</p> : ''}

                <p>{props.description}</p>
            </div>
            <div className={"bottom-bar " + props.bottomBar}></div>
        </div>
    )
}

export default Card;