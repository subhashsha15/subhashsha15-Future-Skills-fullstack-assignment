## React Assignment

1. How can you implement shared functionality across a component tree?
   - Context API:
       The Context API allows you to share state and functionality across multiple components without having to pass props down manually at every level. You create a Context, then use a Provider to wrap your component tree. 
   - Higher-Order Components (HOCs):
       HOCs are functions that take a component and return a new component with added functionality. This is useful for reusing logic across multiple components. For example, you could create an HOC to handle authentication logic and wrap any component that requires this functionality.
   - Custom Hooks:
       If you find yourself writing the same logic in multiple components, consider extracting that logic into a custom hook. This hook can then be used across the component tree wherever the shared functionality is needed.
   - Render Props:
       Render props involve passing a function as a prop to a component. This function is used to control what the component renders, allowing you to share functionality between components by centralizing the logic in one place and passing it down as needed.
   - Redux or Other State Management Libraries:
       If the shared functionality is related to state management, using Redux or another state management library can help. By defining actions and reducers, you can centralize state logic and make it accessible to any component in the tree via the useSelector and useDispatch hooks.
       
2. Why is the `useState` hook appropriate for handling state in a complex component?
  - helps optimize performance by ensuring that only the component with the state that changed is re-rendered, rather than triggering a full      re-render of the entire component tree.
  -  useState, makes it easier to inspect and debug the state of the components during development.
  -  useState allows for setting initial state based on props or computation, which is often necessary in complex components.
  -  useState can be used multiple times within the same component to manage different pieces of state independently, which is useful in complex  components where different parts of the UI have separate state requirements.
3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
