
# rolodex

Rolodex is a contact management app built using React, Firebase, and TailwindCSS. 

## To use

A live demo can be found at: https://rolodex.angoose.dev/. You can also run it locally. 

## Running Locally

### Requirements
- NodeJS & NPM
- Firebase account

### Steps 
1. Create a Firebase project
2. Create a Firestore collection called `users`
3. Within the aforementioned project, create a new web app and copy the **Firebase SDK Snipet** as `config`. It should look like this:

	```ts
	const firebaseConfig = {
		apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		authDomain: "XXXX-XXXX.firebaseapp.com",
		databaseURL: "https://XXXX-XXXX.firebaseio.com",
		projectId: "XXXX-XXXX",
		storageBucket: "XXXX-XXXX.appspot.com",
		messagingSenderId: "XXXXXXXXXX",
		appId: "X:XXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXX"
	};
	```
  
4. Clone this repository to your local machine:

	```
	git clone https://github.com/Angoooose/rolodex/
	```
  
5. Create a file called `firebase.config.ts` in the `src` directory. Copy the Firebase SDK Snipet from Step 3 into the file and add `export default firebaseConfig;` to the bottom of the file.
6. Execute `npm i` to install the needed packages.
7. Execute `npm start`, the app should then open on http://localhost:3000/.
