/* eslint-disable react/prop-types */
import { Input } from "@/components/input";
import { Spinner } from "@/components/spinner";
import { Modal } from "antd";
import { SecondMoadlWrapper } from "../style";
import { useFormContext } from "react-hook-form";

export const CreateFlow = ({
  detail,
  isModal,
  setIsModal,
  createFlowLoading,
  onFlow,
}) => {
  const form = useFormContext();

  return (
    <Modal
      open={isModal}
      onOk={() => console.log("click")}
      onCancel={() => setIsModal(false)}
      footer={null}
      width={700}
    >
      <SecondMoadlWrapper>
        <div className="title">
          <h4>Avtomobil uchun telefon ushlagichi - Borofone</h4>
          <h5>To‘lanadigan summa - {detail?.flow_price} so‘m</h5>
        </div>
        <form className="form" onSubmit={form.handleSubmit(onFlow)}>
          <Input
            control={form.control}
            name={"name"}
            label={"Oqim nomini yozing*"}
          />
          <button className="btn" type="submit">
            Saqlash
          </button>
        </form>
        {createFlowLoading && <Spinner />}
      </SecondMoadlWrapper>
    </Modal>
  );
};
