import React from "react";
import "./UpdateItem.css";
import { Item } from "../../model/item";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ItemStoreUtils } from "../../utils/item-store-utils";
import { connect } from "react-redux";
import { ItemUtils } from "../../utils/items-utils";

/**
 * Implementa un componente para la actualización de un producto.
 */
class UpdateItem extends React.Component {
  /**
   * Constructor.
   * @param props Propiedades.
   */
  constructor(props) {
    super(props);

    // Obteniendo los productos.
    ItemStoreUtils.getItem(this.props.match.params.id).then((item) => {
      this.itemUpdate = item;
      ItemUtils.setCategoriesFromDepartment(
        this.itemUpdate.department,
        this.props
      );
    });
  }

  /**
   * Actualizar un producto.
   * @param e Evento.
   */
  onUpdateItem = (e) => {
    e.preventDefault();

    const item = new Item(
      this.itemUpdate.id,
      e.target.elements.name.value,
      e.target.elements.cost.value,
      e.target.elements.department.value,
      e.target.elements.category.value
    );
    console.log(item);
    ItemStoreUtils.updateItem(item).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return this.itemUpdate ? (
      <div>
        <h1>Update Item</h1>
        <form onSubmit={this.onUpdateItem}>
          <div className="mb-2">
            <FormControl>
              <TextField
                name="name"
                label="Name"
                defaultValue={this.itemUpdate.name}
              />
            </FormControl>
          </div>
          <div className="mb-2">
            <FormControl>
              <TextField
                name="cost"
                label="Cost"
                defaultValue={this.itemUpdate.cost}
              />
            </FormControl>
          </div>
          <div className="mb-2">
            <FormControl>
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                name="department"
                labelId="department-label"
                onChange={(e) => ItemUtils.onDepartmentChange(e, this.props)}
                defaultValue={this.itemUpdate.department}
              >
                {this.props.departments.map((department) => {
                  return (
                    <MenuItem key={department.name} value={department.name}>
                      {department.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="mb-2">
            <FormControl>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                name="category"
                labelId="category-label"
                defaultValue={this.itemUpdate.category}
              >
                {this.props.categories.map((category) => {
                  return (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </div>
    ) : (
      <div>Loading ...</div>
    );
  }
}

export default connect((state) => {
  return {
    departments: state.departments,
    categories: state.categories,
  };
})(UpdateItem);
