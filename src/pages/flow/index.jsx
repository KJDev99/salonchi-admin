import { Searchbar } from "@/components/searchbar";
import { Image, Modal } from "antd";
import { CustomTable } from "@/components/table";
import { Wrapper } from "@/styles/global";
import { ImageContainer, List, TableWrapper } from "./style";
import { useList } from "./useList";
import { Pagination } from "@/components/pagination";
import { Spinner } from "@/components/spinner";

const Flow = () => {
  const {
    query,
    data,
    detail,
    params,
    columns,
    setQuery,
    setParams,
    isLoading,
    isFetching,
    isModalOpen,
    contextHolder,
    setIsModalOpen,
    detailIsFetching,
  } = useList();

  return (
    <Wrapper>
      <Searchbar
        placeholder="Oqim nomi bo'yicha qidirish"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TableWrapper>
        <CustomTable columns={columns} data={data} />
      </TableWrapper>
      <Pagination
        data={data}
        columns={columns}
        params={params}
        setParams={setParams}
        total={data?.length}
      />
      <Modal
        open={isModalOpen}
        onOk={() => console.log("click")}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <ImageContainer>
          <Image src={detail?.media?.[0]?.file} alt="product" />
        </ImageContainer>
        <List>
          <li>
            <p>Nomi</p>
            <p className="divider" />
            <p>{detail?.name_uz}</p>
          </li>
          <li>
            <p>Narxi</p>
            <p className="divider" />
            <p>{detail?.price} so‘m</p>
          </li>
          <li>
            <p>Tasnifi</p>
            <p className="divider" />
            <p dangerouslySetInnerHTML={{ __html: detail?.desc_uz }} />
          </li>
          <li>
            <p>To‘lanadigan summa</p>
            <p className="divider" />
            <p>{detail?.flow_price} so‘m</p>
          </li>
        </List>
      </Modal>
      {contextHolder}
      {isLoading || isFetching || (detailIsFetching && <Spinner />)}
    </Wrapper>
  );
};

export default Flow;
