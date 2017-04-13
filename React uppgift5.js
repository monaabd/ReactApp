
//var React = require('react');
//var ReactDOM = require('react-dom');

 class InputApp extends React.Component {
  constructor(props){
    super(props);
    this.state={msg:"Your Word Apears Here"};
    this.changeInput = this.changeInput.bind(this);
    
  }
  //your eventhandler is your function which is called bellow
   changeInput (event){
    this.setState({
      msg:event.target.value
    });
  }
  
  render(){
    return(
      <div className="part">
      Part 1: Write your words on white space & see the copy of that! 
       <h3 id="msg">{this.state.msg}</h3>
      <input id="input" placeholder="Write Your Word" onChange={this.changeInput}/>
      
      </div>
    )
  }
};

class Calculate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstText: '',
			secondText: ''
			//text: this.props.initial
		};
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
	}
	handleChange1(event) {
		//console.log('handleChange')
		this.setState({
			firstText: event.target.value
		});
  }

  handleChange2(event) {
		this.setState({
			secondText:event.target.value
		});

	}
		myFun() { 
	  return Number(this.state.firstText)+ Number(this.state.secondText);
 };
	render() {
		return (
		 <p className="part"> Part 2: Write numbers in each blue field & receive the sum of them in yellow field!
            <br/>
			<input id="calcul1" type="text" 
				value={this.state.firstText} 
				onChange={this.handleChange1} /> 
				
				<input id="calcul2" type="text" 
				value={this.state.secondText} 
				onChange={this.handleChange2} /> 
				<br/>
				<span id="spanResult">{this.myFun()}</span>
			</p>);
	}
};


  class ToggleButton extends React.Component {
   constructor(props){
     super(props);
     this.state={
       msg:'Text here will change after clicking on buttons',
       button1css: '',
        button2css: '',
        valueBut1: 0 , 
        valueBut2: 0, 
        divDisplay1:'none',
        divDisplay2:'none',
     };//state
     
     this.handleClick1 = this.handleClick1.bind(this);
     this.handleClick2 = this.handleClick2.bind(this);
   }//constructor
   // add method for my event
   handleClick1(event){
     this.setState({
       msg:'First button is clicked',
       button1css: 'button1',
        button2css: '',
        valueBut1: this.state.valueBut1 +1,   
         divDisplay1:'inline',
         divDisplay2:'none',
     });
       
   }//handleevent
   
   handleClick2(event){
     this.setState({
       msg:'Second button is clicked',
       button2css: 'button2',
        button1css: '',
        valueBut2: this.state.valueBut2 +1, 
         divDisplay1:'none',
         divDisplay2:'inline',
     });
       
   }//handleevent
  
   render(){
    return( 
      <div className="part"> Part 3: Click on two buttons & see the change in text & color , plus can see how many times you click on them!
       <br/>
        <div id="toggleDiv"> {this.state.msg}</div>
        
        <button  className={this.state.button1css} onClick={this.handleClick1}>
        Click 1
        </button>
        <button  className={this.state.button2css} onClick={this.handleClick2}>
         Click 2
        </button>
        <div style={{display:this.state.divDisplay1}}> Clicks number :{this.state.valueBut1}</div>
        <div style={{display:this.state.divDisplay2}}> Clicks number :{this.state.valueBut2}</div>
      </div>        
    )//return
    
  }//render
  };//component       
      
   
      
   ReactDOM.render(
   <div><InputApp/><Calculate /><ToggleButton/></div>,
  document.getElementById('app')
);


