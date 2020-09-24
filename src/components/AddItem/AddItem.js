import React from "react";
import { Item } from "../../model/item";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ItemStoreUtils } from "../../utils/item-store-utils";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { ItemUtils } from "../../utils/items-utils";

/**
 * Implementa un componente para agregar un producto.
 */
class AddItem extends React.Component {
  /**
   * Constructor.
   * @param props Propiedades.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Agregar un producto.
   * @param e Evento.
   */
  onAddItem = (e) => {
    e.preventDefault();

    const newItem = new Item(
      v4(),
      e.target.elements.name.value,
      e.target.elements.cost.value,
      e.target.elements.department.value,
      e.target.elements.category.value
    );

    ItemStoreUtils.addItem(newItem).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <h1>Add Item</h1>
        <form onSubmit={this.onAddItem}>
          <div className="mb-2">
            <FormControl>
              <TextField name="name" label="Name" />
            </FormControl>
          </div>
          <div className="mb-2">
            <FormControl>
              <TextField name="cost" label="Cost" defaultValue="0" />
            </FormControl>
          </div>
          <div className="mb-2">
            <FormControl>
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                name="department"
                labelId="department-label"
                onChange={(e) => ItemUtils.onDepartmentChange(e, this.props)}
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
              <Select name="category" labelId="category-label">
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
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    departments: state.departments,
    categories: state.categories,
  };
})(AddItem);
