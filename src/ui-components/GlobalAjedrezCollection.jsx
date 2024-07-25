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
import { SortDirection } from "@aws-amplify/datastore";
import GlobalAjedrez from "./GlobalAjedrez";
import { Collection } from "@aws-amplify/ui-react";
export default function GlobalAjedrezCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "deporte",
    operand: "ajedrez",
    operator: "eq",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = {
    sort: (s) => s.ajedrezelo(SortDirection.DESCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Jugadores,
    criteria: itemsFilter,
    pagination: itemsPagination,
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
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Buscar..."
      itemsPerPage={10}
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "GlobalAjedrezCollection")}
      {...rest}
    >
      {(item, index) => (
        <GlobalAjedrez
          jugadores={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></GlobalAjedrez>
      )}
    </Collection>
  );
}
