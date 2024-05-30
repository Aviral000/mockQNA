import React from 'react'
import { BsArrow90DegUp } from 'react-icons/bs'

export default function QNA() {
const reactQuestions = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes. React's main features include the virtual DOM, component-based architecture, and a declarative programming style, which help in building reusable UI components and managing application state effectively."
    },
    {
        question: "What are the main features of React?",
        answer: "Key features of React include JSX (JavaScript XML), virtual DOM, component-based architecture, unidirectional data flow, and lifecycle methods."
    },
    {
        question: "What is JSX?",
        answer: "JSX stands for JavaScript XML. It allows you to write HTML elements directly in JavaScript and place them in the DOM without using methods like createElement() or appendChild()."
    },
    {
        question: "What is the virtual DOM?",
        answer: "The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates. React creates a virtual DOM tree, compares it with the previous tree (diffing), and applies only the necessary changes to the actual DOM."
    },
    {
        question: "What are components in React?",
        answer: "Components are the building blocks of a React application. They are reusable, independent pieces of UI that can be nested, managed, and handled independently."
    },
    {
        question: "What is the difference between state and props?",
        answer: "state is a built-in React object used to hold data that may change over the lifetime of a component. props are short for properties and are read-only inputs passed to a component from its parent."
    },
    {
        question: "What is the use of useState in React?",
        answer: "The useState hook allows you to add state to functional components. It returns an array with the current state and a function to update it."
    },
    {
        question: "What is the useEffect hook used for?",
        answer: "The useEffect hook lets you perform side effects in functional components. It can be used for tasks like fetching data, directly manipulating the DOM, and setting up subscriptions."
    },
    {
        question: "Explain the React component lifecycle phase?",
        answer: "Mounting, Updating, Unmounting, Error Handling"
    },
    {
        question: "Explain the component lifecycle methods in React?",
        answer: "Sure! React lifecycle methods can be divided into four phases: mounting, updating, unmounting, and error handling. Let me break each of them down for you:"
    },
    {
        question: "1. Mounting",
        answer: "constructor: manage the this.state, binding event handler, getDerivedStateFromProps(prop, state): if props changes it will re-render the state or prop is null return nothing, render(): render the element in the real dom and return the JSX UI component, componentDidMount: used for fetching the data or side effects"
    },
    {
        question: "2. Updating",
        answer: "getDerivedStateFromProps(props, state): same as mounting, shouldComponentUpdate: return boolean, if a state or prop is updating which led in re-rendering on ui, render(): returns the updated JSX or UI component to the real dom, componentDidUpdate: Called after the component's updates are flushed to the DOM. It’s a good place to make network requests as long as you compare the current props to previous props."
    },
    {
        question: "3. Unmounting",
        answer: "componentWillUnmount: before a component dies or removed, it will make sure to end the task like api call or event listeners"
    },
    {
        question: "4. Error Handling",
        answer: "componentDidError: work right after a error is found in a descendant component and it will log the error details"
    },
    {
        question: "What is the context API in React?",
        answer: "The context API is a way to pass data through the component tree without having to pass props down manually at every level. It is used for global state management."
    },
    {
        question: "How do you create a context in React?",
        answer: "we will use the React.createContext(),create a tag and then we will use its method called Provider and after that we will use its attribute called value and pass down the state or function to handle at global level, finally we will wrap the all the child component inside the provider function"
    },
    {
        question: "What is a higher-order component (HOC) in React?",
        answer: "A higher-order component is a function that takes a component and returns a new component. HOCs are used for reusing component logic."
    },
    {
        question: "What are React hooks?",
        answer: "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, useContext, useReducer, and useRef."
    },
    {
        question: "What is the difference between useEffect and componentDidMount?",
        answer: "useEffect is used in functional components and can replace multiple lifecycle methods. componentDidMount is a lifecycle method used only in class components to run code after the component mounts."
    },
    {
        question: "Explain the concept of reconciliation in React.",
        answer: "Reconciliation is the process by which React updates the DOM. When a component's state or props change, React creates a new virtual DOM tree and compares it with the previous one to determine the minimal changes required to update the actual DOM."
    },
    {
        question: "Explain the concept of reconciliation in React.",
        answer: "A React fragment allows you to group multiple elements without adding an extra node to the DOM. It is used with the <React.Fragment> tag or the shorthand <>."
    },
    {
        question: "What is the purpose of keys in React?",
        answer: "Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings and are used to optimize the rendering of lists."
    },
    {
        question: "How do you handle forms in React?",
        answer: "Forms in React are handled using controlled components. You manage form state with state hooks and update it with event handlers."
    },
    {
        question: "What is React Router and how do you use it?",
        answer: "React Router dom is a library for routing in React applications. It allows you to define routes and navigate between different components. BrowserRouter, Routes, Route(attributes: exact, path, element)"
    },
    {
        question: "What is a controlled component in React?",
        answer: "A controlled component is a component that controls the input form elements' state in React. The input's value is driven by the state, and changes are handled through event handlers."
    },
    {
        question: "What is an uncontrolled component in React?",
        answer: "An uncontrolled component is a component that relies on the DOM to manage the form data. It uses refs to get the form values instead of state."
    },
    {
        question: "What is memoization and how is it used in React?",
        answer: "Memoization is an optimization technique to cache the results of expensive function calls. In React, React.memo is used to memoize functional components to prevent unnecessary re-renders."
    },
    {
        question: "What is lazy loading in React?",
        answer: "Lazy loading is a technique to defer loading components until they are needed. In React, React.lazy and Suspense are used to implement lazy loading."
    },
    {
        question: "What is the difference between useEffect and useLayoutEffect?",
        answer: "useEffect runs after the render is committed to the screen, while useLayoutEffect runs synchronously after all DOM mutations but before the browser paints. useLayoutEffect is used for reading layout and synchronously re-rendering."
    },
    {
        question: "What is the purpose of useRef in React?",
        answer: "The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. It is used to access DOM elements directly or store a mutable value that does not cause re-renders when changed."
    },
    {
        question: "What is React's strict mode?",
        answer: "React's StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants but does not render any visible UI."
    },
    {
        question: "What is Server-Side Rendering (SSR) in React?",
        answer: "Server-Side Rendering (SSR) is the process of rendering a React application on the server, sending the fully rendered HTML to the client. It improves performance and SEO by providing content to web crawlers and users faster."
    },
]

  return (
    <div className='container mx-5'>
        <h1 className='font-bold underline lg:text-6xl pt-5'>Mock QNA:-</h1>
        <h1 className='font-bold text-4xl pt-5' id='react'>React-</h1>
        <button className='fixed right-10 bottom-7 bg-white text-teal-800 w-10 h-10 rounded-full flex justify-center items-center'><a href="#react"><BsArrow90DegUp /></a></button>
        { reactQuestions.map((lead, index) => (
            <li>
                <a href={`#${index}`} className='no-underline text-teal-400 hover:no-underline hover:text-inherit hover:cursor-pointer'>{lead.question}</a>
            </li>
        ))}
        { reactQuestions.map((lead, index) => (
            <li>
                <h1 className='no-underline text-teal-400 hover:no-underline lg:text-4xl' id={index}>{lead.question}</h1>
                <p className='lg:text-2xl text-teal-100 pt-3 pb-5'>{lead.answer}</p>
            </li>
        ))}
    </div>
  )
}