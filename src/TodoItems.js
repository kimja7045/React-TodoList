import React, { Component } from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTakes = this.createTakes.bind(this);
    }
    createTakes(item) {
        return <li onClick={() => this.delete(item.key)} //delete 이벤트 핸들러
            key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTakes);

        return (
            <div>
                <ul className="theList">
                    <FlipMove duration={250} easing="ease-out"> 
                        {listItems}
                    </FlipMove>
                </ul>
            </div>
        )
    }
}

export default TodoItems;