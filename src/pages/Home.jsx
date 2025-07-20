import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="m-5">
			<button className="btn btn-success d-flex ms-auto mb-3">Add new contact</button>

			<div className="row border p-3">
				<div className="col-3 text-center p-1" style={{ height: "150px", width: "150px" }}>
					<img src="https://e1.pxfuel.com/desktop-wallpaper/81/558/desktop-wallpaper-random-people-shots-on-behance-random-people.jpg" className="rounded-circle" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
				</div>
				<div className="col-7 ms-3">
					<h5>Mike Anamendolla</h5>
					<p><i class="fa-solid fa-location-dot"></i> 5842 Hillcrest Rd</p>
					<p><i class="fa-solid fa-phone-flip"></i> (870) 288-4149</p>
					<p><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>
				</div>
				<div className="col-2 ms-auto">
					<i class="fa-solid fa-pencil me-5"></i>
					<i class="fa-solid fa-trash-can"></i>
				</div>
			</div>

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
						<button type="submit" class="btn btn-primary">Save</button>
						<a>or get back to contacts</a>
					</div>
				</form>
			</div>
		</div>
	);
}; 