import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "farah stambouli",
        bio: "i am a student in GoMyCode, who is trying to live in this life the best she can",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_naHLHGSiO0vyWBLGEPdjiUA6U9lR2IuacA&s",
        profession: "student"
      },
      show: false,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ show: !this.state.show });
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imageUrl, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile </button>
        {
          show && (
            <div>
              <h2>{fullName}</h2>
              <p>{bio}</p>
              <img src={imageUrl} alt={fullName} />
              <p>Profession: {profession}</p>
            </div>
          )
        }
      </div>
    );
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }
}

export default App;

