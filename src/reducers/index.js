import { createStore } from "redux";
import { songReducers } from "./songReducer";


export const store = createStore(songReducers)