import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        salary: "",
        address: "",
        category_id: "",
        image: null, // store the actual file
    });

    const [category, setCategory] = useState([]);
     const navigate = useNavigate()

    useEffect(() => {
        // Fetch categories from backend
        axios.get("http://localhost:3000/auth/category")
            .then(result => {
                if (result.data.Status) setCategory(result.data.Result);
                else alert(result.data.Error);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!employee.image) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append("name", employee.name);
        formData.append("email", employee.email);
        formData.append("password", employee.password);
        formData.append("salary", employee.salary);
        formData.append("address", employee.address);
        formData.append("category_id", employee.category_id);
        formData.append("image", employee.image);

        axios.post("http://localhost:3000/auth/add_employee", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(result => {

                if (result.data.Status) {
                    navigate('/dashboard/employee')
                } else {
                    alert(result.data.Error)
                }
            })
            .catch (err => console.error(err));
    };

return (
    <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="p-4 rounded w-50 border">
            <h3 className="text-center mb-4">Add Employee</h3>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name"
                        value={employee.name}
                        onChange={e => setEmployee({ ...employee, name: e.target.value })}
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email"
                        value={employee.email}
                        onChange={e => setEmployee({ ...employee, email: e.target.value })}
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password"
                        value={employee.password}
                        onChange={e => setEmployee({ ...employee, password: e.target.value })}
                    />
                </div>

                {/* Salary */}
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input type="text" className="form-control" placeholder="Enter Salary"
                        value={employee.salary}
                        onChange={e => setEmployee({ ...employee, salary: e.target.value })}
                    />
                </div>

                {/* Address */}
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address"
                        value={employee.address}
                        onChange={e => setEmployee({ ...employee, address: e.target.value })}
                    />
                </div>

                {/* Category */}
                <div className="col-12">
                    <label className="form-label">Category</label>
                    <select className="form-select"
                        value={employee.category_id}
                        onChange={e => setEmployee({ ...employee, category_id: e.target.value })}
                    >
                        {category.map((c) => {
                            return <option value={c.id}>{c.name}</option>;
                        })}
                    </select>
                </div>


                {/* Image */}
                <div className="mb-3">
                    <label className="form-label">Select Image</label>
                    <input type="file" className="form-control" accept="image/*"
                        onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Add Employee</button>
            </form>
        </div>
    </div>
);
};

export default AddEmployee;
