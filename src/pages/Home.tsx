import "../App.css";
import { IMAGES } from "../constants";
import ImageGallery from "../components/ImageGallery";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../utils";

function Home() {
  const [imageData, setImageData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function getImages() {
      setLoading(true);
      try {
        const { data } = await supabase.from("images").select();
        if (data) {
          console.log({ data });
          setImageData(data);
        }
      } catch (error) {
        if (error instanceof FunctionsHttpError) {
          setError(error.context.json());
        }
      }
      setLoading(false);
    }

    getImages();
  }, []);

  return <ImageGallery images={IMAGES} />;
}

export default Home;
