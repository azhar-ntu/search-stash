import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Collection from "Frontend/generated/com/example/application/models/Collection";

function ToggleFavourite({ collection }: { collection: Collection }) {
  const [filled, setFilled] = useState(collection.favourite ?? false);
  async function handleToggleFavourite() {
    // Perform any asynchronous operations here
    // For example, make an API call to update the favourite status
    // You can use the 'collection' prop to access the necessary data

    // Update the 'filled' state based on the new favourite status
    setFilled(!filled);
  }

  return (
    <div
      onClick={handleToggleFavourite}
      style={{ cursor: "pointer", padding: 6 }}
    >
      {filled ? (
        <StarIcon style={{ color: "gold" }} />
      ) : (
        <StarBorderIcon style={{ color: "gray" }} />
      )}
    </div>
  );
}

export default ToggleFavourite;
