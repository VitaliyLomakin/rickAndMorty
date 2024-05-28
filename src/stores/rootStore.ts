import charactesStore from './charactes-store';
import locationsStore from './locations-store';

class RootStore {
   characters = charactesStore;
   locations = locationsStore;
}

export default RootStore;
