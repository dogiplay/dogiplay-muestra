/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { SalonFama } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import SalondelaFama from "./SalondelaFama";
import { Collection } from "@aws-amplify/ui-react";
export default function SalondelaFamaCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.prioridad(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: SalonFama,
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
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Buscar..."
      itemsPerPage={10}
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SalondelaFamaCollection")}
      {...rest}
    >
      {(item, index) => (
        <SalondelaFama
          salonFama={item}
          margin="5px 0 0 3px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SalondelaFama>
      )}
    </Collection>
  );
}
