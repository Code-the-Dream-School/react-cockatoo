# Code the Dream - React Class

### TODO LIST APP

This Todo App is designed to cheer for each little accomplishment we make. As we progress toward our goals, like building an app, this app will cheer for you when you complete each task no matter how small, and celebrates with you when you complete all of your tasks.

This Todo App uses Airtable, a cloud-based relational database, and it stores 3 values for each Todo:

1. Title: string
2. Created: date/time eg. 2/10/2023 2:04pm
3. Completed: bool

Getting Started
To use this app, you will need to sign up for an Airtable account and create a new base. Next create a new table in the base with the following fields:

1. Title (Single line text)
2. Created (Date)
3. Completed (Checkbox)

You will need to generate an API key for your Airtable account and your base ID
to authenticate and authorize your app to access the data in your Airtable base. To do this, go to your account settings and click on the "Generate API key" button. Copy the API key and paste it into an .env file in the root directory of the project. Set REACT_APP_AIRTABLE_API_KEY equal to your API key: REACT_APP_AIRTABLE_API_KEY={your_API_key}

You will need the base ID which you can find by navigating to the base you set up, clicking on the "Help" menu in the top right corner of the screen and selecting "API documentation" from the dropdown. Your base ID should be provided here. Copy the ID and paste it into the .env file in the root directory of the project. Set REACT_APP_AIRTABLE_BASE_ID equal to your Base ID: REACT_APP_AIRTABLE_BASE_ID
={your_Base_ID}

Next, install the required packages by running the following command in the terminal:
yarn install _or_ npm install

You start the app by running the following command:
yarn start _or_ npm start

**[Click here](https://github.com/Code-the-Dream-School/react/wiki) to redirect to the Wiki for the Code the Dream class repository.
Read the Project Setup section and then follow the link to the General Instructions to get started.**
