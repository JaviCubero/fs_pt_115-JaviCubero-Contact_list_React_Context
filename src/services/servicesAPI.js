export const getContacts = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${usuario}/contacts`);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        return {error: {status: response.status, statusText: response.statusText}};
    };
};