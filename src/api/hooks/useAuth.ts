import { api } from '..'

export const useAuth = () => {
    const getAuth = (user: any) =>
        api.post("/auth/login", user)

    return { getAuth }
}

