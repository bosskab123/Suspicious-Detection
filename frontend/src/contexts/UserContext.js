import { createContext } from 'react';

const user = {
    id: null,
    img: null,
    subscription: 'none'
}

export const UserContext = createContext(user);