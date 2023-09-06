import axios, { AxiosRequestConfig } from 'axios';
import { MethodsEnum } from '../../enums/methods.enum';
import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../constants/errorsStatus';
import { getAthorizationToken } from './auth';

export type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionAPI {
    static async call<T, B = unknown>(url: string, method: MethodType, body?: B): Promise<T> {
        const token = await getAthorizationToken();

        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        switch (method) {
            case MethodsEnum.POST:
            case MethodsEnum.PUT:
            case MethodsEnum.PATCH:
                return (await axios[method]<T>(url, body, config)).data;
            case MethodsEnum.GET:
            case MethodsEnum.DELETE:
            default:
                return (await axios[method]<T>(url, config)).data;
        }
    }

    static async connect<T, B = unknown>(url: string, method: MethodType, body?: B): Promise<T> {
        return ConnectionAPI.call<T>(url, method, body).catch((error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                    case 403:
                        throw new Error(ERROR_ACCESS_DANIED);
                    default:
                        throw new Error(ERROR_CONNECTION);
                }
            }
            throw new Error(ERROR_CONNECTION);
        });
    }
}


export const connectionAPIGet = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};

export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};

export const connectionAPIPost = async <T, B = unknown>(url: string, body: B): Promise<T> => {
    return ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
};

export const connectionAPIPut = async <T, B = unknown>(url: string, body: B): Promise<T> => {
    return ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

export const connectionAPIPatch = async <T, B = unknown>(url: string, body: B): Promise<T> => {
    return ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};
