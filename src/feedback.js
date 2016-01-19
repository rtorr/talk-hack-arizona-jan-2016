import React from 'react';
import { Comments } from './comments';
// import { update, timeTravel, setInitial} from './store';
// import { TimeTraveler } from './timetraveler';


class App extends React.Component {
  
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateStoreState = this.updateStoreState.bind(this);
    // this.goBackInTime = this.goBackInTime.bind(this);
    // this.goBackToTheFuture = this.goBackToTheFuture.bind(this);
    // this.state = setInitial({
    //   comment: '',
    //   comments: [
    //     "Lorem markdownum per, labefactum thracius me bellum Cyllene illis; quoque\n" +
    //     "Achaemenide gaudere! Sed offensa aquae, inludens accipe despondet vero\n" +
    //     "**pascua** nec sanguine.\n\n" +
    //     "- Recepto inque et medio\n" +
    //     "- Eburnea ipse una molis accipe miserrima inter\n" +
    //     "- Palilibus valles\n" +
    //     "- Telamonius Primus exstinguere vera statuunt dixit\n"
    //   ]
    // });
    
    this.state = {
      comment: '',
      comments: []
    };
  }
  
  handleChange(e) {
    return this.setState({comment: e.target.value});
  }
  
  handleSubmit() {
    const { comments } = this.state;
    comments.unshift(this.state.comment);
    this.setState({
      comment: '',
      comments: comments
    });
  }
  
  // handleChange(e) {
  //   return this.updateStoreState({comment: e.target.value, comments: this.state.comments});
  // }
  
  // handleSubmit() {
  //   const { comment, comments } = this.state;
  //   if (!comment.length) return;
  //   comments.unshift(comment);
  //   this.updateStoreState({
  //     comment: '',
  //     comments: comments
  //   });
  // }
 
  // updateStoreState(state) {
  //   return this.setState(update(state));
  // }
  
  // goBackInTime() {
  //   console.log(timeTravel('backward'))
  //   this.setState(timeTravel('backward'));
  // }
  
  // goBackToTheFuture() {
  //   this.setState(timeTravel('forward'));
  // }
  
  render() {
    
    // TODO: Add comment length
    
    const { comment, comments } = this.state;
    return (
      <div className="container">
        <div className="comment-box">
          <textarea onChange={this.handleChange} value={comment} placeholder="Leave a comment :)"/>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <div className="comments">
          {comments.length > 0 ? Comments(comments) : 'No Comments yet'}
        </div>
         { /* TimeTraveler(this.goBackInTime, this.goBackToTheFuture) */ }
      </div>
    );
  }
}

export default App;


