import React from 'react';

class OutputUserForm extends React.Component {
    render() {
        //on page load the form object is empty, so lets check if there are any keys in the object and if the form is an object
        if(Object.keys(this.props.form).length === 0 && this.props.form.constructor === Object) {
            return (<div>Nothing Typed Yet</div>)
        } else {
            //this part will be executed on submit when the state changes of form object in app component
        let {firstname, lastName, email, authorize } = this.props.form;
        console.log(firstname);
        return (
            <div>
               <h2> You Typed: </h2>
                FName: {firstname.value}<br />
                Lname: {lastName.value}<br />
                Email: {email.value}<br />
                Authorized: {authorize.checked?'true':'false'}<br />
            </div>
        );
    }
    }
}

export default OutputUserForm;