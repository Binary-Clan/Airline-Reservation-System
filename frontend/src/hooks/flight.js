import { useMutation, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import queryClient from "../services/query-client";

const apiClient = new APIClient("/flights")

export const useGetFlights = () => useQuery({
    queryKey: ["flights"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h")
})

export const useGetFlight = (id) => useQuery({
    queryKey: ["flights", id],
    queryFn: () => apiClient.get(id),
})

export const useAddFlight = () => {
    return useMutation({
        mutationFn: (newFlight) => apiClient.post(newFlight),
        onSuccess: () => {
            queryClient.invalidateQueries(["flights"]);
        }
    });
};

export const useUpdateFlight = () => {
    return useMutation({
        mutationFn: ({ id, updatedFlight }) => apiClient.put(id, updatedFlight),
        onSuccess: () => {
            queryClient.invalidateQueries(["flights"]);
        }
    });
};

export const useDeleteFlight = () => {
    return useMutation({
        mutationFn: (id) => apiClient.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["flights"]);
        }
    });
};