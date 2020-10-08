import React, {Component} from 'react';
import './Card.css';

export default class Card extends Component{

    getColor(){
        if(this.props.blue) return 'bg-primary'
        return 'bg-secondary'
    }

    render(){
        return (
            <div className={`card text-white ${this.getColor()}`}>
                <div className='card-header'>
                    {this.props.title}
                </div>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}