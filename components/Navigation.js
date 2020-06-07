import React from "react";

export default class NavigationBar extends React.Component {

  componentDidMount = () => {
    
  }

  state = {
    "navText": "ls"
  };

  showLinks = () => {
    let links = document.getElementById("links");
    let nav = document.getElementById("nav");

    if (links.style.display === "block") {
      links.style.display = "none";
      nav.style.height = "60px";
      this.setState({"navText": "ls"})
    } else {
      links.style.display = "block";
      nav.style.height = "60vh";
      this.setState({"navText": "cd"})
    }

    return false;
  }

  closeMenu = () => {
    let links = document.getElementById("links");
    let nav = document.getElementById("nav");
    links.style.display = "none";
    nav.style.height = "60px";
    this.setState({"navText": "ls"})
    return false;
  }

  render() {
    return (
      <nav id="nav">
        <ul id="links" onClick={this.closeMenu}>
          <li><a href="#home">~/</a></li>
          <li><a href="#about">~/about</a></li>
          <li><a href="#skills">~/skills</a></li>
          <li><a href="#portfolio">~/portfolio</a></li>
          <li><a href="#contact">~/contact</a></li>
        </ul>
  
        <span className="icon" onClick={this.showLinks}>
          {this.state.navText}
        </span>
      </nav>
    );
  }
}