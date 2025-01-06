// Import React Magic
import { useLocation } from 'react-router-dom';

// Import Json File
import LinksData from '../assets/Json/Links.json';

const useLoadMetaData = () => {

  // Get Route Location
  const location = useLocation();

  // Find the page data that matches the current URL path
  const currentPage = LinksData.find(link => location.pathname.includes(link.url));

  if (currentPage && currentPage.meta) {
    return currentPage.meta;  // Return the metadata for the current page
  }

  // Fallback metadata for the homepage or a generic page
  return {
    title: "Melissa Longenberger's Portfolio",
    description: "",
    keywords: "",
    ogTitle: "Melissa Longenberger's Portfolio",
    ogDescription: "Melissa Longenberger's Portfolio",
    ogImage: "./src/assets/images/",
    ogUrl: "",
  };
};

export default useLoadMetaData;