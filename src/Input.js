import React, { Component } from 'react';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;


class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            editText: 'do stuff'
        }
    }


    handleKeyDown(event) {
        if (event.which === ESCAPE_KEY) {
            this.setState({editText: this.props.todo.title});
            this.props.onCancel(event);
        } else if (event.which === ENTER_KEY) {
            this.handleSubmit(event);
        }
    }

    handleChange(event) {
        if (this.props.editing) {
            this.setState({editText: event.target.value});
        }
    }

    renderThing() {

        if ( this.state.editing ) {
            return (
                <input
                    className="input" 
                    defaultValue="foobar"
                />
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }

    }

    
    render() {
        return (
            <div>
                foobar
            </div>
        );
    }
}

export default Input;
