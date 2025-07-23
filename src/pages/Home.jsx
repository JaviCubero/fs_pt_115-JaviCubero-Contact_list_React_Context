import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { deleteContact, getContactList } from "../services/servicesAPI.js";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getContactList(store, dispatch)
	}, [store.contactList])

	return (
		<div className="m-5">
			<h1 className="mb-4">Contact list</h1>
			{
				store.contactList.length !== 0 ?
					(
						store.contactList.map((contact, index) => {
							return (
								<div className="row border p-3" key={index}>
									<div className="col-3 text-center p-1" style={{ height: "150px", width: "150px" }}>
										<img src="https://e1.pxfuel.com/desktop-wallpaper/81/558/desktop-wallpaper-random-people-shots-on-behance-random-people.jpg" className="rounded-circle" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
									</div>
									<div className="col-7 ms-3 px-0 pt-2">
										<h5 className="mb-3">{contact.name}</h5>
										<p className="mb-2"><i class="fa-solid fa-location-dot"></i> {contact.address}</p>
										<p className="mb-2"><i class="fa-solid fa-phone-flip"></i> {contact.phone}</p>
										<p className="mb-2"><i class="fa-solid fa-envelope"></i> {contact.email}</p>
									</div>
									<div className="col-2 ms-auto text-center">
										<Link to={`/edit/${contact.id}`}>
											<i class="fa-solid fa-pencil me-5 text-black"></i>
										</Link>
										<i class="fa-solid fa-trash-can" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#deletionModal"></i>
										<div class="modal fade" id="deletionModal" tabindex="-1" aria-labelledby="deletionModalLabel" aria-hidden="true">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<h1 class="modal-title fs-5" id="deletionModalLabel">Are you sure?</h1>
														<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
													</div>
													<div class="modal-body text-start">
														Press Confirm button if you want to delete this contact, it will be permanently deleted.
													</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
														<button type="button" class="btn btn-primary" onClick={() => deleteContact(contact.id, dispatch)} data-bs-dismiss="modal">Confirm</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})
					) : (<p>Contact list empty, add new contacts.</p>)
			}
		</div >
	);
}; 