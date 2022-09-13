import axios from "axios";

export const fetchClient = () => {
    const new_instance = axios.create({
        baseURL: "https://ltw-cms-stg.herokuapp.com",
        headers: {
            "Content-Type": "application/json",
        },
    });

    new_instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem("token");
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
    });
    return new_instance;
};

export default class API {
    login(data) {
        return fetchClient().post('/auth/local/', data);
    }

    getActivity(param) {
        return fetchClient().get(`frontend/activities/slug/${param}`);
    }
}