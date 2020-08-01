import React from 'react';

// import { URL_HERO, URL_ENEMY} from '../../config/constants';

function Hero(props) {
    return (
        <div className="card bg-light mb-3" style={{'max-width':'30rem'}} >
        <div className="card-header"><h6>Hero</h6></div>
        <img className="img-responsive" src={props.img}
            alt={props.name} />
        <div className="card-body">
            <h5 className="card-title">Nome: {props.name}</h5>
            <p className="card-text">Arena: {props.arena}</p>
        </div>
    </div>
    )
}

function Enemy(props) {
    return (
        <div className="card bg-light mb-3" style={{'max-width':'30rem'}} >
            <div className="card-header"><h6>Enemy</h6></div>
            <img src={props.img}
                alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">Nome: {props.name}</h5>
                <p className="card-text">Arena: {props.arena}</p>
            </div>
        </div>
    )
}

function ArenaNova(props){
    return(
        <div>
            {React.Children.map(
                props.children, (param) => {
                return React.cloneElement(param, { ...props });
            })}
        </div>
    )
}

export {ArenaNova, Hero, Enemy};
