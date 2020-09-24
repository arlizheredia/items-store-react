import { SET_CATEGORIES, SET_ITEMS } from "../redux/types";
import { ItemStoreUtils } from "./item-store-utils";

export class ItemUtils {
  /**
   * Actualiza los productos de la tienda.
   */
  static setItems(props) {
    ItemStoreUtils.getItems().then((items) => {
      props.dispatch({
        type: SET_ITEMS,
        items: items,
      });
    });
  }
  static onDepartmentChange = (e, props) => {
    ItemUtils.setCategoriesFromDepartment(e.target.value, props);
  };

  static setCategoriesFromDepartment(departmentName, props) {
    props.dispatch({
      type: SET_CATEGORIES,
      categories: props.departments.find(
        (department) => department.name === departmentName
      ).categories,
    });
  }
}
