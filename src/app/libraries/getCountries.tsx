import axios from "axios";
import { Country } from "../types/types";

export async function getCountries(): Promise<Country[]> {
  const { data } = await axios.get<Country[]>("http://localhost:3000/countries");
  return data;
}
