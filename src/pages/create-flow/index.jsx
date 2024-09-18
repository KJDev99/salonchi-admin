import { Searchbar } from "@/components/searchbar";
import { Title, Wrapper } from "@/styles/global";
import { Filter } from "./components/filter";
import { FlowCard } from "./components/card";
import { Col, Row } from "antd";
import { Pagination } from "@/components/pagination";
import { useList } from "./useList";
import { Spinner } from "@/components/spinner";

const CreateFlow = () => {
  const {
    count,
    params,
    products,
    setParams,
    isFetching,
    categories,
    setCategories,
    setCategory_id,
  } = useList();
  return (
    <Wrapper>
      <Searchbar placeholder="Qidirish" />
      <Filter
        categories={categories}
        setCategories={setCategories}
        setCategory_id={setCategory_id}
      />
      <Title className="flow-title">Tegishli mahsulotlar:</Title>
      <Row gutter={[17, 17]}>
        {products?.map((item) => {
          return (
            <Col
              key={item?.id}
              span={24}
              lg={12}
              xl={6}
              xxl={6}
              md={12}
              sm={12}
            >
              <FlowCard item={item} />
            </Col>
          );
        })}
      </Row>
      {products?.length > 0 && (
        <Pagination total={count} params={params} setParams={setParams} />
      )}
      {isFetching && <Spinner />}
    </Wrapper>
  );
};

export default CreateFlow;
