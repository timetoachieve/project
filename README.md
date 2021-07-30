# Student Placement/Internship Data Management

## What has been done until now:
1. Create a react app (frontend/) to get started  
    $ npx create-react-app frontend
2. Clean up boilerplate  
    Delete unnecessary files and their references  
    Change \<title> tag in 'public/index.html'
3. Add Material-UI and Roboto Font  
    Add material ui necessary packages and cdn  
    Add cdn for Roboto Font  
    Add clsx as npm package (clsx is used to construct class names conditionally)  
    $ npm install @material-ui/core @material-ui/icons clsx  
4. Create Navbar + Drawer  
    The components/ directory contains all the components which are common across multiple screens.  
    All the components are exported from a common index.js file in the components directory.  
    Navbar contains the easy access links for profile and the drawer contains links to all other screens
    currently only dashboard link is added.  

