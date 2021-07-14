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
        },
        updatePhoto: (state, action) => {
            const updatePhoto = action.payload;
            const updateId = state.findIndex(photo => photo.id === +updatePhoto.id);
            if (updateId >= 0) {
                state[updateId] = updatePhoto;
            }
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;