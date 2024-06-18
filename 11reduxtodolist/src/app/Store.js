import { configureStore } from '@reduxjs/toolkit'
import {deefault} from "../features/todo/TodoSlice"

export const Store = configureStore({
    reducer: deefault
})
