import React from 'react'
import './style.css'

class ClassForm extends React.Component {
    render() {
        return (
           <div className="form-container">
              <h1 className='Title'>Class Assignment</h1>
             <h2 className='Subtitle'>Class Form</h2>
                 <form>
                <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder='Enter your name' />
                </div>

                <br />
                <div className="form-group">
                <label>Email</label>
                <input type="text" placeholder="Enter your email address" />
                </div>
                <br />
                <div className="form-group">
                <label>Password</label>
                <input type="password" />
                </div>
                <br />
                <div className="form-group">
                <button type='submit'>Submit</button>
                </div>

        </form>
           </div>
        );
    }
}
export default ClassForm;
