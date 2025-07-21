import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom"
import { createContact } from "../services/servicesAPI.js";

export const AddContact = () => {

    const { store, dispatch } = useGlobalReducer()

    const navigate = useNavigate()

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })



    return (
        <div className="container mt-5">
            <h1 className="text-center">Add a new contact</h1>
            <form>
                <div class="mb-2">
                    <label for="inputName" class="form-label">Full Name</label>
                    <input class="form-control" id="inputName" placeholder="Full Name" />
                </div>
                <div class="mb-2">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" />
                </div>
                <div class="mb-2">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input class="form-control" id="inputPhone" placeholder="Enter phone" />
                </div>
                <div class="mb-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input class="form-control" id="inputAddress" placeholder="Enter address" />
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary" onClick={() => createContact(newContact, store, dispatch)}>Add</button>
                    <Link to="/">
                        <button className="border-0 bg-white text-primary">or get back to contacts</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}