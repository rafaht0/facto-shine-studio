import "./PhoneMockup.css";

type PhoneMockupProps = {
  images: string[];
};

export function PhoneMockup({ images }: PhoneMockupProps) {
  return (
    <div className="phone-wrapper">
      <div className="phone">
        <div className="phone-notch" />

        <div className="phone-screen">
          <div className="instagram-header">
            <span>Instagram</span>
          </div>

          <div className="phone-scroll">
            <div className="phone-content">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Post ${index + 1}`}
                  className="instagram-post"
                />
              ))}

              {/* repetição para deixar o scroll contínuo */}
              {images.map((image, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={image}
                  alt=""
                  className="instagram-post"
                />
              ))}
            </div>
          </div>

          <div className="phone-home-indicator" />
        </div>
      </div>
    </div>
  );
}