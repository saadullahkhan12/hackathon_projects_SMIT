import { useState } from 'react';


const UserForm = ({ onSubmit, buttonText = "Proceed" }) => {
    const [formData, setFormData] = useState({
        name: '',
        cnic: '',
        email: '',
        address: '',
        phoneNumber: '',
        guarantor1Name: '',
        guarantor1Email: '',
        guarantor1Location: '',
        guarantor1Cnic: '',
        guarantor2Name: '',
        guarantor2Email: '',
        guarantor2Location: '',
        guarantor2Cnic: '',
        statement: '',
        salarySheet: ''
    });

    const [focused, setFocused] = useState({
        name: false,
        cnic: false,
        email: false,
        address: false,
        phoneNumber: false,
        guarantor1Name: false,
        guarantor1Email: false,
        guarantor1Location: false,
        guarantor1Cnic: false,
        guarantor2Name: false,
        guarantor2Email: false,
        guarantor2Location: false,
        guarantor2Cnic: false,
        statement: false,
        salarySheet: false
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

                <div className={`form-field ${focused.address ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onFocus={() => handleFocus('address')}
                        onBlur={() => handleBlur('address')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="address">Address</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.phoneNumber ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phoneNumber')}
                        onBlur={() => handleBlur('phoneNumber')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div className="form-field-bar"></div>
                </div>

                <h3>Guarantor 1 Information</h3>
                <div className={`form-field ${focused.guarantor1Name ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="guarantor1Name"
                        name="guarantor1Name"
                        value={formData.guarantor1Name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor1Name')}
                        onBlur={() => handleBlur('guarantor1Name')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="guarantor1Name">Guarantor 1 Name</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.guarantor1Email ? 'focused' : ''}`}>
                    <input
                        type="email"
                        id="guarantor1Email"
                        name="guarantor1Email"
                        value={formData.guarantor1Email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor1Email')}
                        onBlur={() => handleBlur('guarantor1Email')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="guarantor1Email">Guarantor 1 Email</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.guarantor1Location ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="guarantor1Location"
                        name="guarantor1Location"
                        value={formData.guarantor1Location}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor1Location')}
                        onBlur={() => handleBlur('guarantor1Location')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="guarantor1Location">Guarantor 1 Location</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.guarantor1Cnic ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="guarantor1Cnic"
                        name="guarantor1Cnic"
                        value={formData.guarantor1Cnic}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor1Cnic')}
                        onBlur={() => handleBlur('guarantor1Cnic')}
                        required
                        placeholder=" "
                        pattern="\d{5}-\d{7}-\d{1}"
                    />
                    <label htmlFor="guarantor1Cnic">Guarantor 1 CNIC</label>
                    <div className="form-field-bar"></div>
                    <small className="hint">Format: 00000-0000000-0</small>
                </div>

                <h3>Guarantor 2 Information</h3>
                <div className={`form-field ${focused.guarantor2Name ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="guarantor2Name"
                        name="guarantor2Name"
                        value={formData.guarantor2Name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor2Name')}
                        onBlur={() => handleBlur('guarantor2Name')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="guarantor2Name">Guarantor 2 Name</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.guarantor2Email ? 'focused' : ''}`}>
                    <input
                        type="email"
                        id="guarantor2Email"
                        name="guarantor2Email"
                        value={formData.guarantor2Email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor2Email')}
                        onBlur={() => handleBlur('guarantor2Email')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="guarantor2Email">Guarantor 2 Email</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.guarantor2Location ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="guarantor2Location"
                        name="guarantor2Location"
                        value={formData.guarantor2Location}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor2Location')}
                        onBlur={() => handleBlur('guarantor2Location')}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="guarantor2Location">Guarantor 2 Location</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.guarantor2Cnic ? 'focused' : ''}`}>
                    <input
                        type="text"
                        id="guarantor2Cnic"
                        name="guarantor2Cnic"
                        value={formData.guarantor2Cnic}
                        onChange={handleChange}
                        onFocus={() => handleFocus('guarantor2Cnic')}
                        onBlur={() => handleBlur('guarantor2Cnic')}
                        required
                        placeholder=" "
                        pattern="\d{5}-\d{7}-\d{1}"
                    />
                    <label htmlFor="guarantor2Cnic">Guarantor 2 CNIC</label>
                    <div className="form-field-bar"></div>
                    <small className="hint">Format: 00000-0000000-0</small>
                </div>

                <div className={`form-field ${focused.statement ? 'focused' : ''}`}>
                    <textarea
                        id="statement"
                        name="statement"
                        value={formData.statement}
                        onChange={handleChange}
                        onFocus={() => handleFocus('statement')}
                        onBlur={() => handleBlur('statement')}
                        placeholder=" "
                    />
                    <label htmlFor="statement">Statement</label>
                    <div className="form-field-bar"></div>
                </div>

                <div className={`form-field ${focused.salarySheet ? 'focused' : ''}`}>
                    <input
                        type="file"
                        id="salarySheet"
                        name="salarySheet"
                        onChange={handleChange}
                        onFocus={() => handleFocus('salarySheet')}
                        onBlur={() => handleBlur('salarySheet')}
                        placeholder=" "
                    />
                    <label htmlFor="salarySheet">Salary Sheet</label>
                    <div className="form-field-bar"></div>
                </div>

                <button type="submit" className="submit-btn">
                    <span>{buttonText}</span>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
    );
};

export default UserForm;