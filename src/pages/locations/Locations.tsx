import Banner from '../../ui/banner/Banner';
import LocationsPosts from '../../modules/posts/locationsPosts/LocationsPosts';
import LocationsFilters from '../../modules/filters/locationsFilters/LocationsFilters';

const styleBanner = {
   maxWidth: '326px',
   heingth: '202px',
};

const Locations = () => {
   return (
      <>
         <Banner
            src="/image/locations.png"
            alt="rick and morty of portal"
            style={styleBanner}
         />
         <LocationsFilters />
         <LocationsPosts />
      </>
   );
};

export default Locations;
