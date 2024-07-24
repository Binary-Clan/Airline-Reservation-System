import APIClient from "./api-client";

const apiClient = new APIClient("/user");

export const getUser = async () => {
    return await apiClient.get();
};

export const updateUser = async (userData) => {
    return await apiClient.put('', userData);
};
