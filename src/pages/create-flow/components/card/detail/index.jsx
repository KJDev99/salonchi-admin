/* eslint-disable react/prop-types */
import { Button, Col, Modal, Row } from "antd";
import { ModalWrapper } from "../style";
import { Spinner } from "@/components/spinner";
import { CarouselDetails } from "@/components/carousel";

export const ProductDetail = ({
  detail,
  images,
  isModalOpen,
  setIsModalOpen,
  setIsModal,
  isLoading,
  isFetching,
}) => {
  console.log(detail?.media, "detail");
  return (
    <Modal
      open={isModalOpen}
      onOk={() => console.log("click")}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      width={902}
    >
      {isLoading || (isFetching && <Spinner />)}
      <ModalWrapper>
        <div className="title">
          <h4>{detail?.name_uz} </h4>
          <h4>{detail?.price} so‘m</h4>
        </div>
        <Row gutter={[64, 64]}>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <CarouselDetails images={images} />
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <div className="modalInfo">
              <div className="subtitle">
                <h5>Beriladigan summa:</h5>
                <p>
                  {detail?.flow_price === null ? 0 : detail?.flow_price} so‘m
                </p>
              </div>
              <div className="note">
                <p>
                  Tuman markazidagi qabul qilish punktigacha <br />
                  <span>Yetqazib berish mutlaqo bepul. </span> <br />
                  To`lovni mahsulotni olgandan so`ng amalga oshirasiz.
                </p>
              </div>
              <div className="infos">
                <h4>Mahsulot ma’lumoti:</h4>
                <p dangerouslySetInnerHTML={{ __html: detail?.desc_uz }} />
              </div>

              <Button
                className="btn"
                onClick={() => {
                  setIsModal(true);
                  setIsModalOpen(false);
                }}
                disabled={!detail?.is_flow || detail?.flow}
              >
                Oqim yaratish
              </Button>
            </div>
          </Col>
        </Row>
      </ModalWrapper>
    </Modal>
  );
};
