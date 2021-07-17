import React from 'react';
import './card-list.styles.css';

import { Card } from '../card/card.component';

//What does export mean? The CardList can be imported into other projects = the props parameter is any parameter passed in when importing. Those parameters are being logged to console
export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);
//Style the html in the children tags with the card-list css, which puts each element in grid display

//The CardList will output its parameters to the console and run the HTML code in its child tags


/*
We break things down into components because it makes it easier to keep information separate and organized
*/
