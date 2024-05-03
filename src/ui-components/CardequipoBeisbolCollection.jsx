/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equipos } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Cardequipo from "./Cardequipo";
import { Collection } from "@aws-amplify/ui-react";
export default function CardequipoBeisbolCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.puntos(SortDirection.DESCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Equipos,
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
      searchPlaceholder="Buscar equipo ..."
      itemsPerPage={4}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "CardequipoBeisbolCollection")}
      {...rest}
    >
      {(item, index) => (
        <Cardequipo
          equipos={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Cardequipo>
      )}
    </Collection>
  );
}
