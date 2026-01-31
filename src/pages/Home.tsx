import "../App.css";
import { IMAGES } from "../constants";
import ImageGallery from "../components/ImageGallery";
import { useEffect, useState } from "react";
import { supabase } from "../utils";

function Home() {
  // const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  console.log({loading, error})

  useEffect(() => {
    async function getImages() {
      setLoading(true);
      const { data, error } = await supabase.from("images").select();
      
      if (data) {
        // setImageData(data);
      }

      if(error) {
        setError(error.message)
      }
      setLoading(false);
    }

    getImages();
  }, []);

  return <ImageGallery images={IMAGES} />;
}

export default Home;
