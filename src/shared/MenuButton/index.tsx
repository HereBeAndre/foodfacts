import { useState } from "react";
import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface GroupedMenuProps {
  onReplaceIngredient: () => void;
  onReplaceMaterial: () => void;
}

export const GroupedMenu = ({
  onReplaceIngredient,
  onReplaceMaterial,
}: GroupedMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReplaceIngredient = () => {
    onReplaceIngredient();
    handleClose();
  };
  const handleReplaceMaterial = () => {
    onReplaceMaterial();
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "grouped-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span>{`Add Simulation Step >`}</span>
      </Button>
      <Menu
        id="grouped-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleReplaceIngredient}>
          Add Replace Ingredient
        </MenuItem>
        <MenuItem onClick={handleReplaceMaterial}>
          Add Replace Material
        </MenuItem>
      </Menu>
    </div>
  );
};
