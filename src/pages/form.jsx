import { useState } from 'react';
import { Link } from 'react-router-dom';


const Form = ({ onSubmit, buttonText = "Proceed" }) => {
    const [formData, setFormData] = useState({
        name: '',
        cnic: '',
        email: ''
    });

    const [focused, setFocused] = useState({
        name: false,
        cnic: false,
        email: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFocus = (name) => {
        setFocused(prev => ({
            ...prev,
            [name]: true
        }));
    };

    const handleBlur = (name) => {
        setFocused(prev => ({
            ...prev,
            [name]: false
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
console.log(formData);

    return (
        <div className="modern-form-container">
            <form onSubmit={handleSubmit} className="modern-form">
                <div className={`form-field ${focused.name ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="name">Full Name</label>
                    <div className="form-field-bar"></div>
                    <i className="fas fa-user field-icon"></i>
                </div>

                <div className={`form-field ${focused.cnic ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="cnic"
                        name="cnic"
                        value={formData.cnic}
                        onChange={handleChange}
                        onFocus={() => handleFocus('cnic')}
                        onBlur={() => handleBlur('cnic')}
                        required
                        placeholder=" "
                        pattern="\d{5}-\d{7}-\d{1}"
                    />
                    <label htmlFor="cnic">CNIC Number</label>
                    <div className="form-field-bar"></div>
                    <i className="fas fa-id-card field-icon"></i>
                    <small className="hint">Format: 00000-0000000-0</small>
                </div>

                <div className={`form-field ${focused.email ? 'focused' : ''}`}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="email">Email Address</label>
                    <div className="form-field-bar"></div>
                    <i className="fas fa-envelope field-icon"></i>
                </div>

               <Link to="/UserForm">  <button type="submit" className="submit-btn">
                    <span>{buttonText}</span>
                    <i className="fas fa-arrow-right"></i>
                </button></Link>
                <Link to="/calculate">  <button type="submit" className="submit-btnn">
                    <span>Calculate Your Amount</span>
                    <i className="fas fa-arrow-right"></i>
                </button></Link>
            </form>
        </div>
    );
};

export default Form;