import React, { Component } from 'react';
import './SelectableListItem.css';
import { ListGroupItem  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class SelectableListItem extends Component {

    render () {
        const { onClick } = this.props;
        return (
            <ListGroupItem className="SelectableListItem">{this.props.children}
            <span className="float-right">
                <button type="button" onClick={() => onClick(this.props.itemId)} className={this.props.selected ? "btn btn-sm btn-outline-dark align-top mx-2" : "btn btn-sm btn-outline-light align-top mx-2"}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            </span>
            </ListGroupItem>
        )
    }
}

export default SelectableListItem;