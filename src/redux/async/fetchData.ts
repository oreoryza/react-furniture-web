import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://furniture-api-lumoshive-academy.vercel.app/api";

// Define types for the data being fetched
interface Header {
    title: string;
    description: string;
    banner: string;
}

interface Data {
    experience: string;
    country: string;
    sold: string;
    variant: string;
}

interface Category {
    title: string;
    image: string;
}

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    price_after_discount: number;
}

interface Testimonial {
    id: number;
    name: string;
    message: string;
    title: string;
    image: string;
}

interface SubscribeResponse {
    message: string;
}

// Async actions
export const getHeader = createAsyncThunk<Header, void>("fetch/header", async () => {
    const response = await axios.get(`${API_URL}/header`);
    return response.data;
});

export const getData = createAsyncThunk<Data, void>("fetch/data", async () => {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
});

export const getCategories = createAsyncThunk<Category[], void>("fetch/category", async () => {
    const response = await axios.get(`${API_URL}/category`);
    return response.data;
});

export const getProducts = createAsyncThunk<Product[], { page: number; limit: number }>(
    "fetch/products",
    async ({ page, limit }) => {
        const response = await axios.get(`${API_URL}/products?page=${page}&limit=${limit}`);
        return response.data;
    }
);

export const getTestimonials = createAsyncThunk<Testimonial[], { page: number; limit: number }>(
    "fetch/testimonials",
    async ({ page, limit }) => {
        const response = await axios.get(`${API_URL}/testimonials?page=${page}&limit=${limit}`);
        return response.data;
    }
);

export const subscribe = createAsyncThunk<SubscribeResponse, string>("fetch/subscribe", async (email) => {
    const response = await axios.post(`${API_URL}/subscribe`, { email });
    return response.data;
});

// Create a slice
const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        header: null as Header | null,
        data: null as Data | null,
        categories: [] as Category[],
        products: [] as Product[],
        testimonials: [] as Testimonial[],
        subscribeMessage: '',
        loading: false,
        error: null as string | null,
    },
    reducers: {
        clearSubscribeMessage(state) {
            state.subscribeMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHeader.pending, (state) => {
                state.loading = true;
            })
            .addCase(getHeader.fulfilled, (state, action) => {
                state.loading = false;
                state.header = action.payload;
            })
            .addCase(getHeader.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch header';
            })
            .addCase(getData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            })
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch categories';
            })
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            })
            .addCase(getTestimonials.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTestimonials.fulfilled, (state, action) => {
                state.loading = false;
                state.testimonials = action.payload;
            })
            .addCase(getTestimonials.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch testimonials';
            })
            .addCase(subscribe.pending, (state) => {
                state.loading = true;
            })
            .addCase(subscribe.fulfilled, (state, action) => {
                state.loading = false;
                state.subscribeMessage = action.payload.message;
            })
            .addCase(subscribe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to subscribe';
            });
    },
});

// Export actions and reducer
export const { clearSubscribeMessage } = fetchSlice.actions;

export default fetchSlice.reducer;