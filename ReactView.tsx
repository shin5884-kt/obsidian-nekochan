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

    const handleClick = async () => {
        setLoading(true);
        const newImage = await fetchNekoImage();
        setImageUrl(newImage.url);
        setLoading(false);
    }

    return <div>
            <button onClick={handleClick}>I need more nekochan</button>
            <div>{loading || <img src={imageUrl}/>}</div>
        </div>
}

type Image = {
    url: string;
};
const fetchNekoImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    return images[0];
};