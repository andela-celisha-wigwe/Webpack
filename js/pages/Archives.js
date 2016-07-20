import React from "react";

export default class Archives extends React.Component {
    
    render() {
    	console.log(this.props);

    	const {article} = this.props.params
    	const {filter, date} = this.props.location.query; 
        return (
        	<div>
        		<h1>Archives ({article})</h1>
        		<h4>date ({date}), filter ({filter})</h4>
        	</div>
        );
    }
}