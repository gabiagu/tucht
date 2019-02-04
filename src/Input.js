import React, { Component } from 'react';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;


class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: true,
            value: '',
            checked: false,
        }
    }

    handleInputSubmit(e) {
        e.preventDefault();
        if (this.state.value === '') {
            this.setState({value: ''});
        } else {
            this.setState({editing: false});
            this.props.handleSubmit(this.state.value, this.state.checked, this.props.index);
        }
    }

    handleKeyDown(e) {
        
        if (e.which === ESCAPE_KEY) {
            if (( this.props.text === '' )) {
                this.setState({value: ''});
            } else {
                this.setState({editing: false});
            }
        } else if (e.which === ENTER_KEY) {
            if (this.state.value === '') {
                return false;
            } else {
                console.log('ENTER pressed '+e.target.value);
                this.handleInputSubmit(e);
            }
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

    handleCheck() {
        // console.log('checking item '+this.props.type);

        if (this.state.checked) {
            this.setState({checked: false});
            this.props.handleSubmit(this.state.value, false, this.props.index);
        } else {
            this.setState({checked: true});
            this.props.handleSubmit(this.state.value, true, this.props.index);
        }
    }

    renderThing() {

        const editClassName = 'todoInput todoInput-'+this.props.type;
        const viewClassName = 'todoView todoView-'+this.props.type;
        let checkClassName;

        if (this.state.checked) {
            checkClassName = 'check checked';
        } else {
            checkClassName = 'check unchecked';
        }

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
                    <span className={checkClassName}
                        onClick={this.handleCheck.bind(this)}
                    >
                    </span>
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
