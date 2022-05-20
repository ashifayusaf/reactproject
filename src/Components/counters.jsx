import React, { Component } from 'react'
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
     } ;
     handleIncrement=counter=>
     {
         const counters=[...this.state.counters];
         counters[0].value++;
         console.log(this.state.counters[0]);
     };
     handleDelete = (CounterId) =>
     {
    console.log('Event handler called',CounterId);
     };
    
    render() { 
        return (
            <div>

             {this.state.counters.map(counter => <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} selected={true}/>)}
           
            </div>
        );
    }
}
 
export default Counters;