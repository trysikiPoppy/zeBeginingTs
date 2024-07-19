export type NasaApodResponse = {
  date: string;
  explanation: string;
  title: string;
  url: string;
};

export type MarsRoverPhoto = {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
};

export type MarsRoverManifest = {
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  photos: Array<{
    sol: number;
    total_photos: number;
    cameras: string[];
  }>;
};
