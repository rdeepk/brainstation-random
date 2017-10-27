import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList';
import Form from '../Form';
import OutputUserForm from '../OutputUserForm';

class App extends Component {
  // constructor(props){
  //   super(props)
  //   //state must be an object
  //   this.state = {
  //     todos: props.todos,
  //     text:"",
  //     output:[]
  //   }
  // }

  constructor() {
    super();
    this.state={
      form:{}
    }
  }

  updateForm = (formData) => {
    this.setState({
      form: formData
    })
  } 

  handleInputForm(name, value) {
    console.log(value);
    let newFormInput = this.state.formInput;
    newFormInput[name] = value
    this.setState({
      formInput: newFormInput
    })
  }
  clickHandler = () => {
    this.setState({
      output: this.state.output.concat(this.state.text)
    })
  }

  textHandler = (event) => {
    this.setState({
      text: event.target.value
    })
    console.log(event.target.value);
  }

  toggleDone = (index) => {
    this.state.todos[index].done = !this.state.todos[index].done;
    this.setState({
        todos: this.state.todos

    },() =>{
      console.log(this.state.todos);
    })
  }

  render() {
    // let outputJSX = this.state.output.map((text, i) => {
    //   return <li key ={i}>{text}</li>
    // })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <Form updateForm={this.updateForm} />
        </div>
        <OutputUserForm form={this.state.form}/>
      </div>
    );
  }
}

export default App;


{/* <div className="">
            <TodoList todos= {this.state.todos} 
                      toggleDone = {this.toggleDone} />
        </div>
        <div><input type="text"  onChange={(event) => {this.textHandler(event)}} /></div>
        <div><button type="submit" onClick={this.clickHandler}>Send</button></div>
        <h3>You typed:</h3>
        <p>{outputJSX}</p> */}