import React from "react";
import "./Items.css";
import List from "@material-ui/core/List";
import { connect } from "react-redux";
import Item from "../Item/Item";

/**
 * Implementa un componente para la visualización de productos.
 */
class Items extends React.Component {
  /**
   * Constructor.
   * @param props Propiedades
   */
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.items.length > 0 ? (
      <div>
        <h1>Items</h1>
        <div className="items">
          <List>
            {this.props.items.map((item) => {
              return (
                <Item key={item.id} item={item} history={this.props.history} />
              );
            })}
          </List>
        </div>
      </div>
    ) : (
      <div className="mb-2">No items in Store.</div>
    );
  }
}

export default connect()(Items);
