import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    
    render() {
        return <div>It works d and I like it.!!</div>;
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);