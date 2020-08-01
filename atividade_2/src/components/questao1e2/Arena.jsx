import React from 'react';

import { URL_HERO, URL_ENEMY} from '../../config/constants';

function Hero(props) {
    return (
        <div>
            <img src={props.img}
                alt={props.name} style={{width:'200px', height:'200px'}} />
            <h3>Nome: {props.name}</h3>
        </div>
    )
}

function Enemy(props) {
    return (
        <div>
          <img src={props.img}
                alt={props.name} style={{width:'200px', height:'200px'}} />
            <h3>Nome: {props.name}</h3>
    </div>
    )
}

function Arena() {
    return(
        <div>
            <h2>Hero:</h2> <Hero name = 'Uzumaki Naruto' img = {URL_HERO} />
            <h2>Enemy:</h2> <Enemy name = 'Uchiha Madara' img = {URL_ENEMY} />
        </div>
    );
}

export default Arena;
