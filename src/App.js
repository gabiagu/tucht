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
                    placeholder: '1. The most important thing today',
                    text: '',
                    checked: false,
                },
                {
                    id: 2,
                    type: 'secondary',
                    placeholder: '2. An important thing',
                    text: '',
                    checked: false,
                },
                {
                    id: 3,
                    type: 'secondary',
                    placeholder: '3. Another important thing',
                    text: '',
                    checked: false,
                },
                {
                    id: 4,
                    type: 'tertiary',
                    placeholder: '4. Something small and easy',
                    text: '',
                    checked: false,
                },
                {
                    id: 5,
                    type: 'tertiary',
                    placeholder: '5. Something else small and easy',
                    text: '',
                    checked: false,
                },
                {
                    id: 6,
                    type: 'tertiary',
                    placeholder: '6. Something else small and easy',
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
        console.log(newList);
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
                <div className="App-info">
                    <div className="App-info-content">
                        <h2>Tucht</h2>
                        <h3>(only) 6 things to do today</h3>
                        <p>This is a variation on the basic todo list, combined with a prioritization system. Your time is limited and precious, so focus on what really matters.<br/>
                        </p>
                        <p>Decide what's the most important thing you should do today. If you only get one thing done today, that is it.</p>
                        <p>Then add 2 more important things to do.
                            </p>
                        <p>Then add 3 small and simple things to do like <i>"answer one email"</i> or the like. This will give you the joy of getting more things done.
                        </p>
                    </div>
                </div>

                <div className="App-content">

                  {data.map((object, index) => (

                    <div className={"item-row"} key={object.id.toString()+'-'+object.type}> 
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
