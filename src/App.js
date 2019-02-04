import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './Input';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldUpdate: false,
            data: [
                {
                    id: 1,
                    type: 'primary',
                    placeholder: 'the most important thing',
                    text: '',
                    checked: false,
                },
                {
                    id: 2,
                    type: 'secondary',
                    placeholder: 'a very important thing',
                    text: '',
                    checked: false,
                },
                {
                    id: 3,
                    type: 'secondary',
                    placeholder: 'a very important thing',
                    text: '',
                    checked: false,
                },
                {
                    id: 4,
                    type: 'tertiary',
                    placeholder: 'something small and easy',
                    text: '',
                    checked: false,
                },
                {
                    id: 5,
                    type: 'tertiary',
                    placeholder: 'something small and easy',
                    text: '',
                    checked: false,
                },
                {
                    id: 6,
                    type: 'tertiary',
                    placeholder: 'something small and easy',
                    text: '',
                    checked: false,
                },
            ],
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refresher = this.refresher.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleCheck = this.handleCheck.bind(this);
    }

    refresher() {
        this.setState({
          shouldUpdate: true
        });
    }

    handleSubmit(text, checkedStatus, index) {

        // console.log('submitted '+text+' '+checkedStatus+' '+index);
        let newList = [];
        newList = this.state.data;
        // update data
        newList[index].text = text;
        newList[index].checked = checkedStatus;

        // console.log('setting status to: '+checkedStatus);

        this.setState({ data: newList });

    }

    render() {

        let data = this.state.data;

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Tucht - 6 things to do today</h2>
                </div>

                <div className="App-content">

                  {data.map((object, index) => (

                    <div className={"row"} key={object.id.toString()+'-'+object.type}> 
                        {[ 
                          <Input 
                            type={object.type} 
                            placeholder={object.placeholder}
                            text={object.text}
                            key={object.id}
                            handleSubmit={this.handleSubmit}
                            index={index}
                        />
                          /* <ExpeditionDay 
                            data={props.days[i]} 
                            editmode={props.editmode} 
                            deleteItemHandler={props.deleteItemHandler} // this sends function to delete
                            addActivityHandler={props.addActivityHandler}
                            /> */

                        ]}
                      </div> 
                    ))}

                </div>
            </div>
        );
    }
}

export default App;
