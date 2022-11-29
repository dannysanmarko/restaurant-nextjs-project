type GalleryProductType = {
  images: string
}

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images;

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
          <div  className="product-gallery__thumb">
            <img src={images} alt="" />
          </div>
      </div>

      <div className="product-gallery__image">
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  