import {
  Checkbox,
  FormControlLabel,
  Stack
} from '@mui/material';
import { useState } from "react";
import { VariantCard } from "./VariantCard";

function VariantComponent({
  product,
  variant: variantDetails,
  mutateMapping,
}) {

  const [busy, setBusy] = useState(false);

  const mappedVariant = product.fdcVariants.find((mapping) => mapping.retailVariantId === variantDetails.id);


  async function addOrToggleVariant() {
    setBusy(true);
    try {
      if (mappedVariant) {
        await mutateMapping({
          url: `/api/products/${product.id}/variant/${mappedVariant.id}/toggleFdcStatus`,
          fetchInit: {
            method: 'POST',
          },
          variantId: mappedVariant.id
        });
      } else {
        await mutateMapping({
          url: `/api/products/${product.id}/variant`,
          fetchInit: {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              retailVariantId: variantDetails.id,
              enabled: true,
            })
          }});
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <Stack spacing="12px" flexGrow={1} direction="row" justifyContent="space-between">
      <div style={{ flexGrow: 1 }}>
        <VariantCard variant={variantDetails} index={0} />
      </div>
      <FormControlLabel
        style={{ pointerEvents: "none" }}
        control={
          <Checkbox
            style={{
              width: '50px',
              pointerEvents: 'auto'
            }}
            checked={!!mappedVariant?.enabled}
            disabled={busy}
            onClick={(event) => {
              addOrToggleVariant();
              event.stopPropagation();
            }}
          />
        }
        label={'Enable for FDC'}
        labelPlacement="start"
      />
    </Stack>
  );
}

export { VariantComponent };
