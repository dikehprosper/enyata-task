
import { axiosAuth } from "../config/axios";
import { useQuery } from "@tanstack/react-query";


const getFilms = () => axiosAuth().get("/films");
const getFilm = (id) => axiosAuth().get(`/films/${id}`);

const getPeople = () => axiosAuth().get("/people");
const getPerson = (id) => axiosAuth().get(`/people/${id}`);

const getStarships = () => axiosAuth().get("/starships");
const getStarship = (id) => axiosAuth().get(`/starships/${id}`);

const getSpecies = () => axiosAuth().get("/species");
const getSpecie = (id) => axiosAuth().get(`/species/${id}`);


export const useGetSWFilms = () =>
    useQuery({ queryKey: ["films"], queryFn: getFilms });

export const useGetSWFilm = (id) =>
    useQuery({ queryKey: ["film", id], queryFn: () => getFilm(id), enabled: !!id });

export const useGetSWPeople = () =>
    useQuery({ queryKey: ["people"], queryFn: getPeople });

export const useGetSWPerson = (id) =>
    useQuery({ queryKey: ["person", id], queryFn: () => getPerson(id), enabled: !!id });

export const useGetSWStarships = () =>
    useQuery({ queryKey: ["starships"], queryFn: getStarships });

export const useGetSWStarship = (id) =>
    useQuery({ queryKey: ["starship", id], queryFn: () => getStarship(id), enabled: !!id });

export const useGetSWSpecies = () =>
    useQuery({ queryKey: ["species"], queryFn: getSpecies });

export const useGetSWSpecie = (id) =>
    useQuery({ queryKey: ["specie", id], queryFn: () => getSpecie(id), enabled: !!id });
