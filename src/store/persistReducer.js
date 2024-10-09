import { createSlice } from '@reduxjs/toolkit'

export const persistSlice = createSlice({
    name: 'persist',
    initialState: {
        userInfo: {},
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
    },
})
export const { setUserInfo } = persistSlice.actions
export default persistSlice.reducer
