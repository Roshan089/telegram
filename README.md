This is a responsive replica of the Telegram messaging application built using ReactJS and Material UI. It displays chats and messages fetched from provided API endpoints.

Features

Side navigation bar with a hamburger menu and search functionality.
List of chats displayed in the sidebar.
Real-time chat and message updates using data from API endpoints.
Utilizes Material UI for styling and components.
Dark theme integration.


Technologies Used
ReactJS: JavaScript library for building user interfaces.
Material UI: React components for faster and easier web development.
Axios: Promise-based HTTP client for the browser and Node.js.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
React Icons: Include popular icons in your React projects easily.
Getting Started
Prerequisites
Node.js (>=14.x)
npm (>=6.x) or yarn (>=1.x)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/telegram-replica.git
cd telegram-replica
Install dependencies:

bash
Copy code
npm install
or

bash
Copy code
yarn install
Running the Application
Start the development server:

bash
Copy code
npm start
or

bash
Copy code
yarn start
Open your browser and navigate to http://localhost:3000.

Folder Structure
java
Copy code
telegram-replica/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Messagelist.jsx
│   │   ├── SwitchButton.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.js
│   ├── App.css
│   └── ...
├── package.json
└── README.md

API Endpoints
Get All Chats
URL: https://devapi.beyondchats.com/api/get_all_chats?page=1
Method: GET
Description: Returns a list of chats (paginated API).
Get Chat Messages
URL: https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888
Method: GET
Description: Returns a list of messages given a chat ID.
Components
Sidebar
Contains the search bar and list of chats.
Fetches chat data from the API and passes it to the Messagelist component.
Messagelist
Receives chat data as props and displays the list of messages.
SwitchButton
A toggle switch component used within the sidebar.
Styling
The application uses Tailwind CSS for custom styling along with Material UI components.
Custom styles can be found in App.css.
Deployment
To deploy the project publicly, follow the steps for deploying a React application on your preferred platform (e.g., Netlify, Vercel, GitHub Pages).

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Inspired by the Telegram messaging application.
Built using ReactJS and Material UI.