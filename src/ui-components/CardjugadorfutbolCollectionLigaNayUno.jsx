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
import Cardjugadorfutbol from "./Cardjugadorfutbol";
import { Collection } from "@aws-amplify/ui-react";
export default function CardjugadorfutbolCollectionLigaNayUno(props) {
  const miclave = localStorage.getItem('miclave');
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "idtorneo",
    operand: miclave,
    operator: "eq",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = { sort: (s) => s.futgoles(SortDirection.DESCENDING) };
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
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Buscar..."
      itemsPerPage={5}
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "CardjugadorfutbolCollectionLigaNayUno")}
      {...rest}
    >
      {(item, index) => (
        <Cardjugadorfutbol
          jugadores={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Cardjugadorfutbol>
      )}
    </Collection>
  );
}
