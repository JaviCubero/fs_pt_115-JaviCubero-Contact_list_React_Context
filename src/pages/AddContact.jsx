import { Link, useNavigate } from "react-router-dom"
import { createContact } from "../services/servicesAPI.js";
import { useState } from "react";

export const AddContact = () => {

    const navigate = useNavigate()

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    function onInputChange(event) {
        if (event.target.id == "inputName") {
            setNewContact({ ...newContact, name: event.target.value });
        } else if (event.target.id == "inputEmail") {
            setNewContact({ ...newContact, email: event.target.value });
        } else if (event.target.id == "inputPhone") {
            setNewContact({ ...newContact, phone: event.target.value });
        } else if (event.target.id == "inputAddress") {
            setNewContact({ ...newContact, address: event.target.value });
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Add a new contact</h1>
            <form>
                <div class="mb-2">
                    <label for="inputName" class="form-label">Full Name</label>
                    <input class="form-control" id="inputName" placeholder="Full Name" onChange={onInputChange} />
                </div>
                <div class="mb-2">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" onChange={onInputChange} />
                </div>
                <div class="mb-2">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input class="form-control" id="inputPhone" placeholder="Enter phone" onChange={onInputChange} />
                </div>
                <div class="mb-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input class="form-control" id="inputAddress" placeholder="Enter address" onChange={onInputChange} />
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary" onClick={() => {
                        createContact(newContact)
                        navigate("/")
                    }}>Add</button>
                    <Link to="/">
                        <button className="border-0 bg-white text-primary">or get back to contacts</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}