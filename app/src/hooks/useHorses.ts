import { useQuery } from "@tanstack/react-query";

type Horse = {
  id: string;
  name: string;
  profile: {
    favouriteFood: string;
    physical: {
      height: number;
      weight: number;
    };
  };
};

export const useHorses = () =>
  useQuery<Horse[], Error>({
    queryKey: ["horses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3016/horse");
      if (!res.ok) throw new Error("Failed to fetch horses");
      return res.json();
    },
  });
