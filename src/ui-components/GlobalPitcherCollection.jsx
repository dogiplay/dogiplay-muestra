/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Jugadores } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "./utils";
import Cardpitcher from "./Cardpitcher";
import { Collection } from "@aws-amplify/ui-react";
export default function GlobalPitcherCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "posicion",
    operand: "Pitcher",
    operator: "eq",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Jugadores,
    criteria: itemsFilter,
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
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Buscar..."
      itemsPerPage={10}
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "GlobalPitcherCollection")}
      {...rest}
    >
      {(item, index) => (
        <Cardpitcher
          jugadores={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Cardpitcher>
      )}
    </Collection>
  );
}
