import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.items;
export const getFiltredValue = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.isLoading;
export const getDeleting = (state) => state.contacts.isDeleting;

export const getVisibleContacts = createSelector(
  [getContacts, getFiltredValue],
  (items, filter) => {
    const normalizeFilter = filter.toLowerCase();
    const showItem = items.filter((item) =>
      item.name.toLowerCase().includes(normalizeFilter)
    );
    return showItem;
  }
);

// ==
// export const getVisibleContacts = (state) => {
//   const allContacts = getContacts(state);
//   const contactsFilter = getFiltredValue(state);
//   const normalizeFilter = contactsFilter.toLowerCase();

//   return allContacts.filter((el) =>
//     el.name.toLowerCase().includes(normalizeFilter)
//   );
// };
