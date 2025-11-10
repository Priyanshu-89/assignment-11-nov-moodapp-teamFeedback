#  React Assignments

This repository contains two React mini projects demonstrating the use of **Props**, **State**, and **Component Communication** in React.

---

##  Assignment 1 – Mood Changer Component

###  Objective
The goal of this assignment is to create a small React component that displays a user's name and allows them to change their mood between "Happy" and "Sad" by clicking a button.

###  Concepts Used
- **Props** – to display the user's name dynamically.
- **useState Hook** – to manage mood changes (Happy/Sad).
- **Conditional Rendering** – to switch between emojis and mood text.
- **Event Handling** – to update the UI on button click.

###  Description
This component takes a name as a prop and displays it along with the current mood.  
When the user clicks the **Change Mood** button, the mood toggles between:
- 😊 **Happy**
- 😢 **Sad**


---

##  Assignment 2 – Team Feedback Board

###  Objective
The aim of this assignment is to build an interactive feedback board for a small team where each member can receive feedback individually.

###  Concepts Used
- **State Lifting** – to manage feedback counts for all members in the parent component.
- **Props** – to pass data and functions between components.
- **Component Reusability** – using one `MemberCard` component for multiple team members.
- **Event Handling** – for incrementing feedback counts and resetting all values.

###  Description
The app displays a list of team members, each with:
- Their **name**
- A **feedback counter**
- A **"Give Feedback"** button to increase their feedback count
-At the bottom, a **"Reset All Feedback"** button resets all feedback counts to zero.  
-The layout is clean and centered, and each card has a simple, user-friendly design.

Live Link: https://venerable-custard-cb5f98.netlify.app/

---

