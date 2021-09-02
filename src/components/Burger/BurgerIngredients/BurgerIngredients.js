import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredients.css';

class BurgerIngredients extends PureComponent {
    render() {
        let ingredient = null; 

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default: 
                ingredient = null; 
        }
        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.is
}

export default BurgerIngredients
