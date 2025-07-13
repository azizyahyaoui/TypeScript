# Store’s product management system - Utility types:

## 🎯 **Your Mission: The SmartInventory Utility Quest**

You’re to create a TypeScript module `SmartInventory.ts` that:

1. Represents product data.
2. Simulates admin, client, and system roles.
3. Uses **every utility type** exactly once in a **practical purpose**.
4. Chains types **at least 2 times** (e.g., `Partial<Omit<...>>`).

----------------------------------------------------------------------
## 💼 Project Title:

**SmartInventory.ts**

> A minimal backend simulation of a store’s product management system, featuring all TS utility types in real-life use.

---

## 🧠 Core Concept:

We’ll simulate:

* Inventory creation ✅
* Product updates ✅
* Client-side views ✅
* System logs ✅
* Search/filtering ✅

All while using:

```
Partial, Required, Readonly, Record, Pick, Omit,
Exclude, Extract, NonNullable, Parameters, ReturnType
```

---

## 🏗️ Setup: Base Product

```ts
type Products = {
  readonly productId: string;
  readonly productRefCode: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  inStock: boolean;
  quantities: number;
};
```
----------------------------------------------------------------------

## 🧩 Step-by-Step Breakdown (with riddles 😈)

### 🧱 Step 1 – Base Type Setup

Define your `Products` base type. Already done ✅

> **Now ask yourself:** What fields must be unchangeable? Which ones might be optional for forms?

---

### ✏️ Step 2 – Editable Product

Make a type that simulates a **product form** for updating info in a dashboard.

* Fields like `productName`, `productPrice`, etc. can be optional.
* But `productId` shouldn't be touched.

🧠 **Challenge:** Chain 2 utility types together.

🧩 Hint:

```ts
type EditableProduct = ???
```

---

### 🔒 Step 3 – Archived Products

Create a version of products that **can't be mutated** (as if they were frozen in DB).

🧠 **Challenge:** What if someone tries to reassign fields?

🧩 Hint:

```ts
type ArchivedProduct = ???
```

---

### 🧾 Step 4 – Display Types (Client & Admin)

Create two types:

* One **public view** (name, price, inStock)
* One **internal stock view** (price, stock, quantities, ID)

🧠 **Challenge:** One should use `Pick`, the other `Omit`

---

### 📦 Step 5 – Inventory Catalog

Make a dictionary (`Record`) of all products by product ID.

🧠 **Challenge:** What utility type maps string IDs to the full product type?

---

### ⛔ Step 6 – Discontinued Status Filter

Create two types:

* One excludes `discontinued`
* One includes only `inStock` and `outOfStock`

🧠 **Challenge:** `Exclude` vs `Extract`

---

### ⚠️ Step 7 – Safe Name Extract

Ensure a product name can’t be `null | undefined`.

🧠 **Challenge:** Use `NonNullable` with one product’s field

---

### 🔧 Step 8 – Logger Function Introspection

Write a logging function like:

```ts
function logProductChange(product: Products, userId: string) {
  return `[log] user ${userId} updated ${product.productId}`;
}
```

Then define:

* `type LogParams = ???`
* `type LogResult = ???`

🧠 **Challenge:** use `Parameters` and `ReturnType`

---

## ✅ Final Challenge

Build a fake `updateProduct` function that:

* Accepts an `EditableProduct`
* Returns a `DBProduct` (a version with `Required<T>`)

---

