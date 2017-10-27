import React from 'react';

class Form extends React.Component {
    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.form.firstname.value)
        console.log(this.form.lastName.value)
        console.log(this.form.email.value)
        console.log(this.form.authorize.checked)
    
        this.props.updateForm(this.form)
      }
    render() {
        return (
            <form ref={(form) => { this.form = form }}
                onSubmit={(e) => { this.handleFormSubmit(e) }} >
                FName: <input type="text" name="firstname" /><br />
                Lname: <input type="text" name="lastName" /><br />
                Email: <input type="email" name="email" /><br />
                Authorize: <input type="checkbox" name="authorize" /><br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;