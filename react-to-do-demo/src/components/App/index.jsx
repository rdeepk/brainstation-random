import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList';
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
      formInput: {
        firstname:"",
        lastName:""
      }
    }
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

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.firstname.value)
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
        <form>
          FName: <input type ="text" name="firstname"
                        ref={(input)=>{this.firstname = input}}
                        /><br />
          Lname: <input type="text" name="lastName" /><br />
          Email: <input type="email" name="email" /><br />
          Authorize: <input type="checkbox" name="authorize" /><br />
          <button type="submit" onClick={(e) => {this.handleSubmit(e)}}>Submit</button>
          </form>
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