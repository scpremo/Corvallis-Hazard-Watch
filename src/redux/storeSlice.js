import { createClient } from '@supabase/supabase-js';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

const supabaseUrl = 'https://hknrbmfihwwaepwhfhbi.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrbnJibWZpaHd3YWVwd2hmaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNDA2OTAsImV4cCI6MjAzNjgxNjY5MH0.pgIz0EqpbQFXXLlu5m-8ejB8Q6jjXYv1V2uqBTY3HpA";
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchData = createAsyncThunk('store/fetchData', async () => {
  try {
    const { data, error } = await supabase.from('hazards').select('*');
    
    if (error) {
      throw error;
    }

    console.log(data); // Log fetched data

    return { data, fetchedAt: Date.now() };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it in the thunk
  }
});


const storeSlice = createSlice({
  name: "items",
  initialState: { items: [], fetchedAt: null }, // Initial state includes items array and fetchedAt timestamp
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const maxId = Math.max(...state.items.map(item => item.id), 0);
      newItem.id = maxId + 1;
      state.items.push(newItem);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.items = action.payload.data.map(item => ({ ...item}));
      state.fetchedAt = action.payload.fetchedAt; // Update fetchedAt timestamp
    });
  },
});

export default storeSlice.reducer;
export const { add } = storeSlice.actions;
export const selectStore = state => state.items.items; // Adjust selector for nested state
export const selectFetchedAt = state => state.items.fetchedAt; // Selector for fetchedAt timestamp
