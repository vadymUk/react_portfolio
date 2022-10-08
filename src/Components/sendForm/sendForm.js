
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const sendValueForm = createApi ({
    reducerPath: 'sendForm',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        sendForm: build.mutation({
            query: (body) => ({
                url: 'posts',
                method: 'POST',
                body,
            })
        })
    })
});

export const {useSendFormMutation} = sendValueForm