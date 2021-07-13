import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const removeId = action.payload;
            return state.filter(photo => photo.id !== removeId);
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto } = actions;
export default reducer;