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
        contactList: action.payload
      };
    case 'deleteContact':
      const { id } = action.payload
      
      return {
        ...store,
        contactList: store.contactList.filter(
          contact => contact.id !== id
        ),
      };
    default:
      throw Error('Unknown action.');
  }
}
