# NFSA

### 1. Getting Started
Programs Needed:
 - [NodeJs v12.22.1](https://nodejs.org/en/)
 - [Ganache v2.5.4](https://www.trufflesuite.com/ganache)
 - [MetaMask](https://metamask.io/download)
 - [VisualStudio](https://code.visualstudio.com/download)

Code:

 - [Github Project](https://github.com/Yasir1999/NFSA)


Install all the applications listed above and download a copy of the project from Github or extract using a zipping tool. Afterwards navigate to the projects folder in Visual Studio Code. From there you will open up a new terminal and type in the command `npm install` this will allow the project to be populated with the required libraries. Ensure that Ganache has been opened and is running in a workspace. 

### 2. Initial Run
To begin working with the project, you will need to run the command `npm run start` once the command has been entered a window should pop up with the address bar displaying localhost:3000 (The number 3000 may be different depending on the environment within the business).
Afterwards the site should be up and running. To check that the MetaMask and Smart Contract Implementation is done correctly navigate to either the Payment Page,(`localhost:3000/payment`), the IPFS Upload Page (`localhost:3000/ipfs`) or the Contracts Page (`localhost:3000/contracts`).

These pages will either prompt a login using MetaMask or return an alert saying it isn't setup correctly. 

### 3. Creating Contracts
To create a contract you can find the name of an item from the IPFS page and then go to the contracts page where you can input the name and also the price for that contract. After inputting those details and clicking the submit button then a MetaMask window will popup and then after reviewing the pricing you can click confirm to create the contract. Then you can share the payment address and the cost with the customer. 

### 4. Sending A Payment
From the users perspective you can then go login and head to the profile page. Then you can click on the payment button which will redirect you to the page. After inputting the details and then clicking the submit button a MetaMask window will pop up and after you can confirm the details and successfully send a payment. 

### 5. Retrieving IPFS File
Now after the user has paid the contract the administrator can navigate to the IPFS page where they can retrieve the hash value and link of the desired item. After looking at the table and inputting the ID into the search bar the link will be shown to the administrator, from there you can share that link with the user.
