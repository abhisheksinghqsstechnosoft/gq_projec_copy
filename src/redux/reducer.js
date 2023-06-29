import { createReducer } from '@reduxjs/toolkit';


export const selectReducer = createReducer({ filter: [] }, builder =>
{
    builder.addCase('select', (state, action) =>
    {
        state.filter = action.payload;
    })
})
// export const selectReducer = createReducer([], (builder) =>
// {
//     builder.addCase('select', (state, action) =>
//     {
//         state.push(...action.payload);
//     });
// });