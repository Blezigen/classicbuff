import React from "react";
import { action } from "@storybook/addon-actions";
import FilterCard from "./FilterCard";
import Accordion from "../Accordion/Accordion";
import SearchInput from "../forms/SearchInput/SearchInput";
import FinderContainer from "../../containers/common/filters/Finder/FinderContainer";
import { apiFilterCard } from "../../containers/common/filters/Finder/Finder.stories";

export default {
  title: "Design System/Filter Card",

  parameters: {
    component: FilterCard
  }
};

export const All = () => {
  const [brand, onChangeBrand] = React.useState<{ [key: string]: string }>({});
  const [model, onChangeModel] = React.useState<{ [key: string]: string }>({});

  const clearAll = () => {
    onChangeBrand({});
    onChangeModel({});
  };

  return (
    <div style={{ height: 600 }}>
      <FilterCard onClear={clearAll} onClose={action("onClose")}>
        <Accordion title="Дата создания">
          <input type="date" />
          <input type="date" />
        </Accordion>
        <Accordion title="Клиент">
          <SearchInput placeholder="Наименование" />
        </Accordion>

        <FinderContainer
          title="Марка"
          onInitData={apiFilterCard.initData}
          onSearch={apiFilterCard.search}
          onChange={onChangeBrand}
          values={brand}
        />
        <FinderContainer
          title="Модель"
          onInitData={apiFilterCard.initData}
          onSearch={apiFilterCard.search}
          onChange={onChangeModel}
          values={model}
        />
      </FilterCard>
    </div>
  );
};
