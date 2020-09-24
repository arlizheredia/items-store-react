/**
 * Implementa un Producto de la tienda.
 */
export class Item {
  /**
   * Constructor.
   * @param id Identificador.
   * @param name Nombre.
   * @param cost Costo.
   * @param department Departamento.
   * @param category Categoria.
   */
  constructor(id, name, cost, department, category) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.department = department;
    this.category = category;
  }
}
