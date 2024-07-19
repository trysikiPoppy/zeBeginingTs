import React, { useEffect, useState } from 'react';
import { fetchNasaApod, fetchMarsRoverManifest, fetchMarsRoverPhotos } from '../../hooks/useNASA';
import type { NasaApodResponse, MarsRoverPhoto } from '../../types/NASATypes';
import './NasaPage.css';

function NasaPage(): React.JSX.Element {
  const [apodData, setApodData] = useState<NasaApodResponse | null>(null);
  const [marsPhotos, setMarsPhotos] = useState<MarsRoverPhoto[] | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const apodResult = await fetchNasaApod();
      setApodData(apodResult);

      const marsRoverManifest = await fetchMarsRoverManifest();
      const currentSol = marsRoverManifest.max_sol;
      const marsRoverPhotosResult = await fetchMarsRoverPhotos(
        
         100
        // currentSol
        // СОЛ, самая важная строка, она отправляет запрос на АПИ НАСА и возвращает фото, сделанные марсоходом на указанном соле на ххх-й день миссии
      ); 

      setMarsPhotos(marsRoverPhotosResult);
    };

    void fetchData();
  }, []);

  return (
    <div className="nasa-page-container">
      {apodData ? (
        <div className="apod-container">
          <h1>{apodData.title}</h1>
          <p>{apodData.date}</p>
          <div className="image-container">
            <img src={apodData.url} alt={apodData.title} className="nasa-image" />
          </div>
          <p>{apodData.explanation}</p>
        </div>
      ) : (
        <p>Loading APOD...</p>
      )}
      {marsPhotos ? (
        <div className="mars-photos-container">
          <h2>Mars Rover Photos</h2>
          <div className="mars-photos-grid">
            {marsPhotos.map((photo) => (
              <div key={photo.id} className="mars-photo">
                <img
                  src={photo.img_src}
                  alt={`Mars Rover - ${photo.camera.full_name}`}
                  className="mars-image"
                />
                <p>{photo.camera.full_name}</p>
                <p>{photo.earth_date}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading Mars Rover Photos...</p>
      )}
    </div>
  );
}

export default NasaPage;
