import React, { Component } from 'react';
import './ListItem.css';
import { ListGroupItem  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    toggleService = () => {
        this.setState(prevState => (
            {
                selected: !prevState.selected
            }))
    };

    render () {
        return (
            <ListGroupItem className="ListItem">{this.props.children}
            <span className="float-right">
                <button type="button" onClick={this.toggleService} className={this.state.selected ? "btn btn-sm btn-outline-dark align-top mx-2" : "btn btn-sm btn-outline-light align-top mx-2"}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            </span>
        </ListGroupItem>
        )
    }
}

export default ListItem;