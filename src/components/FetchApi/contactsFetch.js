import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6192166f41928b00176902b2.mockapi.io/contacts/",
  }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
    createContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: newContact,
      }),
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation } = contactsApi;
