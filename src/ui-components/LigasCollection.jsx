/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Ligas } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Cardliga from "./Cardliga";
import { Collection } from "@aws-amplify/ui-react";
export default function LigasCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Ligas,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "LigasCollection")}
      {...rest}
    >
      {(item, index) => (
        <Cardliga
          ligas={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Cardliga>
      )}
    </Collection>
  );
}
