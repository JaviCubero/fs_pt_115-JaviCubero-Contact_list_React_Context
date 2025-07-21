const createAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JaviCubero", {
        method: "POST"
    });

    if (response.ok) {
        const data = await response.json();
        console.log("Usuario JaviCubero creado correctamente.");
        return data;
    } else {
        console.log('error ', response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

export const getContactList = async (store, dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JaviCubero/contacts");

    if (response.ok) {
        const data = await response.json();
        if (JSON.stringify(data.contacts) !== JSON.stringify(store.contactList)) {
            dispatch({ type: "getContactList", payload: data.contacts});
		}
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        if (response.status === 404) {
			createAgenda()
		}
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

const createContact = async (newContact, store, dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JaviCubero/contacts", {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const data = await response.json();
        getContactList(store, dispatch)
        navigate("/")
        return data;
    } else {
        console.log('error ', response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

export const editContact = async (id, newContact, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/JaviCubero/contacts/${id}`, {
        method: "PUT",
        body: JSON.stringify(newContact),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        getContacts(dispatch)
        navigate("/")
        const data = await response.json();
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};