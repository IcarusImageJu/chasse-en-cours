import { selectorFamily } from 'recoil';
import { getHuntsFromCoords } from './api';
import type Parse from 'parse/react-native';
import type { Region } from 'react-native-maps';
import type * as Location from 'expo-location';

export const huntListQuery = selectorFamily<
  Parse.Object<Parse.Attributes>[],
  { region: Region; userLocation: Location.LocationObject }
>({
  key: 'HuntListQuery',
  get:
    ({ region, userLocation }) =>
    async () => {
      if (userLocation) {
        const list = await getHuntsFromCoords({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        });

        return list;
      }
      return [];
    },
  cachePolicy_UNSTABLE: { eviction: 'most-recent' },
});
