import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient("/flights")

export const useGetFlights = () => useQuery({
    queryKey: ["flights"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h")
})