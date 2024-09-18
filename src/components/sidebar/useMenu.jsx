import { ReactComponent as IconStatistics } from "@/assets/statistics.svg";
import { ReactComponent as IconFlow } from "@/assets/flow.svg";
import { ReactComponent as IconFlow2 } from "@/assets/flow2.svg";
import { ReactComponent as IconPayments } from "@/assets/payments.svg";
import { ReactComponent as IconSettings } from "@/assets/settings.svg";
import { ReactComponent as IconLogout } from "@/assets/logout2.svg";

export const useMenu = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const sellerItems = [
    getItem("Statistikalar", "admin/statistics", <IconStatistics />),
    getItem("Oqim yaratish", "admin/create-flow", <IconFlow />),
    getItem("Oqimlar", "admin/flow", <IconFlow2 />),
    getItem("To'lovlar", "admin/payments", <IconPayments />),
    getItem("Sozlamalar", "admin/settings", <IconSettings />),
    getItem("Chiqish", "logout", <IconLogout />),
  ];

  return {
    items: sellerItems,
  };
};
