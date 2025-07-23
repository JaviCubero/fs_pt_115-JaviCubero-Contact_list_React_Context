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

export const createContact = async (newContact) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JaviCubero/contacts", {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error ', response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

export const editContact = async (id, currentContact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/JaviCubero/contacts/${id}`, {
        method: "PUT",
        body: JSON.stringify(currentContact),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

export const deleteContact = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/JaviCubero/contacts/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        console.log("Contacto eliminado exitosamente pero sin respuesta JSON");
        dispatch({ type: "deleteContact", payload: id});
    } else {
        console.log("Error ", response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};