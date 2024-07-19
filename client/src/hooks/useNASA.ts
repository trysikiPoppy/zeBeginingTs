import axios, { type AxiosResponse } from 'axios';
import type { NasaApodResponse, MarsRoverPhoto, MarsRoverManifest } from '../types/NASATypes';

const API_KEY = 'LYbPmyd1S1kPwG8QZaocKNe1HKuHe5yOKmegX8VU';
const NASA_API_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_ROVER_PHOTOS_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
const MARS_ROVER_MANIFEST_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity';

const fetchNasaApod = async (): Promise<NasaApodResponse> => {
  const response: AxiosResponse<NasaApodResponse> = await axios.get(NASA_API_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

const fetchMarsRoverManifest = async (): Promise<MarsRoverManifest> => {
  const response: AxiosResponse<{ photo_manifest: MarsRoverManifest }> = await axios.get(MARS_ROVER_MANIFEST_API_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.photo_manifest;
};

const fetchMarsRoverPhotos = async (sol: number): Promise<MarsRoverPhoto[]> => {
  const response: AxiosResponse<{ photos: MarsRoverPhoto[] }> = await axios.get(MARS_ROVER_PHOTOS_API_URL, {
    params: {
      api_key: API_KEY,
      sol, // Марсианский сол (день)
      page: 1,
      per_page: 20, // лимит по фото
    },
  });
  return response.data.photos;
};

export { fetchNasaApod, fetchMarsRoverManifest, fetchMarsRoverPhotos };
