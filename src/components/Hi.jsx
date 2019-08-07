import React, { Component } from 'react';

function Welcome() {
    return <h1>Hello from Welcome!</h1>
}

class SuperWelcome extends Component {
    render() {
        return <h1>Hello from SuperWelcome!</h1>
    }
}

function Lesson() {
    return (
        <div>
            <Welcome/>
            <SuperWelcome />
        </div>
    )
}

export default Lesson;