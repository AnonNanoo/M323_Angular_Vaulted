import { HttpHeaders, HttpParams } from '@angular/common/http';

export function getOptions(token?: string, hasBody = true, params?: HttpParams) {
    const httpHeaders: Record<string, string> = {};

    if (hasBody) {
        httpHeaders['Content-Type'] = 'application/json';
    }
    if (token) {
        httpHeaders['Authorization'] = `Bearer ${token}`;
    }

    return {
        headers: new HttpHeaders(httpHeaders),
        params,
    };
}

export function getServerUrl(path: string) {
    // @ts-ignore
    if (!import.meta.env.VITE_BACKEND_URL) {
        throw new Error(
            'VITE_BACKEND_URL is not defined. Please define it in the environment file (.env)',
        );
    }
    // @ts-ignore
    return `${import.meta.env.VITE_BACKEND_URL}${path}`;
}
