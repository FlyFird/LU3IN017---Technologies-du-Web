import React from 'react';

const ImagePreview = ({ images, submitted }) => {


  return (
    <div>
      {submitted ? (
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={`uploaded-${index}`}
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          ))}
        </div>
      ) : (
        
        <ul>
          {images.map((img, index) => (
            <li key={index}>{img.file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImagePreview;
