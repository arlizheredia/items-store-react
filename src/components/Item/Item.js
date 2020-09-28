import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Redeem from "@material-ui/icons/Redeem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ItemStoreUtils } from "../../utils/item-store-utils";
import { connect } from "react-redux";
import { ItemUtils } from "../../utils/items-utils";

/**
 * Implementa un producto.
 */
class Item extends React.Component {
  /**
   * Redirección para actualizar un producto.
   * @param item Producto.
   */
  onUpdate = (item) => {
    this.props.history.push(`/items/update/${item.id}`);
  };

  /**
   * Elimina un producto.
   * @param itemId Identificador de un producto.
   */
  onDelete = (itemId) => {
    ItemStoreUtils.deleteItem(itemId).then(() => {
      ItemUtils.setItems(this.props);
    });
  };

  render() {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Redeem />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.item.name}
          secondary={`$${this.props.item.cost} - (${this.props.item.department}: ${this.props.item.category})`}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => this.onUpdate(this.props.item)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => this.onDelete(this.props.item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default connect()(Item);
