/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equipos } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "./utils";
import { SortDirection } from "@aws-amplify/datastore";
import Tablabeisbol from "./Tablabeisbol";
import { Collection } from "@aws-amplify/ui-react";
export default function TablabeisbolCollectionPosciones(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "clave_liga",
    operand: "CLABEINAY01",
    operator: "eq",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = { sort: (s) => s.puntos(SortDirection.DESCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Equipos,
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
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={10}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "TablabeisbolCollectionPosciones")}
      {...rest}
    >
      {(item, index) => (
        <Tablabeisbol
          equipos={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Tablabeisbol>
      )}
    </Collection>
  );
}
