import { useEffect, useState } from "react";

export const ReactView = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNekoImage().then((newImage) => {
            setImageUrl(newImage.url);
            setLoading(false);
        });
    }, []);

    return <div>{loading || <img src={imageUrl}/>}</div>;
}

type Image = {
    url: string;
};
const fetchNekoImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    return images[0];
};