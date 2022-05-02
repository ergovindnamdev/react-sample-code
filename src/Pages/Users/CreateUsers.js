import React, { useState , useEffect } from 'react';
import Header from '../../Components/Common/Header';
import { useHistory } from 'react-router-dom';
import SideNav from '../../Components/Common/SideNav';
import { Alert } from 'react-bootstrap';
import { emailFormateValidation } from './../../Components/Helpers/Helper';
import {PostUserAction} from './../../Redux/Action/user.action';
import { useDispatch, useSelector } from 'react-redux';
const Signup = () => {
    let history = useHistory();
    let dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState({ status: true, type: '', msg: "" });
    const [buttonDisable, setButtonDisable] = useState(false);
    let userData = useSelector(state => state.data);
    useEffect(()=>{
        if(userData.status !== undefined){
            if(userData.status ===  'success'){
                setMessage({ status: false, type: 'success', msg: "Data Updated Successfully!" });
            }else{
                setMessage({ status: false, type: 'error', msg: "Something Went Wrong!" });
            }
        }
    },[userData])
    const emailValidation = () => {
        if (email !== '') {
            if (emailFormateValidation(email) !== 'valid') {
                setMessage({ status: false, type: 'danger', msg: "Invalid Email Formate!" });
                setButtonDisable(true);
            } else {
                setMessage({ status: true, type: '', msg: "" });
                setButtonDisable(false);
            }
        }else{
            setMessage({ status: true, type: '', msg: "" });
            setButtonDisable(false);
        }
    }
    const submitHandler = () => {
        if (firstName !== '' && email !== '' && phone !== '' && title !== '' && lastName !== '' && gender !== ''&& dateOfBirth !== '' && state !== '' && city !== '' && country !== '') {
            if (emailFormateValidation(email) === 'valid') {
                let userData = {title, firstName, lastName,email, phone ,gender,dateOfBirth,state ,city , country}
                dispatch(PostUserAction(userData));
            } else {
                setMessage({ status: false, type: 'danger', msg: "Invalid Email Formate!" })
            }
        } else {
            setMessage({ status: false, type: 'danger', msg: "Please Fill All The Fields" })
        }
    }

    return (
        <div className=''>
            <Header />
            <div className='row '>
                <div className='col-md-3'>
                    <SideNav />
                </div>
                <div className='col-md-8 '>
                    <h4 className=' text-secondary my-3'>Create User</h4>
                    {message.status === false ? <Alert key={message.msg} variant={message.type} onClose={() => setMessage({ status: true, type: '', msg: "" })} dismissible> {message.msg}</Alert> : null}
                    <div className='p-4 shadow-sm my-3 bg-light'>
                        <div className='row'>
                            <div className='col-md-6'>
                            <div className="form-group mt-3">
                                    <label>Title</label>
                                    <select className="form-control" onChange={(e) => setTitle(e.target.value)}>
                                        <option>Select Title</option>
                                        <option value='mr'>Mr</option>
                                        <option value='ms'>Ms</option>
                                        <option value='mrs'>Mrs</option>
                                        <option value='miss'>Miss</option>
                                        <option value='dr'>Dr</option>
                                    </select>
                                </div>
                                <div className="form-group mt-3">
                                    <label>First Name</label>
                                    <input type='text' className="form-control" placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Last Name</label>
                                    <input type='text' className="form-control" placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email</label>
                                    <input type='email' onBlur={emailValidation} className="form-control" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-group mt-3">
                                    <label>City</label>
                                    <input type="text" placeholder='Enter City' onChange={(e) => setCity(e.target.value)} className="form-control" required />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mt-3">
                                    <label>Gender</label>
                                    <select className="form-control" onChange={(e) => setGender(e.target.value)}>
                                        <option>Select Gender</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                        <option value='others'>Others</option>
                                    </select>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Phone number</label>
                                    <input type="tel" maxLength='10' placeholder='Enter Phone number' onChange={(e) => setPhone(e.target.value)} className="form-control" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} required />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Date Of Birth</label>
                                    <input type="date" onChange={(e) => setDateOfBirth(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-3">
                                    <label>State</label>
                                    <input type="text" placeholder='Enter State' onChange={(e) => setState(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Country</label>
                                    <input type="text" placeholder='Enter Country' onChange={(e) => setCountry(e.target.value)} className="form-control" required />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center my-3'>
                            <button onClick={submitHandler} disabled={buttonDisable} type="button" className="btn btn-custom-submit mt-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;