import { Avatar, Button, Image } from "antd";
import { AccountCard, Flex, NavbarContainer, Wrapper } from "./style";
import { ReactComponent as IconLogo } from "assets/logo.svg";
import { ReactComponent as IconInfo } from "@/assets/info.svg";
import { FaUser } from "react-icons/fa";
import { getUser } from "@/utils/user";
import { useQuery } from "@tanstack/react-query";
import { react_query_keys } from "@/constants/react-query-keys";
import { userProfile } from "@/shared/modules/profile";
import { RxHamburgerMenu } from "react-icons/rx";
import PropTypes from "prop-types";
export const Navbar = ({ collapsed, setCollapsed }) => {
  const user = getUser();

  const { data = null } = useQuery({
    queryKey: [react_query_keys.profile_detail + "navbar"],
    queryFn: userProfile,
    select: (res) => {
      return res?.data;
    },
  });

  return (
    <Wrapper>
      <NavbarContainer>
        <Flex>
          <div className="left">
            <IconLogo />
            <Button icon={<IconInfo />}>Dasturdan foydalanish</Button>
          </div>
          <AccountCard>
            <div className="user-wrapper">
              <div className="user-name">
                {data === null ? user?.firstname : data?.firstname}
              </div>
              {data?.photo === null ? (
                <Avatar
                  icon={<FaUser size={20} />}
                  alt="user-avatar"
                  size={40}
                />
              ) : (
                <Image
                  src={data?.photo}
                  alt="user"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                  preview={false}
                />
              )}
            </div>
            <Button
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              <RxHamburgerMenu />
            </Button>
          </AccountCard>
        </Flex>
      </NavbarContainer>
    </Wrapper>
  );
};

Navbar.propTypes = {
  collapsed: PropTypes.boolean,
  setCollapsed: PropTypes.any,
};
