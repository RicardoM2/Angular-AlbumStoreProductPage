import { Track } from "./track";

export interface Album {
    name: string;
    release:string;
    coverImage:string;
    tracks: Track[];
}
