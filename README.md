# GuitarLA - Carrito de Compras con useReducer

Este proyecto es una aplicación de tienda de guitarras desarrollada con **React** y **TypeScript**. Permite a los usuarios explorar una colección de instrumentos, gestionar un carrito de compras con persistencia y realizar cálculos de totales en tiempo real.

> **Nota Técnica:** El proyecto fue migrado de un Hook personalizado (`useCart`) a **`useReducer`** para centralizar la lógica de negocio, facilitar el testeo y mejorar la escalabilidad del estado global del carrito.

## 🚀 Características

- **Catálogo Dinámico**: Renderizado de productos desde una base de datos local estructurada.
- **Gestión Avanzada del Carrito**:
  - **Agregar Productos**: Control de duplicados (si el producto existe, aumenta la cantidad).
  - **Límites de Stock**: Restricción de cantidades (Mínimo 1, Máximo 5 unidades por producto).
  - **Eliminación y Limpieza**: Funcionalidad para quitar items específicos o vaciar el carrito por completo.
- **Cálculos Optimizados**: Uso de `useMemo` para el cálculo del total a pagar y estados derivados (como `isEmpty`), evitando renderizados innecesarios.

## 🛠️ Tecnologías y Conceptos Aplicados

- **React 18** (Functional Components, Hooks).
- **TypeScript**: Interfaces, Tipos de Acceso Indexado y _Discriminated Unions_ para las acciones del Reducer.
- **useReducer**: Implementación de un flujo de datos unidireccional y predecible.
- **Bootstrap**: Layout responsivo y componentes de UI.

## 📐 Arquitectura: Del Hook al Reducer

La lógica se centralizó en `reducers/cart-reducer.ts`. Esto permite que componentes como `Header` y `Guitar` se comuniquen a través de un `dispatch` común, manteniendo los componentes más limpios y enfocados en la UI.

### Acciones del Reducer (`CartActions`):

- `add-to-cart`: Recibe un objeto `Guitar` y lo procesa en el estado.
- `remove-from-cart`: Filtra el carrito para eliminar un ID específico.
- `decrease-quantity` / `increase-quantity`: Modifica la propiedad `quantity` con validaciones de límites.
- `clear-cart`: Reinicia el estado del carrito.
