import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  /*******************************
    props: {
        questions: [array],
        eventName: [string],
        generalLocation: [string]
      }
  ********************************/

  constructor(props){
    super(props);
    this.state = {
      showWelcome: true,
      showFinish: false
    }
  } 

  componentDidMount() {    
    window.addEventListener("popstate", (e) => {
      if (typeof e.state.showWelcome !== "undefined"){
        this.setState(e.state)
      }      
    });
  }

  handleStartClick(){    
    window.history.pushState(this.state, "");
    this.setState({showWelcome: false});
  }

  render() {
    let body;
    if (this.state.showWelcome){
       body = <Welcome eventName={this.props.eventName} generalLocation={this.props.generalLocation} onStartClick={() => this.handleStartClick()}></Welcome>;
    }
    else if (this.state.showFinish){
      body = <Finish></Finish>
    }
    else {
      body = <Game questions={this.props.questions} onReturn={() => this.setState({showWelcome: true})} onFinish={() => this.setState({showFinish: true})}></Game>
    }    
    
    return (
      <div className="App">
        {body}  
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
      <div className="welcome container">
        <header className="App-header">
          <h1>Welcome to {this.props.eventName}!</h1>
        </header>
        <div>
          <p>You will receive a series of clues that will direct you to locations around {this.props.generalLocation}.</p>
          <p>Once you think you know the answer, check it by clicking "Show Answer". If you got it right, take a photo then go on to the next one.</p>
          <p>Have fun!</p>
        </div>
        <div>
          <Button onClick={() => this.props.onStartClick()}>Start</Button>
        </div>
      </div>
      );
  }  
}

class Finish extends Component {
  render(){
    return (
      <div className="finish container">
        <header className="App-header">
          <h1>Congratulations!</h1>
        </header>
        <div className="question">
          Now it's definitely time for some tea.
        </div>    
        <div className="vignette" style={{backgroundImage: "url("+require('./tea.jpg')+")", width: "260px", height: "231px"}}></div>   
      </div>
    );
  }  
}

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0,
      answerVisible: false,
    }
  }  

  componentDidMount() {    
    window.history.pushState(this.state, "");
    window.addEventListener("popstate", (e) => {
      if (typeof e.state.currentQuestion !== "undefined"){
        this.setState(e.state);
      }
    });
  }

  navigate(direction) {
    // Direction is 1 for next, -1 for back    
    if (this.state.currentQuestion === 0 && direction === -1){
      this.props.onReturn();
    }
    else if (this.state.currentQuestion === this.props.questions.length-1 && direction === 1){
      this.props.onFinish();
    }
    else {
      this.setState({answerVisible: false});
      let newQ = this.state.currentQuestion + direction; 
      this.setState({currentQuestion: newQ});
    }       
    window.history.pushState(this.state, "");
  }

  render() {
    let currentQNumber = this.state.currentQuestion;
    let currentQ = this.props.questions[currentQNumber];
    return (
      <div className="game container">
        <header className="App-header"><h1>Clue {currentQNumber+1}</h1></header>
        <Question questionText={currentQ.question}></Question>
        <Answer answerText={currentQ.answer} image={currentQ.picture} show={this.state.answerVisible} onShowAnswerClick={() => this.setState({answerVisible: true})}></Answer>
        <Nav onClick={(direction) => this.navigate(direction)} first={currentQNumber === 0} last={currentQNumber === this.props.questions.length-1}></Nav>
      </div>
    );
    
  }
}

class Question extends Component {
  render() {
    return (
      <div className="question">
        {this.props.questionText}
      </div>
    )
  }
}

class Answer extends Component {
  render(){
    if (this.props.show){
      let image = "";
      if (typeof this.props.image !== "undefined"){
        image = <img className="answer-image" src={this.props.image} alt="The place you're meant to be at."></img>
      }

      return (
        <div className="answer">
          <h3>Answer:</h3>
          {this.props.answerText}
          {image}
        </div>
      )
    }
    else {
      return (
        <Button onClick={() => this.props.onShowAnswerClick()}>
          Show Answer
        </Button>
      )
    }
  }
}

class Nav extends Component {
  render() {
    return (
      <div className="nav">        
        <Button onClick={() => this.props.onClick(-1)}>Back</Button>
        <Button onClick={() => this.props.onClick(1)}>{this.props.last?"Finish":"Next"}</Button>
      </div>    
    )
  }
}

class Button extends Component {
  render(){
    return (
      <button disabled={this.props.disabled} style={{backgroundColor: "#e689b0", borderColor: "#e689b0", color: "black"}} onClick={() => this.props.onClick()}>{this.props.children}</button>
    );
  }
}

export default App;
