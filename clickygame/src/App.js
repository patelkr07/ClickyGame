import React, { Component } from "react";
import Card from "./components/Card/";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

const highScore = friends.length;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    highScore: 0,
    currentScore: 0,
    clickedChar: [],
    currentMsg: "Start by clicking on a character"
  };

  clickedChars = id => {
    if (this.state.clickedChar.includes(id)) {
      this.setState({currentMsg:"WRONG!!!! You lose."})
      this.resetGame()
    }

    else {
      const score = this.state.currentScore + 1

      if (score > this.state.highScore) {
        this.setState({topScore:score})

      }
      if (score === highScore) {
        this.setState({currentMsg: "You Won!!!"})
        this.resetGame()
      }

      else {
        this.setState({currentMsg: "Correct Guess!"})
        this.setState({clicked:this.state.clickedChar.push(id)})
        this.setState({currentScore:score})
        this.shuffleCards()
      }
    }
  }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };


  shuffleCards = () => {
    const shuffledCards = this.shuffleArray(friends)
    this.setState({friends:shuffledCards})
  }

  shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  resetGame = () => {
    this.setState({currentScore:0})
    this.setState({clickedChar:[]})
    this.shuffleCards()
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>The Office Clicky Game</Title>
        {this.state.friends.map(friend => (
          <Card
            
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clickedChars={this.clickedChars}
              />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
