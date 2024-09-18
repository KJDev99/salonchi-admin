/* eslint-disable react/prop-types */
import { Button, Image, notification } from "antd";
import { Card, CardBody, CardFooter, CardHeader } from "./style";
import { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createFlow, productDetail } from "@/shared/modules/flow";
import { FlowModal } from "./flow-modal";
import { ReactComponent as IconTelegram } from "@/assets/telegram.svg";
import { ReactComponent as IconClipboard } from "@/assets/clipboard.vector.svg";
import { ProductDetail } from "./detail";
import { CreateFlow } from "./create-flow";

export const FlowCard = ({ item }) => {
  const form = useForm();
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [flowModal, setFlowModal] = useState(false);
  const [flowData, setFlowData] = useState(null);

  const {
    data = {
      detail: null,
      media: [],
    },
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["product-detail", item?.id],
    queryFn: () => productDetail(item?.id),
    select: (res) => {
      return {
        detail: res?.data,
        media: res?.data?.media?.map((v) => {
          return {
            original: v?.file,
            thumbnail: v?.file,
          };
        }),
      };
    },
    enabled: isModalOpen ? true : false,
  });

  const { mutate, isLoading: createFlowLoading } = useMutation(
    (data) => createFlow(data),
    {
      onSuccess: (res) => {
        api.success({
          message: "Success",
          description: "Oqim muvaffaqiyatli yaratildi",
        });
        setFlowData(res?.data);
        setIsModal(false);
        setFlowModal(true);
      },
    }
  );

  const onFlow = (data) => {
    const payload = {
      name: data.name,
      product: item?.id,
    };
    mutate(payload);
  };

  const handleTelegramClick = () => {
    const telegramUrl = `tg://msg_url?url=${encodeURIComponent(item?.flow)}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <Card>
      <CardHeader onClick={() => setIsModalOpen(true)}>
        <Image src={item?.photo} alt="product" preview={false} />
      </CardHeader>
      <CardBody>
        <h4>{item?.name_uz}</h4>
        <div className="info">
          <div className="price-list">
            <p>Narxi</p>
            <p>{item?.price}</p>
          </div>
          <div className="price-list">
            <p>Olinadigan summa</p>
            <p>{item?.flow_price === null ? 0 : item?.flow_price}</p>
          </div>
        </div>
      </CardBody>
      {item?.flow === null ? (
        <CardFooter>
          <Button
            onClick={() => setIsModalOpen(true)}
            disabled={!item?.is_flow}
          >
            Oqim yaratish
          </Button>
        </CardFooter>
      ) : (
        <CardFooter className="card-footer">
          <Button
            type="primary"
            shape="round"
            icon={<IconTelegram />}
            onClick={handleTelegramClick}
          />
          <Button
            type="primary"
            shape="round"
            icon={<IconClipboard />}
            onClick={() => setFlowModal(true)}
          />
        </CardFooter>
      )}
      {contextHolder}
      <ProductDetail
        detail={data?.detail}
        images={data?.media}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsModal={setIsModal}
        isLoading={isLoading}
        isFetching={isFetching}
      />
      <FormProvider {...form}>
        <CreateFlow
          detail={data?.detail}
          onFlow={onFlow}
          isModal={isModal}
          setIsModal={setIsModal}
          createFlowLoading={createFlowLoading}
        />
      </FormProvider>
      <FlowModal
        flowModal={flowModal}
        setFlowModal={setFlowModal}
        flowData={flowData}
        flowUrl={item?.flow}
      />
    </Card>
  );
};
