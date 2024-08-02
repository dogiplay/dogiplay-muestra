/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { MuilpasPray } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Asociaciones from "./Asociaciones";
import { Collection } from "@aws-amplify/ui-react";
export default function AsociacionesEscuelasAcademiasCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: MuilpasPray,
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
      {...getOverrideProps(
        overrides,
        "AsociacionesEscuelasAcademiasCollection"
      )}
      {...rest}
    >
      {(item, index) => (
        <Asociaciones
          muilpasPray={item}
          margin="15px 0 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Asociaciones>
      )}
    </Collection>
  );
}
