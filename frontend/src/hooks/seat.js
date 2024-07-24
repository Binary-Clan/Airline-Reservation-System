
import { useMutation, useQuery } from "@tanstack/react-query";
import queryClient from "../services/query-client"; // Adjust path as needed
import ms from "ms";
import APIClient from "../services/api-client";

const seatApiClient = new APIClient("/seat")


export const useGetSeats = () => useQuery({
    queryKey: ["seats"],
    queryFn: seatApiClient.getAll,
    staleTime: ms("24h"),
});

export const useGetSeat = (id) => useQuery({
    queryKey: ["seats", id],
    queryFn: () => seatApiClient.get(id),
});

export const useAddSeat = () => {
    return useMutation({
        mutationFn: (newSeat) => seatApiClient.post(newSeat),
        onSuccess: () => {
            queryClient.invalidateQueries(["seats"]);
        },
    });
};

export const useUpdateSeat = () => {
    return useMutation({
        mutationFn: ({ id, updatedSeat }) => seatApiClient.put(id, updatedSeat),
        onSuccess: () => {
            queryClient.invalidateQueries(["seats"]);
        },
    });
};

export const useDeleteSeat = () => {
    return useMutation({
        mutationFn: (id) => seatApiClient.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["seats"]);
        },
    });
};
