import React from 'react';
import { Link } from 'react-router-dom';

class Student extends React.Component {
    render() {
        console.log("in student");
        return (
            <div>
                <h1>Student</h1>
                <h2>Student id is: {this.props.match.params.studentId}</h2>
            </div>
        )
    }
}

export default Student;