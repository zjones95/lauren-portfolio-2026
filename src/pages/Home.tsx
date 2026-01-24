import "../App.css";
import { IMAGES } from "../constants";
import ImageGallery from "../components/ImageGallery";

function Home() {
  return <ImageGallery images={IMAGES} />;
}

export default Home;
