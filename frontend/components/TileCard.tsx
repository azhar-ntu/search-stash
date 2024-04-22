import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IntegerField } from "@hilla/react-components/IntegerField.js";
import { useState } from "react";
import { Modal, Box } from "@mui/material";
import { Dialog } from "@hilla/react-components/Dialog.js";

export interface MediaCardProps {
  image: string;
  title: string;
  description: string;
  showCounter?: boolean;
  init_quantity?: number;
}

export default function MediaCard({
  image,
  title,
  description,
  init_quantity = 0,
  showCounter = false,
}: MediaCardProps) {
  const [quantity, setQuantity] = useState(init_quantity);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Card sx={{ maxWidth: 200, padding: 0, margin: 2 }}>
        <CardMedia
          component="img"
          height="200"
          sx={{
            height: "100",
            width: "100",
            objectFit: "contain",
            overflow: "hidden",
          }}
          image={image}
          title={title}
          onClick={handleOpen}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {}
        </CardContent>
        {showCounter && (
          <div>
            {quantity <= 5 && quantity > 0 &&
            <div><span className="" {...{ theme: "badge contrast" }}>Low Stock</span></div>}
            {quantity == 0 &&
            <span {...{ theme: "badge error" }}>Out of Stock</span>}
            <CardActions>
              <IntegerField
                label="Quantity"
                min={0}
                value={quantity.toString()}
                stepButtonsVisible
                onChange={(event) => setQuantity(parseInt(event.target.value))}
              />
            </CardActions>
          </div>
        )}
      </Card>
      <Dialog
        opened={open}
        onOpenedChanged={({ detail }) => {
          setOpen(detail.value);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={image}
            alt="Enlarged view"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Dialog>
    </div>
  );
}
