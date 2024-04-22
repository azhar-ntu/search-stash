import { Button } from "@hilla/react-components/Button.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import Vendor from "Frontend/generated/com/example/application/models/Vendor";
import VendorModel from "Frontend/generated/com/example/application/models/VendorModel";
import { VendorEndpoint, VendorService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import { AutoCrud } from "@hilla/react-crud";

function VendorsView() {
  const [dialogOpened, setDialogOpened] = useState(false);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [description, setDescription] = useState("");
  const [selectedVendor, setSelectedVendor] = useState<Vendor[]>([]);

  useEffect(() => {
    VendorEndpoint.findAll().then(setVendors);
  }, []);

  async function addVendor() {
    const saved = await VendorEndpoint.add(name, description, contactInfo);
    if (saved) {
      setVendors([...vendors, saved]);
      setName("");
      setDescription("");
      setContactInfo("");
      setDialogOpened(false);
    }
  }

  return (
    <AutoCrud service={VendorService} model={VendorModel}  style={{ height: '700px', overflow: "auto" }}/>
    // <div className="p-m">
    //   <Dialog
    //     headerTitle="New Vendor"
    //     opened={dialogOpened}
    //     onOpenedChanged={({ detail }) => {
    //       setDialogOpened(detail.value);
    //     }}
    //     footerRenderer={() => (
    //       <>
    //         <Button onClick={() => setDialogOpened(false)}>Cancel</Button>
    //         <Button theme="primary" onClick={addVendor} disabled={(name && description && contactInfo)? false: true} >
    //           Add
    //         </Button>
    //       </>
    //     )}
    //   >
    //     <VerticalLayout
    //       style={{ alignItems: "stretch", width: "18rem", maxWidth: "100%" }}
    //     >
    //       <TextField
    //         value = {name}
    //         onChange={(e) => setName(e.target.value)}
    //         label="Vendor Name"
    //       />
    //       <TextField
    //         value = {description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         label="Description"
    //       />
    //       <TextField
    //         value = {contactInfo}
    //         onChange={(e) => setContactInfo(e.target.value)}
    //         label="Contact Info"
    //       />
    //     </VerticalLayout>
    //   </Dialog>

    //   <Button theme="primary" onClick={() => setDialogOpened(true)}>
    //     Add New Vendor
    //   </Button>
    //   <Grid
    //     style={{height: "700px", overflow: "auto"}}
    //     items={vendors}
    //     selectedItems={selectedVendor}
    //     onActiveItemChanged={(e) => {
    //       const item = e.detail.value;
    //       setSelectedVendor(item ? [item] : []);
    //     }}
    //   >
    //     <GridColumn path="name" />
    //     <GridColumn path="description" />
    //     <GridColumn path="contactInfo" />
    //   </Grid>
    // </div>
  );
}

export default VendorsView;
