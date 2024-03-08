// src/store/store.ts
import { reactive } from 'vue';

export const store = reactive({
  dataRoute: {
    durationInMinutes: null as number | null,
    distanceInMeters: null as number | null,
  },
});
