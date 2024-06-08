import Cookies from "js-cookie";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiFetch = (endpoint: string, options?: RequestInit, customOption?: CustomAPIOptions): Promise<Response> => {
    const token = Cookies.get('token');
    if (token) {
        options = {
            ...options,
            headers: {
                ...options?.headers,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
    }
    const url = `${API_BASE_URL}${endpoint}`;
    
    return fetch(url, options).then(async (res) => {
        if (!res.ok) {
            if(res.status === 401) {
                throw new Error('unauthorized');
            }
            const error: ErrorResponse = await res.json();
            throw new Error(`${customOption?.action ?? 'Action'} failed`, { cause: error });
        }
        return res;
    });
};



export const formatQueryParams = (records: {
    [key: string]: string | number | boolean | undefined | null;
}) => {
    return Object.entries(records)
        .map(([key, value]) => value !== null && value !== undefined ? `${key}=${value}` : '')
        .join('&');
}

export default apiFetch;