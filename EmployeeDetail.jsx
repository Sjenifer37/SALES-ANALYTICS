import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/auth/employee/detail/' + id)
            .then(result => setEmployee(result.data[0]))
            .catch(err => console.log(err))
    }, [id])

    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/employee/logout')
            .then(result => {
                if (result.data.Status) {
                    localStorage.removeItem("valid")
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    if (!employee) return <div>Loading...</div>

    return (
        <div>
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>EMPLOYEE MANAGEMENT SYSTEM</h4>
            </div>
            <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
                <img src={`http://localhost:3000/Images/${employee.image}`} className='emp_det_image' alt={employee.name}/>
                <div className='d-flex align-items-center flex-column mt-5'>
                    <h3>Name: {employee.name}</h3>
                    <h3>Email: {employee.email}</h3>
                    <h3>Salary: ${employee.salary}</h3>
                </div>
                <div>
                    <button className='btn btn-primary me-2'>Edit</button>
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetail
