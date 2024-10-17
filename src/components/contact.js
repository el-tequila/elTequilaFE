import Container from 'react-bootstrap/Container'; 
import "./contact-style.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TequilaDataService from '../services/tequila';

const Contact = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryCode: '',
      dob: '',
      countryOfResidence: '',
      zipCode: '',
      inquiry: '',
      isLegalDrinkingAge: false,
      receiveMarketing: false,
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleCheckboxChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { firstName, lastName, email, phone, countryCode, dob, countryOfResidence, zipCode, inquiry, isLegalDrinkingAge, receiveMarketing } = formData;
      let data = {
        name: firstName
      }
      TequilaDataService.addContact(data)
        .then (response => {
          navigate("/contacts")
        })
        .catch(e => {
          console.log(e);
        });
      }; 

    return(
        <Container className="contact">
            <div className='contact-inquiry'>
            <p><span className="underline-contact">Co</span><span className="text-start">ntact Us</span></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                        <option value="+1">+1 (USA)</option>
                        <option value="+52">+52 (Mexico)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+49">+49 (Germany)</option>
                        <option value="+44">+44 (United Kingdom)</option>
                        {/* Add more country codes as needed */}
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="phone-input"
                    />
                        </div>
                    </div>
                <div className="form-row">
                    <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>Country of Residence</label>
                    <input
                        type="text"
                        name="countryOfResidence"
                        value={formData.countryOfResidence}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                    <label>Zip Code</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <div>
                            <label>Inquiry</label>
                        </div>
                        <div>
                        <textarea
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                    <input
                        type="checkbox"
                        name="isLegalDrinkingAge"
                        checked={formData.isLegalDrinkingAge}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <label>I am of Legal Drinking Age</label>
                    </div>
                    </div>
                <div className="form-row">
                <div className="form-group checkbox-group">
                    <input
                    type="checkbox"
                    name="receiveMarketing"
                    checked={formData.receiveMarketing}
                    onChange={handleCheckboxChange}
                    />
                    <label>
                    I would like to receive marketing communications, additional benefits, 
                    invitations to private events and the latest news about El Tequila products. 
                    By subscribing you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
                    </label>
                </div>
                </div>
            <button type="submit" className="submit-btn" onClick={ handleSubmit }>Submit</button>
            </form>
        </Container>
        )
    }
export default Contact;