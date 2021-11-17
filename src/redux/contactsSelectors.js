import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.items;
export const getFiltredValue = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.isLoading;

// export const getVisibleContacts = (state) => {
//   const allContacts = getContacts(state);
//   const contactsFilter = getFiltredValue(state);
//   const normalizeFilter = contactsFilter.toLowerCase();

//   return allContacts.filter((el) =>
//     el.name.toLowerCase().includes(normalizeFilter)
//   );
// };
export const getVisibleContacts = createSelector(
  [getContacts, getFiltredValue],
  (items, filter) =>
    items.filter((items) => items.name.toLowerCase().includes(filter))
);
