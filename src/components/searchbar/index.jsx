import { Wrapper } from "./style";
import { ReactComponent as IconSearch } from "@/assets/search.svg";
import PropTypes from "prop-types";

export const Searchbar = ({
  placeholder = "Oqim nomi bo'yicha qidirish",
  ...props
}) => {
  return (
    <Wrapper>
      <IconSearch />
      <input placeholder={placeholder} {...props} />
    </Wrapper>
  );
};

Searchbar.propTypes = {
  placeholder: PropTypes.string,
};
