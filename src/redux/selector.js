export const getFiltredValue = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const allContacts = getContacts(state);
  const contactsFilter = getFiltredValue(state);
  const normalizeFilter = contactsFilter.toLowerCase();

  return allContacts.filter((el) =>
    el.name.toLowerCase().includes(normalizeFilter)
  );
};
