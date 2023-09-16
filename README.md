# job-finder

#Combined Redux Store Setup:
Integrates stores and reducers for authentication, job data, and form data using Redux Toolkit's configureStore.

#store.js:
Configures the Redux store using Redux Toolkit's configureStore.
Combines reducers from auth, job, and form slices into one root reducer.
The resulting store is ready to be used across the application.

#authStore.js:
Manages user authentication state.
Initializes token, email, and login status from local storage.
Provides actions like login and logout to update authentication status and local storage.

#formStore.js:
Manages form data state.
Initializes fields for name, email, cover letter, and resume.
Defines actions to updateFormData with new values and resetFormData to clear the form.

#jobStore.js:
Manages job-related state.
Holds an array of job listings and a selected job.
Provides actions to setJobs with a list of jobs and selectJob to set a specific job.

#App.js:
Sets up the main component with client-side routing using React Router.
Includes header, routes for landing, jobs, job details, application form, and success page.
Manages selected programming language state and passes it to the job listing component.

#LandingPage.js:
Serves as the landing page for the job search portal.
Allows users to input a programming language and submit a search request.
Sets the selected language and navigates to the "Jobs" page upon submission.

#LoginSignIn.js:
Manages user login and sign-up functionality.
Provides input fields for email and password, or confirmation password for sign-up.
Allows users to switch between login and sign-up forms.
Sends requests to an authentication API for login or sign-up, dispatching Redux actions upon success.

#Header.js:
Displays the site header with title and navigation links.
Utilizes Redux for user login status.
Offers links for "Landing," "Jobs," and a "Logout" button which dispatches a logout action.

#JobListings.js:
Lists job postings based on a chosen programming language.
Fetches job data from an external API and stores it in Redux.
Each listing displays job title, company, and a button to view details.

#JobDetails.js:
Presents details of a selected job.
Retrieves job information based on the jobId from the Redux store.
Displays job title, company, location, salary, and description. Provides a button to navigate to the application form.

#ApplicationForm.js:
Represents a job application form.
Uses Redux for form data management (name, email, cover letter, and resume).
Handles form submission with handleSubmit, dispatching data to Redux, and setting formSubmitted flag.

#SuccessPage.js:
Displays a success message and submitted application data.
Retrieves application data from the Redux store, showing name, email, cover letter, and optionally the submitted resume file.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
