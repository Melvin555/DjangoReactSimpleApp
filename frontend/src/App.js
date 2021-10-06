import React, { Component } from "react";
import Modal from "./components.Modal";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      }
    }
  }
}