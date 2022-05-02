import React, { useState, useEffect } from 'react';
import Header from '../../Components/Common/Header';
import SideNav from '../../Components/Common/SideNav';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { GetUserAction , DeleteUserAction} from './../../Redux/Action/user.action';
import Edit from './../../Style/Icons/edit.svg';
import Delete from './../../Style/Icons/delet.svg';
import { Link} from "react-router-dom";
const ViewUsers = () => {
    let dispatch = useDispatch();
    let [response, setResponse] = useState([]);
    let [page, setPage] = useState(1);
    let userData = useSelector(state => state.data);

    useEffect(() => {
        dispatch(GetUserAction('?page=' + page + '&limit=9'))
    }, [page])

    useEffect(() => {
        setResponse(userData.data)
    }, [userData]);

    const deleteUser = (userId) =>{
        if(window.confirm('Are you sure you want to delete user?')){
            dispatch(DeleteUserAction(userId));
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
                    <h4 className=' text-secondary my-4'>View User</h4>
                    <Table bordered responsive className='p-4 shadow-sm my-3'>
                        <thead >
                            <tr>
                                <th className='py-3'>#</th>
                                <th className='py-3'>Title</th>
                                <th className='py-3'>First Name</th>
                                <th className='py-3'>Last Name</th>
                                <th className='py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {response !== undefined ?
                                response.map((res, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{res.title}</td>
                                        <td>{res.firstName}</td>
                                        <td>{res.lastName}</td>
                                        <td> <Link className="btn text-left" to={{
                                                pathname: "/edit-user",
                                                state: {
                                                    id: res.id,
                                                },
                                            }}>
                                            <img src={Edit} width='20px' className='scale' /></Link>
                                         <button className='btn' onClick={()=> deleteUser(res.id)}> <img className='scale' src={Delete} width='20px' /></button></td>
                                    </tr>
                                }) : <tr key='1'>
                                        <td></td>
                                        <td></td>
                                        <td className='text-center'>No Data Found</td>
                                        <td></td>
                                    </tr>
                            }
                        </tbody>
                    </Table>
                    <Pagination>
                        <Pagination.Prev disabled={page < 2 ? true : false} onClick={() => setPage(prev => prev - 1)} />
                        <Pagination.Item onClick={() => setPage(1)} active>{1}</Pagination.Item>
                        <Pagination.Item onClick={() => setPage(2)} >{2}</Pagination.Item>
                        <Pagination.Item onClick={() => setPage(3)}>{3}</Pagination.Item>
                        <Pagination.Next onClick={() => setPage(prev => prev + 1)} />
                    </Pagination>
                </div>
            </div>

        </div>


    );
};

export default ViewUsers;