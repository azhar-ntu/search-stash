import { Button } from "@hilla/react-components/Button.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { Grid, GridElement } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import Items from "Frontend/generated/com/example/application/models/Items";
import ItemsModel from "Frontend/generated/com/example/application/models/ItemsModel";
import { CollectionEndpoint, ItemEndpoint, ItemService, VendorEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useRef, useState } from "react";
import {
  ContextMenu,
  type ContextMenuElement,
  type ContextMenuRendererContext,
} from "@hilla/react-components/ContextMenu.js";
import { ListBox } from "@hilla/react-components/ListBox.js";
import { Item } from "@hilla/react-components/Item.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { IntegerField } from "@hilla/react-components/IntegerField.js";
import { Checkbox } from "@hilla/react-components/Checkbox.js";
import Collection from "Frontend/generated/com/example/application/models/Collection";
import Vendor from "Frontend/generated/com/example/application/models/Vendor";
import { Select } from "@hilla/react-components/Select.js";
import { AutoCrud, AutoGrid } from "@hilla/react-crud";

function ItemsView() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);

  const [dialogOpened, setDialogOpened] = useState(false);
  const [items, setItems] = useState<Items[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedItems, setSelectedItems] = useState<Items[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string>("");
  const [selectedVendor, setSelectedVendor] = useState<string>("");

  useEffect(() => {
    ItemEndpoint.findAll().then(setItems);
    CollectionEndpoint.findAll().then(setCollections);
    VendorEndpoint.findAll().then(setVendors);
  }, []);

  
  async function addItem() {
    const saved = await ItemEndpoint.add(name, description, selectedCollection, selectedVendor);
    if (saved) {
      setItems([...items, saved]);
      setName("");
      setDescription("");
      setDialogOpened(false);
    }
  }
  
  async function deleteItem(id:number) {
    const deleteItem = await ItemEndpoint.deleteById(id);
  }
  
  const collectionsList = [{label: "", value: ""}];
  if(collections.length > 0){
    for ( const i in collections){
      collectionsList.push({label: collections[i].name ?? "", value: collections[i].name?.toString() ?? ""});
    }
  }
  const vendorList = [{label: "", value: ""}];
  if(vendors.length > 0){
    for ( const i in vendors){
      vendorList.push({label: vendors[i].name ?? "", value: vendors[i].name?.toString() ?? ""});
    }
  }

  return (
    <div className="p-m">
      <Dialog
        headerTitle="New Item"
        opened={dialogOpened}
        onOpenedChanged={({ detail }) => {
          setDialogOpened(detail.value);
        }}
        footerRenderer={() => (
          <>
            <Button onClick={() => setDialogOpened(false)}>Cancel</Button>
            <Button
              theme="primary"
              onClick={addItem}
              disabled={name && description ? false : true}
            >
              Add
            </Button>
          </>
        )}
      >
        <VerticalLayout
          style={{ alignItems: "stretch", width: "18rem", maxWidth: "100%" }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Item Name"
          />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
          />
          <TextField
            label="Collection"
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}

          />
          <TextField
            label="Vendor"
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
          />

        </VerticalLayout>
      </Dialog>

      <Button theme="primary" onClick={() => setDialogOpened(true)}>
        Add New Item
      </Button>
         <AutoCrud service={ItemService} model={ItemsModel} style={{ height: '700px', overflow: "auto" }}/>

        {/* <Grid
          style={{ height: "600px", overflow: "auto" }}
          items={items}
          selectedItems={selectedItems}
          onActiveItemChanged={(e) => {
            const item = e.detail.value;
            setSelectedItems(item ? [item] : []);
            console.log(selectedItems);
          }}
        >
          <GridColumn path="name" />
          <GridColumn path="description" />
          <GridColumn path="collection" />
          <GridColumn path="vendor" />
        </Grid> */}
        {/* <FormLayout>
          <TextField
            label="Name"
            value={selectedItems[0]?.name ?? ""}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            value={selectedItems[0]?.description ?? ""}
            onChange={(e) => setDescription(e.target.value)}
          />
          <IntegerField
            label="Quantity"
            min={0}
            value={selectedItems[0]?.quantity.toString() ?? ""}
            stepButtonsVisible
        />
        <Checkbox
              label="Quantifiable"
              checked={selectedItems[0]?.quantifiable ?? false}
            />
        <Button theme="primary error" onClick={deleteItem(selectedItems[0]?.id ?? "")}>
            Delete
          </Button>
        </FormLayout> */}
    </div>
  );
}

export default ItemsView;
