import { Searchbar } from "@/components/searchbar";
import { CustomTable } from "@/components/table";
import { Wrapper } from "@/styles/global";
import { useList } from "./useList";
import { TableWrapper } from "./style";
import { Spinner } from "@/components/spinner";
import { Pagination } from "@/components/pagination";

const Statistics = () => {
  const { data, params, columns, setParams, isFetching } = useList();
  return (
    <Wrapper>
      <Searchbar />
      <TableWrapper>
        <CustomTable columns={columns} data={data} />
      </TableWrapper>
      {isFetching && <Spinner />}
      {data?.length > 0 && (
        <Pagination
          params={params}
          setParams={setParams}
          total={data?.length}
        />
      )}
    </Wrapper>
  );
};

export default Statistics;
