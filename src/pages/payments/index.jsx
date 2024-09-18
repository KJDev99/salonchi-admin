import { Title, Wrapper } from "@/styles/global";
import { CardInfo, TableWrapper, VStack } from "./style";
import { Col, Row } from "antd";
import { Input } from "@/components/input";
import { CustomTable } from "@/components/table";
import { useList } from "./useList";
import { Pagination } from "@/components/pagination";
import { Form } from "react-router-dom";
import { Spinner } from "@/components/spinner";
import { useScreen } from "@/hooks/useScreen";

const Payments = () => {
  const {
    form,
    data,
    params,
    count,
    columns,
    onSubmit,
    setParams,
    isFetching,
    saveLoading,
    contextHolder,
    paymentPending,
  } = useList();
  console.log(data)
  const windowSizeX = useScreen();
  return (
    <Wrapper>
      {contextHolder}
      <CardInfo>
        <Title className="flow-title payments-title">Karta ma’lumotlari</Title>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Row gutter={[20, 20]} align="bottom">
            <Col span={24} md={12} lg={windowSizeX > 1330 ? 10 : 12}>
              <Input
                control={form.control}
                type="number"
                name="card_number"
                label="Karta raqami:"
                placeholder="0000 0000 0000 0000"
              />
            </Col>
            <Col span={24} md={12} lg={windowSizeX > 1330 ? 10 : 12}>
              <Input
                control={form.control}
                name="card_name"
                label="Karta egasining ismi va familiyasi:"
                placeholder="Ism Familya"
              />
            </Col>
            <Col span={24} md={12} lg={windowSizeX > 1330 ? 4 : 12}>
              <button type="submit" className="save-btn">
                Saqlash
              </button>
            </Col>
          </Row>
        </Form>
      </CardInfo>
      <CardInfo>
        <Title className="flow-title payments-title">
          Olinishi kerak bo‘lgan summa
        </Title>
        <Row>
          <Col span={24} lg={7}>
            <VStack>
              <p>Oqimlar soni:</p>
              <h4>{paymentPending?.flows_count}</h4>
            </VStack>
          </Col>
          <Col span={24} lg={7}>
            <VStack>
              <p>Yetkazib berilganlar soni:</p>
              <h4>{paymentPending?.orders_count}</h4>
            </VStack>
          </Col>
          <Col span={24} lg={7}>
            <VStack>
              <p>Jami summa:</p>
              <h4>{paymentPending?.total_amount}</h4>
            </VStack>
          </Col>
        </Row>
      </CardInfo>
      <CardInfo>
        <Title className="flow-title payments-title">Tarix</Title>
        <TableWrapper>
          <CustomTable columns={columns} data={data} />
        </TableWrapper>
        {data?.length > 0 && (
          <Pagination
            total={count}
          
            columns={columns}
            params={params}
            setParams={setParams}
          />
        )}
      </CardInfo>
      {saveLoading || (isFetching && <Spinner />)}
    </Wrapper>
  );
};

export default Payments;
