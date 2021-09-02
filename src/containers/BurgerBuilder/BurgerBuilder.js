import React, { PureComponent } from 'react'

import Aux from '../../hoc/Aux'

export class BurgerBuilder extends PureComponent {
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Burger Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder
