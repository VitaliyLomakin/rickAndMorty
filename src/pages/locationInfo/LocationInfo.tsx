import { useParams } from 'react-router-dom';
import { useLoadDataInfo } from '../../ hooks/useLoadDataInfo/useLoadDataInfo';

import { Box } from '@mui/material';
import MainTitle from '../../ui/typography/mainTitle/MainTitle';
import SubTitle from '../../ui/typography/subTitle/SubTitle';
import InformationsTitle from '../../ui/typography/InformationsTitle/InformationsTitle';
import Text from '../../ui/typography/text/Text';
import ErrorBlock from '../../ui/errorBlock/ErrorBlock';
import CardInner from '../../components/cardInner/CardInner';
import Loader from '../../ui/loader/Loader';

import { GET_LOCATION_INFO } from '../../schemas/locations/query/getLocationInfo';

import type { LocationInfoType } from '../../types/locations/locationsType';

const styleLocationsInfoLoading = {
   height: ' 100dvh',
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
};

const styleLocationsInfo = {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '42px',
   marginTop: '50px',
   '@media (max-width: 700px)': {
      gap: '32px',
   },
};
const styleLocationsInfoHeader = {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
   alignItems: 'center',
};

const styleLocationsInfoHeaderInner = {
   width: '50%',
   display: 'flex',
   gap: '16px',
   alignItems: 'center',
   justifyContent: 'space-between',
   '@media (max-width: 600px)': {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'start',
   },
};

const styleLocationInfoBody = {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   gap: '20px',
   '@media (max-width: 700px)': {
      gap: '10px',
      flexDirection: 'column',
   },
};

const LocationsInfo = () => {
   const { id } = useParams();
   const { data, loading, error, refetch } = useLoadDataInfo<LocationInfoType>({
      endpoint: GET_LOCATION_INFO,
      id,
   });
   console.log(data);

   return (
      <>
         {error ? (
            <ErrorBlock
               refetch={refetch}
               name={error.name}
               message={error.message}
            />
         ) : (
            <Box sx={loading ? styleLocationsInfoLoading : styleLocationsInfo}>
               {loading ? (
                  <Loader />
               ) : (
                  <>
                     <Box sx={styleLocationsInfoHeader}>
                        <MainTitle>{data?.location?.name}</MainTitle>
                        <Box sx={styleLocationsInfoHeaderInner}>
                           <Box>
                              <SubTitle>Type</SubTitle>
                              <Text>{data?.location?.type}</Text>
                           </Box>
                           <Box>
                              <SubTitle>Dimension</SubTitle>
                              <Text> {data?.location?.dimension}</Text>
                           </Box>
                        </Box>
                     </Box>
                     <Box sx={styleLocationInfoBody}>
                        <InformationsTitle>Residents</InformationsTitle>
                        <CardInner data={data?.location?.residents} />
                     </Box>
                  </>
               )}
            </Box>
         )}
      </>
   );
};

export default LocationsInfo;
