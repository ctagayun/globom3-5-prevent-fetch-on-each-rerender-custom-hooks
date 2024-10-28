//import { useNavigate } from "react-router-dom";
//import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//import axios, { AxiosError, AxiosResponse } from "axios";
//import Problem from "../types/problem";

import { useEffect, useState } from "react";
import config from "../config";
import { House } from "./../types/house";

//This is a custom hook. Basically a custom hook is a function
//that can use other hooks such as useSt
const useFetchHouses = (): House[] => {

    const [houses, setHouses] = useState<House[]>([]);

    //the first parameter is a function. The second parameter
    //is a dependency array. If the dependency array changes, the 
    //the function will fire.
    //Since the dependency array is empty the function will only 
    //fire when the component is first rendered
    useEffect(() => { //this is the start of first parameter a function
      const fetchHouses = async () => { 
        const rsp = await fetch(`${config.baseApiUrl}/houses`);
        const houses = await rsp.json();  //deserialize to JSON
        setHouses(houses); //set the state after which the component will be re-rendered
        };
        fetchHouses();
      }, //eof function
      []   //this is the second parameter the "dependency array"
    ) //eof useEffect

    return houses;
  }; //eof useFetchHouses



// const useFetchHouses = () => {
//   return useQuery<House[], AxiosError>({
//     queryKey: ["houses"],
//     queryFn: () =>
//       axios.get(`${config.baseApiUrl}/houses`).then((resp) => resp.data),
//   });
// };

// const useFetchHouse = (id: number) => {
//   return useQuery<House, AxiosError>({
//     queryKey: ["houses", id],
//     queryFn: () =>
//       axios.get(`${config.baseApiUrl}/house/${id}`).then((resp) => resp.data),
//   });
// };

// const useAddHouse = () => {
//   const queryClient = useQueryClient();
//   const nav = useNavigate();
//   return useMutation<AxiosResponse, AxiosError<Problem>, House>({
//     mutationFn: (h) => axios.post(`${config.baseApiUrl}/houses`, h),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["houses"] });
//       nav("/");
//     },
//   });
// };

// const useUpdateHouse = () => {
//   const queryClient = useQueryClient();
//   const nav = useNavigate();
//   return useMutation<AxiosResponse, AxiosError<Problem>, House>({
//     mutationFn: (h) => axios.put(`${config.baseApiUrl}/houses`, h),
//     onSuccess: (_, house) => {
//       queryClient.invalidateQueries({ queryKey: ["houses"] });
//       nav(`/house/${house.id}`);
//     },
//   });
// };

// const useDeleteHouse = () => {
//   const queryClient = useQueryClient();
//   const nav = useNavigate();
//   return useMutation<AxiosResponse, AxiosError, House>({
//     mutationFn: (h) => axios.delete(`${config.baseApiUrl}/houses/${h.id}`),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["houses"] });
//       nav("/");
//     },
//   });
// };

export default useFetchHouses;
//export {
 //  useFetchHouses,
 // useFetchHouse,
  //useAddHouse,
 // useUpdateHouse,
 // useDeleteHouse,
//};
