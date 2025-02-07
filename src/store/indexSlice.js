import { createSlice } from '@reduxjs/toolkit'

export const indexSlice = createSlice({
    name: 'index',
    initialState: {
        openLoginPopupWindow: false,
    },
    reducers: {
        setOpenLoginPopupWindow: (state, action) => {
            state.openLoginPopupWindow = action.payload
        },
    },
})

export const { setOpenLoginPopupWindow } = indexSlice.actions
export default indexSlice.reducer
