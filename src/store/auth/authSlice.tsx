import { createSlice } from "@reduxjs/toolkit";

// initalState 타입 정의
interface StateType {
    name: string;
    email: string;
    image: string;
}

// initalState 생성
const initialState: StateType = {
    name: "",
    email: "",
    image: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state: StateType, action) => {
            const { name, email, image } = action.payload; // 구조분해 할당 개념..?
            state.name = name;
            state.email = email;
            state.image = image;
        },
    },
});

const { actions, reducer } = authSlice;

export const { loginSuccess } = actions;

export default reducer;
