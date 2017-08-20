import React, { Component } from 'react';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;


class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: true,
            value: ''
        }
    }


    handleSubmit(e) {

        e.preventDefault();

        console.log(e)

        this.setState({editing: false});

        console.log(this.state.value)

        this.renderThing();

    }

    handleKeyDown(e) {
        if (e.which === ESCAPE_KEY) {
            this.setState({value: this.props.todo.title});
            this.props.onCancel(e);
        } else if (e.which === ENTER_KEY) {
            this.handleSubmit(e);
        }
    }

    handleChange(e) {

        if (this.state.editing) {
            this.setState({value: e.target.value});
        }

    }

    swapState() {

        if (this.state.editing) {
            this.setState({editing: false});
        } else {
            this.setState({editing: true});
        }

    }

    renderThing() {

        const editClassName = 'todoInput todoInput-'+this.props.type;
        const viewClassName = 'todoView todoView-'+this.props.type;

        if ( this.state.editing ) {
            return (
                <input
                    className={editClassName}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange.bind(this) }
                    onKeyDown={this.handleKeyDown.bind(this) }
                    value={this.state.value}
                />
            )
        } else {
            return (
                <div
                    className={viewClassName}
                >

                    <span 
                        className='todoView-text'
                        onDoubleClick={this.swapState.bind(this)}
                    >
                        {this.state.value}
                    </span>

                </div>
            )
        }

    }

    
    render() {
        
        // renderThing()

        return (
             this.renderThing()
        )
    }
}

export default Input;
