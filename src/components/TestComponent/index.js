import React from "react";

class TestComponent extends React.Component {
    render() {
        return (
            <div>TestComponent {this.props.name}</div>
        );
    }
}

export default TestComponent;