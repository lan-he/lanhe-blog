import { createSlice } from '@reduxjs/toolkit'

export const indexSlice = createSlice({
    name: 'index',
    initialState: {
        isOpenLogin: false,
    },
    reducers: {
        setIsOpenLogin: (state, action) => {
            state.isOpenLogin = action.payload
        },
    },
})
export const { setIsOpenLogin } = indexSlice.actions
export default indexSlice.reducer
