import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate, useParams } from "react-router-dom"
import { editContact } from "../services/servicesAPI.js";

export const EditContact = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const { store, dispatch } = useGlobalReducer();

    const [currentContact, setCurrentContact] = useState(store.contactList.find(contact => contact.id == id))

    console.log(currentContact);

    function onInputChange(event) {
        if (event.target.id == "inputName") {
            setCurrentContact({ ...currentContact, name: event.target.value });
        } else if (event.target.id == "inputEmail") {
            setCurrentContact({ ...currentContact, email: event.target.value });
        } else if (event.target.id == "inputPhone") {
            setCurrentContact({ ...currentContact, phone: event.target.value });
        } else if (event.target.id == "inputAddress") {
            setCurrentContact({ ...currentContact, address: event.target.value });
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Edit contact</h1>
            {
                currentContact ? (
                    <form>
                        <div class="mb-2">
                            <label for="inputName" class="form-label">Full Name</label>
                            <input class="form-control" id="inputName" placeholder="Full Name" value={currentContact.name} onChange={onInputChange} />
                        </div>
                        <div class="mb-2">
                            <label for="inputEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" value={currentContact.email} onChange={onInputChange} />
                        </div>
                        <div class="mb-2">
                            <label for="inputPhone" class="form-label">Phone</label>
                            <input class="form-control" id="inputPhone" placeholder="Enter phone" value={currentContact.phone} onChange={onInputChange} />
                        </div>
                        <div class="mb-3">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input class="form-control" id="inputAddress" placeholder="Enter address" value={currentContact.address} onChange={onInputChange} />
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary" onClick={() => {
                                editContact(id, currentContact)
                                navigate("/")
                            }}>Save</button>
                            <Link to="/">
                                <button className="border-0 bg-white text-primary">or get back to contacts</button>
                            </Link>
                        </div>
                    </form>
                ) : (
                    <div>
                        <p>Problem loading contact information, please go back and select again a contact to edit it.</p>
                        <Link to="/">
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary">Get back to contacts</button>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}