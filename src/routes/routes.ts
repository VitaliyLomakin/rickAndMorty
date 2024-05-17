import Characters from "../pages/characters/Characters";
import Locations from "../pages/locations/Locations";
import Episodes from "../pages/episodes/Episodes";
import NotFound from "../pages/hotFound/NotFound";


export const publickRoutes = [
    {
      path: "/",
      element: Characters,
    },
    
    {
     path: "/locations",
     element: Locations,
   },
   
    {
      path: "/episodes",
      element: Episodes,
    }, 
    {
      path: "*",
      element: NotFound,
    },
  ];
  
  export const headerNavRoutes = [
    {
      path: "/",
      text: "Characters",
    },
    {
     path: "/locations",
     text: "Locations",
   },
    {
      path: "/episodes",
      text: "Episodes",
    },
  ]
  export const arrRoutesisGoBackDisabled = [
    '/', '/locations', '/episodes'
  ] 