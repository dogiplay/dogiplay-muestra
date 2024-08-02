/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Partidos } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "./utils";
import { SortDirection } from "@aws-amplify/datastore";
import Partidosfutbol from "./Partidosfutbol";
import { Collection } from "@aws-amplify/ui-react";
export default function PartidosfutbolCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "clave_liga",
    operand: "CLAFUTNAY01",
    operator: "eq",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = { sort: (s) => s.jornada(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Partidos,
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
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="BUSCAR..."
      itemsPerPage={15}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "PartidosfutbolCollection")}
      {...rest}
    >
      {(item, index) => (
        <Partidosfutbol
          partidos={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Partidosfutbol>
      )}
    </Collection>
  );
}
