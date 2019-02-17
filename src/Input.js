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

        this.textInput = null;

        this.setTextInputRef = element => {
          this.textInput = element;
        };

        this.focusTextInput = () => {
          // Focus the text input using the raw DOM API
          console.log(this.state.editing)
          console.log(this.textInput);
          if (this.textInput) this.textInput.focus();
        };
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
                //console.log('empty field at esc press');
            } else if ( ( this.props.text === '' ) && this.state.value === '') {
                //console.log('empty text & empty value');
                this.setState({editing: true});
            } else if ( this.state.value === '') {
                //console.log('empty text');
                this.setState({editing: true});
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
            console.log(this.state.editing);
            console.log('should focus on input');
            this.focusTextInput();
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
        let checkClassName;
        let viewClassName;

        if (this.state.checked) {
            checkClassName = 'check checked';
            viewClassName = 'todoView todoView-checked todoView-'+this.props.type;
        } else {
            checkClassName = 'check unchecked';
            viewClassName = 'todoView todoView-'+this.props.type;
        }

        if ( this.state.editing ) {
            return (
                <div className={editClassName}>
                    <div className="check-wrapper">
                        <span className="check disabled"></span>
                    </div>
                    <input
                        className=""
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange.bind(this) }
                        onKeyDown={this.handleKeyDown.bind(this) }
                        value={this.state.value}
                        ref={this.setTextInputRef}
                    />
                </div>
            )
        } else { 
            return (
                <div
                    className={viewClassName}
                >
                    <div className="check-wrapper">
                        <button className={checkClassName}
                            onClick={this.handleCheck.bind(this)}
                        >
                        </button>
                    </div>
                    <span 
                        className='todoView-text'  
                    >
                        {this.state.value}
                    </span>
                    <button 
                        className="edit-button"
                        onClick={this.swapState.bind(this)}
                    >edit
                    </button>

                </div>
            )
        }

    }

    componentDidUpdate(){
        if (this.state.editing) {
            this.focusTextInput();
        } else {
            // do nothing;
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
