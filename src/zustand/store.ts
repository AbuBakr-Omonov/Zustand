import { create } from 'zustand' 
 
type Store = { 
  token: string | null 
  setToken: (paylod: string) => void 
} 
 
export const useStore = create<Store>()((set) => ({ 
  token: localStorage.getItem("token") || null, 
  setToken: (payload) => { 
    localStorage.setItem("token", payload); 
    return set(() => ({ token: payload })) 
  } 
}))
