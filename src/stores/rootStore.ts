import charactesStore from './charactes-store';
import locationsStore from './locations-store';
import episodesStore from './episodes-store';

class RootStore {
   characters = charactesStore;
   locations = locationsStore;
   episodes = episodesStore;
}

export default RootStore;
