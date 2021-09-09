import { writable } from "svelte/store";

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

export const theme = writable(prefersDarkMode.matches ? 'dark': 'light')