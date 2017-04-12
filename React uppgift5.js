
//var React = require('react');
//var ReactDOM = require('react-dom');

 class InputApp extends React.Component {
  constructor(props){
    super(props);
    this.state={msg:"Your Word Apear Here"};
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
      Part 1:
       <h2 id="msg">{this.state.msg}</h2>
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
		 <p className="part"> Part 2:
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
       msg:'Click buttons below ',
       classs : '',
     };//state
     
     this.handleClick1 = this.handleClick1.bind(this);
     this.handleClick2 = this.handleClick2.bind(this);
   }//constructor
   // add method for my event
   handleClick1(event){
     this.setState({
       msg:'First button is clicked',
       class1 : 'button1'
     });
       
   }//handleevent
   
   handleClick2(event){
     this.setState({
       msg:'Second button is clicked',
       class2: 'button2'
     });
       
   }//handleevent
  
  /*myfunc(){
    if(this.handleClick1===true){
      
    }return (className="butt1");
  }//func */
   render(){
    return( 
      <div className="part"> Part 3:
       <br/>
        <div id="toggleDiv">{this.state.msg}</div>
        <button className={this.state.class1} onClick={this.handleClick1}>
        click 1
        </button>
        <button className={this.state.class2} onClick={this.handleClick2}>
         Click 2
        </button>
      </div>        
    )//return
    
  }//render
  };//component       
      
   
      
   ReactDOM.render(
   <p><InputApp/><Calculate /><ToggleButton/></p>,
  document.getElementById('app')
);


