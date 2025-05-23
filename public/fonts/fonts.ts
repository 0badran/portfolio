import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400","700"],
});
export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["700"],
});