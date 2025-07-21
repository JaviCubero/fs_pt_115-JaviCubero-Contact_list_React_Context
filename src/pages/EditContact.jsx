import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export const EditContact = () => {

    const { id } = useParams()

    const navigate = useNavigate()




    useEffect (() => {
        if (id) {
            setNewContact (store.contacts.filter(contact in contact))
        }
    })

    return (
        <div className="container mt-5">
            <h1 className="text-center">Edit contact</h1>
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
                    <button type="submit" class="btn btn-primary">Save</button>
                    <Link to="/">
                        <button className="border-0 bg-white text-primary">or get back to contacts</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}