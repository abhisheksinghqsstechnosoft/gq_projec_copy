import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer({}, (b) =>
{
    b.addCase("register", (state, action) =>
    {
        state.user = action.payload

    })
})
export const formReducer = createReducer({}, builder =>
{
    builder.addCase('form', (state, action) =>
    {
        state.formData = action.payload
    })
});
export const selectReducer = createReducer({}, builder =>
{
    builder.addCase('select', (state, action) =>
    {
        state.select = action.payload
    })
})