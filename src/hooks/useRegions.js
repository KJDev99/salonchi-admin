import { react_query_keys } from "@/constants/react-query-keys";
import { getRegions } from "@/shared/modules/region";
import { useQuery } from "@tanstack/react-query";

export const useRegions = () => {
  const { data: regions = [] } = useQuery({
    queryKey: [react_query_keys.get_region_list],
    queryFn: getRegions,
    select: (res) =>
      res?.data?.map((v) => {
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      }),
  });

  return regions;
};
