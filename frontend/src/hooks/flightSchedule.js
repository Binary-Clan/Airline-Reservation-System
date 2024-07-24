
import { useMutation, useQuery } from "@tanstack/react-query";
import queryClient from "../services/query-client"; // Adjust path as needed
import ms from "ms";
import APIClient from "../services/api-client";

const flightScheduleApiClient = new APIClient("/flightSchedule")


export const useGetFlightSchedules = () => useQuery({
    queryKey: ["flightSchedules"],
    queryFn: flightScheduleApiClient.getAll,
    staleTime: ms("24h"),
});

export const useGetFlightSchedule = (id) => useQuery({
    queryKey: ["flightSchedules", id],
    queryFn: () => flightScheduleApiClient.get(id),
});

export const useAddFlightSchedule = () => {
    return useMutation({
        mutationFn: (newFlightSchedule) => flightScheduleApiClient.post(newFlightSchedule),
        onSuccess: () => {
            queryClient.invalidateQueries(["flightSchedules"]);
        },
    });
};

export const useUpdateFlightSchedule = () => {
    return useMutation({
        mutationFn: ({ id, updatedFlightSchedule }) => flightScheduleApiClient.put(id, updatedFlightSchedule),
        onSuccess: () => {
            queryClient.invalidateQueries(["flightSchedules"]);
        },
    });
};

export const useDeleteFlightSchedule = () => {
    return useMutation({
        mutationFn: (id) => flightScheduleApiClient.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["flightSchedules"]);
        },
    });
};
