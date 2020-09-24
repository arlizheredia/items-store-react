import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { SET_DEPARTMENTS } from "../../redux/types";
import Button from "@material-ui/core/Button";
import { ItemStoreUtils } from "../../utils/item-store-utils";
import Items from "../Items/Items";
import { ItemUtils } from "../../utils/items-utils";

/**
 * Implementa un componente principal de la Aplicación.
 */
class App extends React.Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    //Obteniendo los departamentos.
    ItemStoreUtils.getDepartments().then((departments) => {
      this.props.dispatch({
        type: SET_DEPARTMENTS,
        departments: departments,
      });
    });

    // Actualizando los productos.
    ItemUtils.setItems(this.props);
  }

  render() {
    return (
      <div>
        <Items items={this.props.items} history={this.props.history} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.history.push("/items/add")}
        >
          Add Item
        </Button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    items: state.items,
  };
})(App);
