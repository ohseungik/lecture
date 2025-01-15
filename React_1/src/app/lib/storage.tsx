import { MemoPropsArray } from "@/app/types/memo";

export const setItem = (key: string, value: MemoPropsArray) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}