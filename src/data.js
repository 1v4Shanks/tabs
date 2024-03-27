const data =[
    {
      "id": 0,
      "title": "Introduction",
      "content": "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage the state of the application efficiently. React follows a component-based architecture, making it easier to maintain and scale large applications."
    },
    {
      "id": 1,
      "title": "Component-Based",
      "content": "React encourages a component-based approach to building UIs, where each piece of the user interface is encapsulated within its own self-contained component. This promotes reusability, modularity, and maintainability of the codebase. Components can be composed together to create complex UIs."
    },
    {
      "id": 2,
      "title": "Virtual DOM",
      "content": "One of the key features of React is its Virtual DOM. Instead of directly updating the browser DOM, React creates a lightweight virtual representation of the DOM in memory. When the state of the application changes, React calculates the most efficient way to update the actual DOM, minimizing unnecessary re-renders and improving performance."
    },
    {
      "id": 3,
      "title": "Declarative Syntax",
      "content": "React uses a declarative syntax, which allows developers to describe the desired UI state and React takes care of updating the DOM to match that state. This contrasts with imperative programming, where developers have to manually manipulate the DOM to reflect changes. Declarative syntax leads to more predictable and easier-to-understand code."
    }
  ];

  export default data;
  