// src/store/store.d.ts

declare module '@/store/store' {
  interface DataRoute {
    durationInMinutes: number | null;
    distanceInMeters: number | null;
  }

  export const store: {
    dataRoute: DataRoute;
  };
}
