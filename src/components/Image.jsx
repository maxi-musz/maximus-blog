import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, className, w, h }) => {
    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            path={src}
            className={className}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            alt={alt}
            transformation={[
                {
                    width: w,
                    height: h,
                    cropMode: "maintainAspectRatio", // Ensures aspect ratio is maintained
                },
            ]}
        />
    );
};

export default Image;
