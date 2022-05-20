import React, { Component } from 'react';
class Counter extends Component {
    state={
    count:0,
   // imageUrl:'https://picsum.photos/200',
 
    
    };

  
    handleIncrement = product =>
    {
        
        this.setState({ count :this.state.count+1})
    };
    doHandleIncrement =() =>
    {
        this.handleIncrement({id:1});
    };
   
    render() { 
        console.log('props',this.props);
        let classes = this.getBadgeClasses();
        return(
        <div>
          
           
            <span  className={this.getBadgeClasses()}>{this.formatCount()}
            </span>
           
        <button 
        onClick={ ()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment

        </button>

        <button
            onClick={()=>this.props.onDelete(this.props.counter.id)} 
            className="btn btn-secondary btn-sm">
                Delete
        </button>
            
         </div> 
              );
       }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";

        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
    

    formatCount()
    {
     const {count}=this.state;
     return count===0 ? <h1>zero</h1>: count;
     }
  }

 
export default Counter;