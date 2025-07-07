import { atom } from 'recoil';

export const LocationAtom = atom({
    key: 'LocationAtom',
    default: {
        lat: 37.5665,
        lng: 126.9780
    }
});