/* eslint-disable react/prop-types */
import { Title } from "@/styles/global";
import { FilterWrapper, HStack } from "./style";

export const Filter = ({ categories, setCategories, setCategory_id }) => {
  console.log(categories, "categories");

  const handleFilter = (category_id) => {
    setCategory_id(category_id);
    setCategories((prev) =>
      prev?.map((t) => ({ ...t, active: t?.id === category_id }))
    );
  };

  return (
    <FilterWrapper>
      <Title className="filter-title">Bo‘limlar:</Title>
      <HStack>
        {categories?.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => handleFilter(item?.id)}
              className={item?.active ? "active" : ""}
            >
              {item?.name_uz}
            </button>
          );
        })}
      </HStack>
    </FilterWrapper>
  );
};
