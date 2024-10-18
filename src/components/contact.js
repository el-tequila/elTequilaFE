import Container from 'react-bootstrap/Container'; 
import "./contact-style.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TequilaDataService from '../services/tequila';
import PhoneInput from 'react-phone-input-2';  
import 'react-phone-input-2/lib/style.css'; 
import Select from 'react-select';  
import { getNames } from 'country-list';

const Contact = () => {
    const navigate = useNavigate();

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
  
    const [responseData, setResponseData] = useState(null);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });  // Update phone field
      };

    const handleCountryChange = (selectedOption) => {
        setFormData({ ...formData, countryOfResidence: selectedOption.value });
      };
  
    const handleCheckboxChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { firstName, lastName, email, phone, countryCode, dob, countryOfResidence, zipCode, inquiry, isLegalDrinkingAge, receiveMarketing } = formData;
      let data = {
        firstname: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        countryCode: countryCode,
        dob: dob,
        countryOfResidence: countryOfResidence,
        zipCode: zipCode, 
        inquiry: inquiry,
        isLegalDrinkingAge: isLegalDrinkingAge,
        receiveMarketing: receiveMarketing
      }
      TequilaDataService.addContact(data)
        .then (response => {
            const content = e.target.value;
          navigate("/home")
        })
        .catch(e => {
          console.log(e);
        });
      }; 
      const countryOptions = getNames().map(country => ({ value: country, label: country }));

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
                    <PhoneInput
                          country={'us'}  // Default country
                          value={formData.phone}
                          onChange={handlePhoneChange}  // Handles phone number updates
                          inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true,
                          }}
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
                    <Select
                        options={countryOptions}  // Country list as options
                        onChange={handleCountryChange}  // Handles country selection
                        value={countryOptions.find(option => option.value === formData.countryOfResidence)}
                        placeholder="Select your country"
                        classNamePrefix="react-select"
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
                    <div className="form-group inquiry-group">
                        <label>Inquiry</label>
                        <textarea
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>
                <div className="form-row">
                    <div className="form-group checkbox-group">
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