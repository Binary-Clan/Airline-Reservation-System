import { useMutation, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import queryClient from "../services/query-client";

const apiClient = new APIClient("/reservations")

export const useGetReservations = () => useQuery({
    queryKey: ["reservations"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h")
})

export const useGetReservation = (id) => useQuery({
    queryKey: ["reservations", id],
    queryFn: () => apiClient.get(id),
})

export const useAddReservation = () => {

    return useMutation({
        mutationFn: (newReservation) => apiClient.post(newReservation),
        onSuccess: () => {
            queryClient.invalidateQueries(["reservations"]);
        }
    });
};

export const useUpdateReservation = () => {
    return useMutation({
        mutationFn: ({ id, updatedReservation }) => apiClient.put(id, updatedReservation),
        onSuccess: () => {
            queryClient.invalidateQueries(["reservations"]);
        }
    });
};

export const useDeleteReservation = () => {
    return useMutation({
        mutationFn: (id) => apiClient.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["reservations"]);
        }
    });
};
