import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContactList } from "../services/servicesAPI.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	// useEffect que hará un GET a la API de la lista de contactos cada vez que el contactList cambie
	useEffect(() => {
		getContactList(store, dispatch)
	}, [store.contactList])

	return (
		<div className="m-5">
			<h1>Contact list</h1>
			{
				store.contactList.length === 0 ? (<p>Contact list empty, add new users.</p>) : (
					store.contactList.map((contact, index) => {
						return (
							<div className="row border p-3" key={index}>
								<div className="col-3 text-center p-1" style={{ height: "150px", width: "150px" }}>
									<img src="https://e1.pxfuel.com/desktop-wallpaper/81/558/desktop-wallpaper-random-people-shots-on-behance-random-people.jpg" className="rounded-circle" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
								</div>
								<div className="col-7 ms-3">
									<h5>{contact.name}</h5>
									<p><i class="fa-solid fa-location-dot"></i> {contact.address}</p>
									<p><i class="fa-solid fa-phone-flip"></i> {contact.phone}</p>
									<p><i class="fa-solid fa-envelope"></i> {contact.email}</p>
								</div>
								<div className="col-2 ms-auto">
									<i class="fa-solid fa-pencil me-5"></i>
									<i class="fa-solid fa-trash-can"></i>
								</div>
							</div>
						)
					})
				)
			}
		</div>
	);
}; 