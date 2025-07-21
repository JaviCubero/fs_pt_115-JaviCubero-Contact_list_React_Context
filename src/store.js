export const initialStore = () => {
  return {
    contactList: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'getContactList':
      return {
        ...store, 
        contactList: store.contactList = action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
