import { useMutation, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import queryClient from "../services/query-client";

const apiClient = new APIClient("/admins");

export const useGetAdmins = () => useQuery({
    queryKey: ["admins"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h")
});

export const useGetAdmin = (id) => useQuery({
    queryKey: ["admins", id],
    queryFn: () => apiClient.get(id),
});

export const useAddAdmin = () => {
    return useMutation({
        mutationFn: (newAdmin) => apiClient.post(newAdmin),
        onSuccess: () => {
            queryClient.invalidateQueries(["admins"]);
        }
    });
};

export const useUpdateAdmin = () => {
    return useMutation({
        mutationFn: ({ id, updatedAdmin }) => apiClient.put(id, updatedAdmin),
        onSuccess: () => {
            queryClient.invalidateQueries(["admins"]);
        }
    });
};

export const useDeleteAdmin = () => {
    return useMutation({
        mutationFn: (id) => apiClient.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["admins"]);
        }
    });
};
