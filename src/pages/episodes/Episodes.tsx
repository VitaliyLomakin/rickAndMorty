import { CSSProperties } from 'react';
import Banner from '../../ui/banner/Banner';
import EpisodesPosts from '../../modules/posts/episodesPosts/EpisodesPosts';
import EpisodesFilters from '../../modules/filters/episodesFilters/EpisodesFilters';

const styleBanner: CSSProperties = {
   maxWidth: '269px',
};

const Episodes = () => {
   return (
      <>
         <Banner src="/image/episode.png" alt="episode" style={styleBanner} />
         <EpisodesFilters />
         <EpisodesPosts />
      </>
   );
};

export default Episodes;
