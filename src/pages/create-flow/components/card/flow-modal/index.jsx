/* eslint-disable react/prop-types */
import { Modal, notification } from "antd";
import { Wrapper } from "./style";
import { ReactComponent as IconClipboard } from "@/assets/clipboard.svg";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { react_query_keys } from "@/constants/react-query-keys";

export const FlowModal = ({ flowModal, setFlowModal, flowData, flowUrl }) => {
  const queryClient = useQueryClient();
  const [api, contextHolder] = notification.useNotification();

  const handleCopyUrl = async () => {
    const urlToCopy = flowData?.url;
    try {
      await navigator.clipboard.writeText(urlToCopy);
      queryClient.invalidateQueries({
        queryKey: [react_query_keys.product_flow_list],
      });
      api.success({
        message: "Success",
        description: "Havola muvaffaqiyatli nusxalandi",
      });
      setFlowModal(false);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Modal
      open={flowModal}
      onCancel={() => setFlowModal(false)}
      footer={null}
      width={700}
      title="Oqim yaratildi"
    >
      <Wrapper>
        <div className="title">
          <Link
            to={flowData?.url === undefined ? flowUrl : flowData?.url}
            target="_blank"
          >
            <h4>{flowData?.url === undefined ? flowUrl : flowData?.url}</h4>
          </Link>
          <h5>
            Yuqorida sizga ajratilgan maxsus havola orqali kirib, so‘rov
            qoldirgan xaridorlar uchun daromad qilishingiz mumkin
          </h5>
        </div>

        <button className="btn" onClick={handleCopyUrl}>
          Nusxa olish <IconClipboard />
        </button>
      </Wrapper>
      {contextHolder}
    </Modal>
  );
};
