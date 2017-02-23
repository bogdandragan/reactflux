import React from "react";

export default class Todo extends React.Component{
    render(){
        const {complete, text} = this.props;

        return(
          <li>
              <span>{text}</span>
              <span>{complete}</span>
          </li>
        );
    }
}