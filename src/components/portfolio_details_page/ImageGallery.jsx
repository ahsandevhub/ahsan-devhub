/* eslint-disable react/prop-types */
const PhotoCollage = ({ images }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="max-w-full rounded-lg border"
            src={image}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoCollage;
