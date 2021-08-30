import { writable } from 'svelte/store'

export const RouteHistory = writable<RouteHistoryInterface>( { prev: null, curr: null } ) 
export const scroll = writable(0)