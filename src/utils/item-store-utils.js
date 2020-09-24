/**
 * Servicio para la interacción con el Servidor.
 */
import { Department } from "../model/department";
import { Item } from "../model/item";

export class ItemStoreUtils {
  /**
   * Url base del API JSON.
   * @type {string}
   */
  static baseUrl = "http://localhost:3001";

  /**
   * Obtiene un producto por su identificador.
   * @param id Identificador del producto.
   * @returns {Promise<Response>}
   */
  static getItem = (id): Promise<Item> => {
    return fetch(`${ItemStoreUtils.baseUrl}/items/${id}`).then((response) =>
      response.json()
    );
  };

  /**
   * Obtiene todos los productos de la tienda.
   * @returns {[]}
   */
  static getItems = (): Promise<Item[]> => {
    return fetch(`${ItemStoreUtils.baseUrl}/items`).then((response) =>
      response.json()
    );
  };

  /**
   * Obtiene los departamentos de la tienda.
   * @returns {*[]}
   */
  static getDepartments = (): Promise<Department[]> => {
    return fetch(`${ItemStoreUtils.baseUrl}/departments`).then((response) =>
      response.json()
    );
  };

  /**
   * Agrega un producto a la tienda.
   * @param item Producto.
   * @returns {Promise<Response>}
   */
  static addItem(item): Promise {
    return fetch(`${ItemStoreUtils.baseUrl}/items`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  /**
   * Actualiza un producto en la tienda.
   * @param item Producto.
   * @returns {Promise<Response>}
   */
  static updateItem(item): Promise {
    return fetch(`${ItemStoreUtils.baseUrl}/items/${item.id}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(item),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  /**
   * Elimina un producto en la tienda.
   * @param id Identificador del producto.
   * @returns {Promise<Response>}
   */
  static deleteItem(id): Promise {
    return fetch(`${ItemStoreUtils.baseUrl}/items/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
}
