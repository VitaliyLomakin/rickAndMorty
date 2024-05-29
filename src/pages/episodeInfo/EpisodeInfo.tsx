import { useParams } from 'react-router-dom';
import { useLoadDataInfo } from '../../ hooks/useLoadDataInfo/useLoadDataInfo';

import { Box } from '@mui/material';
import MainTitle from '../../ui/typography/MainTitle/MainTitle';
import SubTitle from '../../ui/typography/subTitle/SubTitle';
import InformationsTitle from '../../ui/typography/InformationsTitle/InformationsTitle';
import Text from '../../ui/typography/text/Text';
import ErrorBlock from '../../ui/errorBlock/ErrorBlock';
import CardInner from '../../components/cardInner/CardInner';
import Loader from '../../ui/loader/Loader';

import { GET_EPISODE_INFO } from '../../schemas/episodes/query/getEpisodeInfo';

import type { EpisodeInfoType } from '../../types/episodes/episodesType';

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

const EpisodeInfo = () => {
   const { id } = useParams();
   const { data, loading, error, refetch } = useLoadDataInfo<EpisodeInfoType>({
      endpoint: GET_EPISODE_INFO,
      id,
   });
   return (
      <>
         {error ? (
            <ErrorBlock name={error.name} message={error.message} />
         ) : (
            <Box sx={loading ? styleLocationsInfoLoading : styleLocationsInfo}>
               {loading ? (
                  <Loader />
               ) : (
                  <>
                     <Box sx={styleLocationsInfoHeader}>
                        <MainTitle>{data?.episode?.name}</MainTitle>
                        <Box sx={styleLocationsInfoHeaderInner}>
                           <Box>
                              <SubTitle>Episode</SubTitle>
                              <Text>{data?.episode?.episode}</Text>
                           </Box>
                           <Box>
                              <SubTitle>Date</SubTitle>
                              <Text> {data?.episode?.air_date}</Text>
                           </Box>
                        </Box>
                     </Box>
                     <Box sx={styleLocationInfoBody}>
                        <InformationsTitle>Residents</InformationsTitle>
                        <CardInner data={data?.episode?.characters} />
                     </Box>
                  </>
               )}
            </Box>
         )}
      </>
   );
};

export default EpisodeInfo;
