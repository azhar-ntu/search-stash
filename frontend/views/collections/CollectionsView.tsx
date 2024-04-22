import { Button } from "@hilla/react-components/Button.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { TabSheet } from "@hilla/react-components/TabSheet.js";
import { Select } from "@hilla/react-components/Select.js";
import { Tab } from "@hilla/react-components/Tab.js";

import Collection from "Frontend/generated/com/example/application/models/Collection";
import { CollectionEndpoint, ItemEndpoint } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import Items from "Frontend/generated/com/example/application/models/Items";
import { Grid } from "@hilla/react-components/Grid.js";
import TileCard from "Frontend/components/TileCard";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import ToggleStar from "Frontend/components/ToggleFavourite";
import ToggleFavourite from "Frontend/components/ToggleFavourite";

export default function CollectionsView() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedCollection, setSelectedCollection] = useState<Collection>();
  const [collectionResult, setCollectionResult] = useState<Items[]>([]);

  useEffect(() => {
    CollectionEndpoint.findAll().then(setCollections);
  }, []);

  async function findByCollection(collectionName: string) {
    const result = await ItemEndpoint.getItemsByCollection(collectionName);
    if (result) {
      setCollectionResult(result);
    }
  }

  const responsiveSteps = [
    // Use one column by default
    { minWidth: "0", columns: 1 },
    // Use two columns, if the layout's width exceeds 320px
    { minWidth: "320px", columns: 2 },
    // Use three columns, if the layout's width exceeds 500px
    { minWidth: "500px", columns: 6 },
  ];

  const items = [{label: "No Collections", value: "No Collections"}];
  if(collections.length > 0){
    items.pop();
    for ( const i in collections){
      items.push({label: collections[i].name ?? "", value: collections[i].name?.toString() ?? ""});
    }
  }
  return (
    <div className="p-m">
      <div className="flex gap-s">
        <FormLayout responsiveSteps={responsiveSteps}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /> */}
          {/* <Button theme="primary" onClick={addCollection} disabled={(name && description)? false: true}>
            Add New Collection
          </Button> */}
          <Button theme="primary" onClick={() => findByCollection(name)} disabled={!name}>
            Find Collection
          </Button>
        </FormLayout>
      </div>
      <br />
      {/* {(collectionResult.length > 0) ? <HorizontalLayout><h2>Collection: {name}</h2><ToggleFavourite collection={collection}/></HorizontalLayout>: ""} */}
      <FormLayout responsiveSteps={responsiveSteps}>
      {(collectionResult.length > 0) ? collectionResult.map((item) => (
        <div key={item.id} className="flex row">
            <TileCard
              image={item.imageUrl ?? ""}
              title={item.name ?? ""}
              description={item.description ?? ""}
              init_quantity={item.quantity ?? 0}
              showCounter={true}
            />
        </div>
      ))
      : ("No Collection Found")}
      </FormLayout>

      {/* <Select label="Choose Collection" items={items} value={items[0].value} onValueChanged={() => {setSelectedCollection(items[0])}}/> */}
    </div>
  );
}
