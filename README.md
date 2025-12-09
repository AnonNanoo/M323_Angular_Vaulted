# **Finance App – Angular Frontend**

A practice project developed within **Module 323** at the **Berufs- und Weiterbildungszentrum Rapperswil-Jona**.
The goal of this project is to create a functional Angular frontend for the fictional **Bank of Rapperswil**, integrating with a Node.js backend API and applying principles of functional programming.

---

## **📌 Project Overview**

The Bank of Rapperswil plans to launch a new finance portal that allows users to perform money transfers between accounts.
The backend (Node.js API) is provided, and your task is to build the **Angular-based frontend**.

Each learner develops their **own individual solution**, even while working in learning groups.

---

## **🚀 Features & Requirements**

### **Release 1.0 – User Management**

#### **Login**

* Username and password must be longer than 3 characters.
* Login uses the JWT token delivered by the backend.
* JWT token must be stored in Local Storage (including first and last name).
* After login, the user is redirected to the dashboard.

#### **Registration**

* Registration requires first name, last name, username, and password.
* Password confirmation must match the password.
* All inputs must be longer than 3 characters.
* After successful registration, the user is redirected to the dashboard.

#### **Logout**

* Logout removes the JWT token from Local Storage.
* User is redirected to the login page.

---

### **Release 2.0 – Transaction Management / Dashboard**

#### **Triggering Transactions**

* Users can create new payments on the dashboard.
* Valid recipients are displayed below the account number input.
* Only amounts ≥ 0.05 CHF may be transferred.
* Successful transfers must display a confirmation message.

#### **Transaction Overview**

* Past transactions appear on the right side of the dashboard.
* New transactions appear automatically in the list.
* If the list contains more than 10 transactions, paging (< >) must be available.

---

## **UI Framework – Spartan UI**

This project uses **Spartan UI** to simplify styling and provide a modern, consistent interface.
Spartan UI’s Angular-native components help structure the layout and improve usability without adding heavy dependencies.

You can learn more here:
[https://spartan.ng](https://spartan.ng)

---

## **✨ Optional Extended Features**

If you finish early, you may add the following:

* Integrate a UI library (Bootstrap, Angular Material, Semantic UI, etc.).
* Improve UI following web usability standards.
* Implement responsive design using Angular and (S)CSS.
* Use **Reactive Forms** instead of template-driven forms.

  * Implement validators for:

    * Password confirmation
    * Bank account number
* Create an additional component listing all transactions with filters (e.g., by year/month).

---

## **🔌 External APIs**

The following services are available via the backend API (Swagger documentation included):

### **Authentication Service**

* Register a new user
* Login to receive a JWT token

### **Account Service**

* Get information about the current account
* Look up other accounts

### **Transaction Service**

* Perform transfers
* Retrieve past transactions

---

## **🧰 Browser Support**

The web app must support the following browsers (or newer):

| Browser         | Version |
| --------------- | ------- |
| Google Chrome   | 130+    |
| Microsoft Edge  | 126+    |
| Mozilla Firefox | 133+    |
| Opera           | 115+    |

**Optional:**

* Safari 18+

---

## **🗃️ Local Storage Usage**

The following will be stored in the browser’s Local Storage:

* JWT token
* First and last name of the authenticated user

Documentation:
[https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## **▶️ Start the Project**

```bash
# install dependencies
npm install

# run the Angular development server
ng serve
```

The backend must also be running for API communication.

---

## **📬 Author**

Project based on the specification by
**Silvan Gehrig, 13.11.2025 – BWZ Rapperswil-Jona**

---
