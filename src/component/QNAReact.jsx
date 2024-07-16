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
        question: "What is the difference between virtual DOM and real DOM?",
        answer: "Virtual DOM: is a lightweight copy of the Real DOM that is created and managed by React. It is a JavaScript object that represents the structure of the UI elements, including their properties, attributes, and relationships with other elements. Real DOM: is a browser-specific representation of the UI elements that is created and updated by the browser. It is a tree-like structure that contains HTML elements, their properties, and their styles. Behavior: Virtual DOM: updates the UI by creating a new version of the Virtual DOM and comparing it with the previous version to determine the minimal set of changes needed to update the Real DOM. This process is called reconciliation and is done by React automatically. eal DOM: updates the UI by directly manipulating the HTML elements in the DOM tree. This process can be slow and inefficient, especially when there are many changes or complex interactions between elements. Performance: Virtual DOM: is faster and more efficient than the Real DOM because it minimizes the number of updates needed to the UI and avoids unnecessary rendering. It also allows React to batch updates and optimize the rendering process. Real DOM: is slower and less efficient than the Virtual DOM because it involves costly operations such as layout, painting, and reflow. It also does not provide a way to optimize the rendering process or batch updates. "
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
        question: "How is useReducer different from useState hook?",
        answer: "useState is simpler and more lightweight, making it suitable for basic state management. useReducer, on the other hand, provides more complex logic and is better suited for larger applications with greater complexity. useState will always re-render the component when the state updates, which can lead to slower performance in some cases. useReducer allows batching updates to the state and can prevent unnecessary re-renders, making it more efficient in certain situations. useState can lead to more code and complexity when managing multiple states independently. useReducer can help maintain consistency across various actions performed on the same data type and can be more readable when managing complex state transitions. useState does not allow sharing state logic between multiple components. useReducer allows extracting the reducer function and using it with useReducer in multiple components, making it more suitable for sharing state logic. useState is suitable for managing simple state with JavaScript primitives like strings, booleans, or numbers. useReducer is more suitable for managing complex state with objects or arrays, especially when there are multiple properties tied together that should be managed in one state object."
    },
    {
        question: "Difference between useCallback & useMemo?",
        answer: "What they memoize: - useCallback is used to memoize functions, so that they are not recreated every time a component re-renders - useMemo is used to memoize values, so that they are not recomputed every time a component re-renders. Usage useCallback - Arguments: takes two arguments, a function and an array of dependencies - Returns: returns a memoized version of the function that only changes if one of its dependencies changes useMemo - Arguments: takes two arguments, a function and an array of dependencies - Returns: returns a memoized value that only changes if one of its dependencies changes Practical usecase - useCallback: This can be useful for optimizing performance in components that pass functions down to child components as props - useMemo: This can be useful for optimizing performance in components that perform expensive computations or data transformations "
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
        answer: "getDerivedStateFromProps(props, state): same as mounting, shouldComponentUpdate: return boolean, if a state or prop is updating which led in re-rendering on ui, render(): returns the updated JSX or UI component to the real dom, getSnapshotBeforeUpdate(prevProps, prevState): Captures information from the DOM before it changes. Returns a value that will be passed to componentDidUpdate. componentDidUpdate(prevProps, prevState, snapshot): Called after the DOM updates. Good for making network requests or manipulating the DOM based on previous props or state."
    },
    {
        question: "3. Unmounting",
        answer: "componentWillUnmount: before a component dies or removed, it will make sure to end the task like api call or event listeners"
    },
    {
        question: "4. Error Handling",
        answer: "static getDerivedStateFromError(): Called after an error has been thrown by a descendant component, used to render a fallback UI. componentDidError: work right after a error is found in a descendant component and it will log the error details"
    },
    {
        question: "How to implement different lifecycle methods using useEffect?",
        answer: "componentDidMount: To mock componentDidMount, use the useEffect hook with an empty dependency array - this will execute the callback function passes as its first paramenter, once after the component mounts. componentWillUnmount: To mock componentWillUnmount, return a function from the callback function passed as useEffect's first parameter. This returned function will be called when the component unmounts. componentDidUpdate: To mock componentDidUpdate, use the 2nd argument to useEffect to set the state or props on which the effect depends on as the dependency array. With that, useEffect's callback method will only be triggered when any of its dependencies changes. "
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
        answer: "A higher-order component is a function that takes a component and returns a new component. HOCs are used for reusing component logic. for eg: 1. create a function HighOrder(wrappedComp) -> return class extends React.component -> render() -> return <wrappedComp {...this.props} /> -> file change -> function commonComp(props) -> return hey, {props.name} -> const enhancedComp = HighOrder(commonCom) -> export {enhancedComp}"
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
        question: "what is React Fragment in React?",
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
    {
        question: "What is Babel? How is it used with React? From",
        answer: "Babel is a popular JavaScript compiler that allows developers to write code using the latest JavaScript syntax (ES6, ES7, etc.) without worrying about compatibility issues with older browsers or environments. It essentially transpiles modern JavaScript code into a backward-compatible version that can run in older browsers or environments that don't support the latest features. Support for Latest JavaScript Features: async/await, callbacks, arrow functions, template literals. Transpilation: Babel transpiles modern JavaScript code into equivalent code that is compatible with older browsers or environments. Integration with Build Tools: Babel seamlessly integrates with popular build tools such as webpack, Rollup, and Parcel. Babel is commonly used in conjunction with React to enable developers to write modern JavaScript code and JSX syntax while ensuring compatibility with a wide range of browsers and environments. React uses JSX (JavaScript XML) syntax to define UI components. JSX allows developers to write HTML-like code within JavaScript, making it easier to create and maintain React components. However, JSX is not understood by browsers directly and needs to be transformed into regular JavaScript code. Babel comes into play by transforming JSX syntax into regular JavaScript function calls. For example, JSX elements like <div> or <Button> are transpiled into React.createElement() calls. const element = <div>Hello, world!</div>; const element = React.createElement('div', null, 'Hello, world!'); In summary, Babel plays a crucial role in the React ecosystem by enabling developers to write modern JavaScript and JSX syntax while ensuring compatibility and optimal performance across different platforms and environments."
    }
]

const nodeQuestions = [
    {
        question: "What is Node.js?",
        answer: "Node.js is a runtime environment that allows you to run JavaScript code on the server side. It uses the V8 JavaScript engine from Google Chrome and is built on an event-driven, non-blocking I/O model."
    },
    {
        question: "What are the main features of Node.js?",
        answer: "Key features of Node.js include asynchronous and event-driven architecture, non-blocking I/O, single-threaded execution model, fast performance due to the V8 engine, and a rich ecosystem of libraries via npm."
    },
    {
        question: "What are some common performance optimization techniques in Node.js?",
        answer: "Cluster Module: Utilize the cluster module to create child processes that share server ports. Load Balancing: Distribute incoming traffic across multiple servers. Caching: Use caching mechanisms like Redis to store frequently accessed data. Code Profiling: Use tools like clinic to profile and analyze the performance of your application. Asynchronous Operations: Use asynchronous methods to avoid blocking the event loop."
    },
    {
        question: "Key Concepts Related to setImmediate",
        answer: "Event Loop: The event loop is the core mechanism in Node.js that handles asynchronous operations. It processes events and executes callbacks. Timers Phase: This is the phase in the event loop where timers are executed. These include setTimeout and setInterval. I/O Callbacks Phase: This phase processes callbacks for completed I/O operations. Check Phase: This is where setImmediate callbacks are executed. setImmediate callbacks are processed after the I/O events' callbacks and before the timers."
    },
    {
        question: "Comparison with Similar Functions",
        answer: "process.nextTick: This function schedules a callback to be invoked in the next iteration of the event loop, before any I/O operations. It's generally used to process code after the current operation completes but before any I/O callbacks. setTimeout: This function schedules a callback to be executed after a minimum delay specified in milliseconds. The exact time of execution may vary due to the event loop's workload."
    },
    {
        question: "How do you secure a Node.js application?",
        answer: "Use HTTPS: Ensure data is encrypted during transmission. Input Validation: Validate and sanitize user inputs. Environment Variables: Use environment variables for sensitive data. Rate Limiting: Implement rate limiting to prevent DoS attacks. Security Headers: Use security headers like Content-Security-Policy, X-Frame-Options, etc. Authentication and Authorization: Use robust authentication and authorization mechanisms."
    },
    {
        question: "What are some common security concerns in Node.js applications?",
        answer: "Injection Attacks: SQL injection, NoSQL injection, etc. Prevention: Validate and sanitize inputs. Use parameterized queries or an ORM like Mongoose. Cross-Site Scripting (XSS): Inserting malicious scripts into web pages. Prevention: Escape user input before rendering it in HTML. Use libraries like xss or templating engines that auto-escape output, such as Pug. Cross-Site Request Forgery (CSRF): Forging requests on behalf of authenticated users. Prevention: Use CSRF tokens to verify the legitimacy of requests. Libraries like csurf can help. Data Exposure: Sensitive data exposure due to improper handling of data. Prevention: Environmental Variable usage. Denial of Service (DoS): Overloading the server with too many requests. Prevention: Implement rate limiting using middleware like express-rate-limit."
    },
    {
        question: "NODE.JS SUMMARY",
        answer: "Node.js is a fast, efficient runtime environment built on Chrome's V8 engine, known for its non-blocking, event-driven architecture. When a request is made, the event emitter sends it to the event queue, where the event loop processes it. The event loop's non-blocking nature allows Node.js to handle multiple concurrent requests without waiting for I/O operations to complete, leveraging callbacks, promises, and async/await for responses. While single-threaded for JavaScript execution, Node.js uses libuv to manage asynchronous I/O operations. For better scalability and performance on multi-core systems, the Cluster module and Worker Threads can be used. Node.js's design makes it ideal for real-time, scalable applications, maintaining high performance with a single-threaded, non-blocking event loop."
    },
    {
        question: "Child Thread",
        answer: "Separate Memory: Each child process runs independently with its own memory. Communication: Parent and child processes can communicate via IPC. Modules: child_process, cluster. Creates separate processes with their own memory and event loops. Suitable for tasks that need isolation or are CPU-intensive."
    },
    {
        question: "Worker Thread",
        answer: "worker_threads that was introduced to provide a way to perform parallel processing using multiple threads. This module allows you to create separate JavaScript threads, each running in its own isolated context, and enables parallel execution of tasks. Worker threads can be used to perform CPU-intensive operations without blocking the main event loop, leading to better utilization of multi-core systems. Each worker thread runs in a separate JavaScript context, meaning they have their own memory space and don’t share variables or data directly with the main thread or other worker threads. Shared Memory: Threads can share memory using SharedArrayBuffer. Communication: Uses message passing through parentPort. Use Case: Suitable for CPU-bound tasks that can benefit from parallel processing within the same application instance."
    },
    {
        question: "How can we scale a Node.js application, and what role does load balancing play in achieving scalability?",
        answer: "Vertical scaling involves increasing the capacity of a single server, for example, by adding more CPU, memory, or storage. This method is limited by the physical constraints of a single machine and can become expensive. Upgrade Hardware: Increase the server's CPU, RAM, and storage. Optimize Code: Ensure that your Node.js application is optimized for performance. Horizontal scaling involves adding more instances of your application to handle the load. This method provides more flexibility and is generally more cost-effective for large-scale applications. Use the cluster module to create multiple Node.js processes that share the same server port and can handle requests concurrently. Each cluster instance runs on a separate CPU core. Distribute incoming requests across multiple instances of your application to ensure no single instance becomes a bottleneck. Load balancers can operate at different layers (L4 for TCP/UDP traffic, L7 for HTTP/HTTPS traffic). Nginx: Acts as a reverse proxy to distribute incoming HTTP requests. HAProxy: High-availability load balancer for TCP and HTTP-based applications. Cloud Load Balancers: AWS Elastic Load Balancing (ELB), Google Cloud Load Balancing, Azure Load Balancer. Use Docker to containerize your Node.js application, making it easy to deploy and manage multiple instances. Use Kubernetes or Docker Swarm for container orchestration to manage, scale, and deploy containerized applications. Efficient Resource Utilization: Distributes traffic across multiple servers, preventing any single server from being overwhelmed. High Availability: If one server goes down, the load balancer can reroute traffic to other available servers, providing fault tolerance. Scalability: Makes it easier to add or remove instances based on traffic load without downtime. Improved Performance: Reduces response time by distributing requests to less busy servers."
    },
    {
        question: "How can we prevent common security issues like Cross-Site Scripting (XSS) in a Node.js web application?",
        answer: "Ensure that any data being output to the web page is properly encoded. This prevents injected scripts from being executed. Example: Using escape-html Package. Many template engines automatically escape HTML by default. This ensures that any data inserted into the template is safe. Example: Using Handlebars. Sanitizing input ensures that any potentially dangerous characters are removed or encoded. Example: Using sanitize-html Package. CSP is an HTTP header that helps prevent XSS by specifying the sources from which content is allowed to load. Example: Setting CSP in Express. Make use of helemt module for http header. Always validate and sanitize input on the server-side to ensure it conforms to expected formats. Example: Using validator Package. Use HTTP-only cookies to prevent client-side scripts from accessing the cookies. Example: Setting HTTP-Only Cookie in Express. Regularly update your dependencies to ensure you are protected against known vulnerabilities."
    },
    {
        question: "How can you handle file uploads in a Node.js application",
        answer: "By using multer, you can efficiently handle file uploads in your Node.js application. Multer provides a robust solution for managing file uploads, including storage, validation, and error handling. This setup ensures that files are securely and correctly uploaded to your server."
    },
    {
        question: "How does Node.js handle asynchronous operations?",
        answer: "Node.js handles asynchronous operations using callbacks, promises, and async/await. The event loop processes asynchronous callbacks and ensures non-blocking I/O operations."
    },
    {
        question: "What is the Event Loop in Node.js?",
        answer: "The Event Loop is a core part of Node.js that handles asynchronous callbacks. It allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible."
    },
    {
        question: "Explain the use of require in Node.js.",
        answer: "require is used to import modules, JSON, or local files in Node.js. It allows you to include and use libraries and files in your code."
    },
    {
        question: "What is npm and what is its purpose?",
        answer: "npm (Node Package Manager) is the default package manager for Node.js. It is used to manage, share, and deploy Node.js packages and modules."
    },
    {
        question: "What is a callback function in Node.js?",
        answer: "A callback function is a function that is passed as an argument to another function and is executed after the completion of the asynchronous operation."
    },
    {
        question: "What are streams in Node.js?",
        answer: "Streams are objects that allow you to read or write data continuously. Node.js has four types of streams: readable, writable, duplex (both readable and writable), and transform (a type of duplex stream where the output is computed based on input)."
    },
    {
        question: "What is the purpose of the package.json file in a Node.js project?",
        answer: "The package.json file holds metadata about the project and is used to manage the project's dependencies, scripts, versioning, and configuration."
    },
    {
        question: "How does Node.js handle multiple concurrent requests?",
        answer: "Node.js handles multiple concurrent requests using its event-driven, non-blocking I/O model. The single-threaded event loop delegates I/O tasks to the underlying system (kernel), which can handle them asynchronously. This allows Node.js to manage thousands of connections concurrently without creating multiple threads."
    },
    {
        question: "How do you handle CPU-intensive tasks in Node.js?",
        answer: "CPU-intensive tasks can be handled using worker threads, child processes, or delegating the work to external services. This prevents blocking the event loop and ensures that the server remains responsive."
    },
    {
        question: "What is the cluster module in Node.js, and how does it help in handling concurrent requests?",
        answer: "The Cluster module allows you to create child processes (workers) that share the same server port, effectively utilizing multiple CPU cores. This way, you can run multiple instances of your Node.js application to handle more operations concurrently. This module is particularly useful for taking advantage of multi-core systems, as Node.js is single-threaded by default."
    },
    {
        question: "What are the common strategies to handle a large number of requests in Node.js?",
        answer: "Load balancing using tools like Nginx or HAProxy, Using the cluster module to utilize multiple CPU cores, Implementing caching using Redis or Memcached, Optimizing database queries and using connection pooling, Implementing rate limiting to prevent abuse."
    },
    {
        question: "How do you secure a Node.js application?",
        answer: "Validating and sanitizing user inputs to prevent injection attacks, Using HTTPS to encrypt data in transit, Implementing authentication and authorization mechanisms, Using environment variables to manage sensitive data, Regularly updating dependencies to fix vulnerabilities, Using security headers with libraries like helmet."
    },
    {
        question: "Understanding the Event Loop (1st: Concept)",
        answer: "1. Concept: The event loop is the heart of Node.js, enabling it to perform non-blocking I/O operations despite being single-threaded. It allows Node.js to handle multiple operations without creating multiple threads."
    },
    {
        question: "2. Phases",
        answer: "The event loop has several phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks."
    },
    {
        question: "Asynchronous Programming:",
        answer: "Callbacks: Traditional way to handle async operations, Promises: Modern approach to handle async operations, Async/Await: Syntactic sugar over promises, making async code look synchronous."
    },
    {
        question: "Basic Node.js Concepts like Routing and Project Structure",
        answer: "Concept: Routing determines how an application responds to a client request to a particular endpoint."
    },
    {
        question: "Core Node.js File Handling Capabilities",
        answer: "Reading Files: we will import fs library and use its properties like readFile, writeFile, readFileSync, writeFileSync"
    },
    {
        question: "Handling Concurrent Requests in Node.js",
        answer: "Event Loop and Asynchronous I/O: Node.js is designed to handle many concurrent connections efficiently. It uses a single-threaded event loop for managing I/O operations asynchronously."
    },
    {
        question: "Asynchronous behavior",
        answer: "Node.js is designed to handle asynchronous operations, meaning that it doesn't block the execution of code while waiting for I/O operations to complete. Instead, it registers callbacks or uses promises to handle the results once the operations are finished."
    },
    {
        question: "Handling multiple requests concurrently",
        answer: "Node.js can handle multiple requests simultaneously, thanks to its non-blocking I/O model. It doesn't wait for a response from one request before moving on to the next, allowing it to process a high volume of requests concurrently."
    },
    {
        question: "Single-threaded event loop",
        answer: "Node.js uses a single-threaded event loop model. The event loop is responsible for handling the flow of execution and delegating tasks to the appropriate handlers. It allows only one request to pass through at a time, but it doesn't wait for the response before processing the next request."
    },
    {
        question: "Non-blocking I/O operations",
        answer: "Node.js leverages non-blocking I/O operations, which means that it can continue executing other tasks while waiting for I/O operations to complete. This is similar to concurrency, where multiple tasks can be processed simultaneously without blocking each other."
    },
    {
        question: "Efficient utilization of system resources:",
        answer: "Node.js is designed to maximize the utilization of system resources. Its non-blocking I/O model and event-driven architecture allow it to handle a large number of concurrent connections with minimal overhead, making it highly scalable and efficient."
    },
    {
        question: "Runtime environment",
        answer: "Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It provides a platform for executing server-side code and interacting with the operating system, file system, and other system resources. With Node.js, you can build server-side applications, APIs, and perform various tasks effortlessly."
    },
    {
        question: `What does it mean "Once the operation completes it will create promise or callback"`,
        answer: "fs.readFile('example.txt', 'utf8', (err, data) => {} in this example, first the operation is going to work which is reading the file asynchronously once the reading operation complete then via callback or promise it will response back to the event loop."
    },
    {
        question: "REPL in Node",
        answer: "REPL stands for REAL EVAL PRINT LOOP and it represents a computer environment. It's similar to a Windows console or Unix/Linux shell in which a command is entered. Then, the system responds with an output. READ - Reads user's input, parses the input into the javascript data-structure and stores in memory. EVAL - Takes and evaluates the data structure. PRINT - Prints the result. LOOP -Loops the above command until user presses ctrl-c twice REPL is commonly used for experimenting with code, prototyping, and debugging. It is also helpful for learning and exploring the Node.js runtime and its APIs."
    },
    {
        question: "Examples for REPL",
        answer: "command prompt: node(node.js repl started)   ->   2 + 2(read, evaluate)   ->   4(print)   ->   .exit(exit the loop)"
    },
    {
        question: "What is the control Flow function and How does control flow manages the function calls?",
        answer: "The control Flow function is a piece of code that runs in between several asynchronous function calls. It follows job: Control the order of execution -> Collect Data -> Limit concurrency -> Call the next step in a program"
    },
    {
        question: "Flags used in the read/write operations in files",
        answer: "r - open file for reading, an error occurs if the files does't exist. r+ - Opens the file for both reading and writing, if the file does not exist, an error (exception) is thrown. w - Opens the file for both writing, If the file exists, its contents are truncated (overwritten). If the file does not exist, it is created. w+ - Opens the file for both writing and reading. If the file exists, its contents are truncated (overwritten). a - If the file does not exist, it is created. Opens the file for appending. If the file exists, the file pointer is positioned at the end of the file for appending. If the file does not exist, it is created. a+ - Opens the file for both appending and reading. If the file exists, the file pointer is positioned at the end of the file for appending. If the file does not exist, it is created."
    }
]

const expressQuestions = [
    {
        question: "what is express?",
        answer: "xpress, also referred to as Express.js, is a popular web framework built on top of Node.js. It simplifies the process of creating web applications and APIs by providing a structured way to handle  requests and responses."
    },
    {
        question: "What is the significance of body-parser package?",
        answer: "primary purposes of body-parser is to parse the request body, which contains data submitted by the client in an HTTP POST request. This data is often in the form of form data or JSON. ITs a middleware for Express framework and can be added to express application using app.use(). 1 const express = require(‘express’); 2 const bodyParser = require(‘body-parser’); 3 const app = express(); 4 app.use(bodyParser.json()); 5 app.use(bodyParser.urlencoded({ extended: true }));"
    },
    {
        question: "What is Express router() function?",
        answer: "The `router()` function is a built-in middleware function in Express.js that allows creating modular and mountable route handlers. It enhances the functionality of the Express application by providing a way to create separate files for different routes. Organizing Routes: The `router()` function is used to create separate files for different sets of routes, allowing for better organization and maintainability. Code Reusability: By using the `router()` function, route handlers can be created as separate modules that can be easily reused across different parts of the application. Mounting Routers: The `router()` function is used to mount the created router instances on specific paths, allowing for a hierarchical and modular structure of routes."
    },
    {
        question: "Mention some third-party middleware provided by Express JS",
        answer: "Helmet: It is a security middleware used to set HTTP headers for enhanced security. Morgan: It is a logging middleware used to log HTTP requests and response. Compression: It is a middleware used to compress HTTP responses to reduce the size of the data. Cookie-parser: It is a middleware used to parse and handle cookies in HTTP requests. Cors"
    },
    {
        question: "List the built-in middleware functions provided by Express",
        answer: "express.json(): A middleware that parses JSON data from a request body. express.urlencoded(): A middleware that parses URL-encoded data from a request body. express.static(): A middleware that serves static files from a specified directory. express.Router(): A middleware that provides modular routing. express.cookieParser(): A middleware that parses cookies from a request. express.session(): A middleware that manages user sessions."
    },
    {
        question: "What are middlewares in Express.Js?",
        answer: "Middlewares in Express.js are functions that are executed in between receiving a request and sending a response. They have access to the request and response objects, and can modify them or perform additional tasks before passing control to the next middleware in the chain. Middlewares can be used in various scenarios, including handling authentication, logging, error handling, and parsing request bodies. Define the middleware function using the following syntax: function middlewareFunction(req, res, next) Use the middleware function in your Express application by calling `app.use()` or `app.METHOD()` (e.g., `app.get()`, `app.post()`, etc.). The middleware will be executed for each request that matches the specified path. The middleware function can modify the request and response objects, perform operations, and even terminate the request-response cycle by sending a response."
    },
    {
        question: "What is the use of ‘Response.cookie()’ function?",
        answer: "The 'Response.cookie()' function is used to set a cookie in the response object in web development. It is used in web development frameworks to send cookies to the client's web browser when generating an HTTP response. res.cookie('jwt', { session: expiryTime, httpOnly: true/false })"
    },
    {
        question: "What is meant by Scaffolding in Express JS?",
        answer: "Scaffolding in Express JS refers to the process of generating a basic directory structure and some initial code files to set up a new Express.js project quickly. It provides a starting point for the application, including predefined project files and folder structure, routing, and configuration files. Scaffolding in Express JS is commonly used in web development projects to speed up the initial project setup and reduce repetitive tasks. Install the Express Generator package globally by running the following command: npm install -g express-generator. Create a new Express project by executing the following command: express myproject. Change into the project directory: cd myproject. Install the project dependencies: npm install > npm start"
    },
    {
        question: "What do you understand about ESLint?",
        answer: "ESLint is a popular open-source JavaScript linting utility that analyzes code for potential errors, coding style issues, and enforces predetermined guidelines for maintainability. It is widely used in the JavaScript community to ensure code quality and consistency across projects. ESLint is primarily used in JavaScript projects, both on the front-end and back-end, to improve code quality, catch common errors, and enforce coding style. Install ESLint globally or locally within the project. Configure ESLint by creating a `.eslintrc` or `.eslintrc.json` file in the project root directory. This file specifies the rules and configurations. Customize the ESLint rules by enabling or disabling rules, setting severity levels, or adding additional rules using the configuration file. Run ESLint by either using the command-line interface (CLI) or integrating it with popular text editors and IDEs. The CLI command `eslint <filename>` analyzes the specified file(s) and reports any errors or warnings. Review and fix the reported errors and warnings based on the ESLint guidelines and recommendations."
    }
]

const mongodbQuestions = [
    {
        question: "What is MongoDB, and what are its key features?",
        answer: "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for high availability, scalability, and performance."
    },
    {
        question: "Explain the difference between SQL and NoSQL databases.",
        answer: "SQL - Relational database management systems (RDBMS). Use structured query language (SQL) for defining and manipulating data. Tables with fixed schemas. Examples: MySQL, PostgreSQL, Oracle. NoSql - Non-relational or distributed database systems. Store data in a variety of formats like document, key-value, wide-column, and graph. Dynamic schemas. Examples: MongoDB, Cassandra, Redis."
    },
    {
        question: "What is a document in MongoDB?",
        answer: "A document is a record in MongoDB, stored in BSON (Binary JSON) format. It contains key-value pairs, where keys are strings and values can be various data types such as strings, numbers, arrays, and even other documents."
    },
    {
        question: "What is an embedded document in MongoDB?",
        answer: `An embedded document is a document that is nested within another document. It allows for better data representation and reduces the need for complex joins or multiple queries. { name: "Alice", address: { street: "123 Main St", city: "Anytown" } } `
    },
    {
        question: "What are the main features of MongoDB?",
        answer: "Document-Oriented Storage: Uses BSON format for documents. Indexing: Supports indexes to improve search performance. Replication: Provides high availability with replica sets. Sharding: Scales horizontally using sharding. Flexible Schema: Allows for dynamic schemas. Aggregation Framework: Powerful query capabilities for data analysis."
    },
    {
        question: "What is a collection in MongoDB?",
        answer: "A collection is a group of MongoDB documents, equivalent to a table in relational databases. Collections do not enforce a schema, allowing for flexible data storage."
    },
    {
        question: "What are CRUD operations in MongoDB",
        answer: "insertOne, InsertMany, find, updateOne, updateMany, deleteOne, deleteMany"
    },
    {
        question: "What are MongoDB indexes and why are they important?",
        answer: "Indexes support the efficient execution of queries by providing fast access to documents in a collection. Without indexes, MongoDB must perform a collection scan, which can be slow. db.collection.createIndex({ name: 1 }); // Create an index on the 'name' field"
    },
    {
        question: "Explain the Aggregation Framework in MongoDB.",
        answer: `The Aggregation Framework allows for data processing and transformation using a pipeline approach. Each stage in the pipeline transforms the documents as they pass through. db.collection.aggregate([{ $match: { status: "A" } },{ $group: { _id: "$cust_id", total: { $sum: "$amount" } } },{ $sort: { total: -1 } }]);`
    },
    {
        question: "What is a replica set in MongoDB?",
        answer: "A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability. One node is the primary node that receives write operations, and the others are secondary nodes that replicate the primary's data."
    },
    {
        question: "Replication",
        answer: "Replication in MongoDB is the process of creating multiple copies of data across multiple servers. This is done to ensure high availability and data durability. Replication involves creating a replica set, which consists of one primary node and multiple secondary nodes. The primary node is responsible for accepting writes, while the secondary nodes replicate the data from the primary node."
    },
    {
        question: "Here are the key aspects of replication:",
        answer: "Replica Set: A replica set is a group of nodes that replicate data. It consists of one primary node and multiple secondary nodes. Primary Node: The primary node is responsible for accepting writes and is the only node that can accept writes. Secondary Nodes: Secondary nodes replicate the data from the primary node and can be used for reads. Data Durability: Replication ensures data durability by creating multiple copies of data across multiple servers. High Availability: Replication ensures high availability by allowing the secondary nodes to take over if the primary node fails."
    },
    {
        question: "Sharding",
        answer: "Sharding in MongoDB is the process of horizontally scaling data across multiple servers. This is done to improve performance and scalability. Sharding involves dividing the data into smaller chunks called shards, which are then distributed across multiple servers."
    },
    {
        question: "Here are the key aspects of sharding:",
        answer: "Shards: A shard is a chunk of data that is distributed across multiple servers. Shard Keys: Shard keys are used to determine which shard a document belongs to. Shard Servers: Shard servers are the servers that store the shards. Data Distribution: Sharding ensures data distribution by dividing the data into smaller chunks and distributing them across multiple servers. Scalability: Sharding improves scalability by allowing the addition of more shard servers as needed."
    },
    {
        question: "Key Differences sharding and replication",
        answer: "Replication is used for high availability and data durability, while sharding is used for horizontal scaling and performance. Data Distribution: Replication involves creating multiple copies of data across multiple servers, while sharding involves dividing data into smaller chunks and distributing them across multiple servers. Write Concern: Replication ensures that writes are accepted by the primary node, while sharding does not have a write concern."
    },
    {
        question: "What are ACID properties in databases?",
        answer: "Answer: ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable processing of database transactions. Atomicity: Ensures that all operations within a transaction are completed successfully. If any operation fails, the entire transaction fails and the database is left unchanged. Consistency: Ensures that a transaction brings the database from one valid state to another, maintaining database invariants. Isolation: Ensures that concurrent transactions do not interfere with each other. Each transaction is isolated from others. Durability: Ensures that once a transaction is committed, it will remain so, even in the event of a system crash."
    },
    {
        question: "How do you secure a MongoDB deployment?",
        answer: "Authentication: Enable authentication to require users to log in. Authorization: Implement role-based access control (RBAC) to restrict user actions. Encryption: Use TLS/SSL for data in transit and enable encryption at rest. Network Security: Use firewalls and IP whitelisting to restrict access."
    },
    {
        question: "What is the correct mongosh command for an engineer to securely connect to a self-hosted MongoDB with a username and password?",
        answer: "To connect securely to a self-hosted MongoDB instance with authentication, engineers typically use the mongo shell (mongosh) command-line tool, which provides an interactive JavaScript interface for MongoDB operations. mongosh --host <hostname>:<port> --username <username> --password <password> --authenticationDatabase <authDatabase>"
    },
    {
        question: "What is aggregation in mongoDB",
        answer: "Aggregation in MongoDB is a pipeline framework that processes data records and performs various operations to produce aggregated results based on those records. Aggregation in MongoDB is used for data analytics and complex data processing tasks, such as calculating averages, finding maximum or minimum values, grouping data, and applying conditional operations. Select and match the relevant documents using the $match operator. Group the selected documents based on specific fields using the $group operator. Apply various aggregation operations like sum, average, count, etc., using operators like $sum, $avg, $count, etc. Sort the aggregated results based on specific fields using the $sort operator. Apply additional operations like limiting results using the $limit operator or skipping documents using the $skip operator."
    },
    {
        question: "What are Geospatial Indexes in MongoDB?",
        answer: "Geospatial indexes in MongoDB are special indexes used to efficiently store and query geospatial data, such as points, lines, and polygons. They are used in applications that require geospatial queries or analysis, such as location-based services, geographic information systems, and mapping applications. Store the geospatial data in a collection using the GeoJSON format. Create a geospatial index on the desired field(s) using the `createIndex()` method. Perform geospatial queries using MongoDB's geospatial operators such as `$near`, `$geoWithin`, and `$geoIntersects`. db.places.createIndex({ location: '2dsphere' })"
    },
    {
        question: "How to optimize the performance of a MongoDB database in a MERN stack application?",
        answer: "Strategies include indexing frequently queried fields, using the appropriate data types, leveraging the aggregation framework for complex queries, and considering sharding for large datasets. Additionally, use tools like explain() to analyze query performance and identify potential optimizations."
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
        <h1 className='font-bold text-4xl pt-5'>Node-</h1>
        { nodeQuestions.map((lead, index) => (
            <li>
                <a href={`#node${index}`} className='no-underline text-teal-400 hover:no-underline hover:text-inherit hover:cursor-pointer'>{lead.question}</a>
            </li>
        ))}
        <h1 className='font-bold text-4xl pt-5'>Express-</h1>
        { expressQuestions.map((lead, index) => (
            <li>
                <a href={`#express${index}`} className='no-underline text-teal-400 hover:no-underline hover:text-inherit hover:cursor-pointer'>{lead.question}</a>
            </li>
        ))}
        <h1 className='font-bold text-4xl pt-5'>MongoDB-</h1>
        { mongodbQuestions.map((lead, index) => (
            <li>
                <a href={`#mongo${index}`} className='no-underline text-teal-400 hover:no-underline hover:text-inherit hover:cursor-pointer'>{lead.question}</a>
            </li>
        ))}
        { reactQuestions.map((lead, index) => (
            <li>
                <h1 className='no-underline text-teal-400 hover:no-underline lg:text-4xl' id={index}>{lead.question}</h1>
                <p className='lg:text-2xl text-teal-100 pt-3 pb-5'>{lead.answer}</p>
            </li>
        ))}
        <button className='fixed right-10 bottom-7 bg-white text-teal-800 w-10 h-10 rounded-full flex justify-center items-center'><a href="#react"><BsArrow90DegUp /></a></button>
        { nodeQuestions.map((lead, index) => (
            <li>
                <h1 className='no-underline text-teal-400 hover:no-underline lg:text-4xl' id={`node${index}`}>{lead.question}</h1>
                <p className='lg:text-2xl text-teal-100 pt-3 pb-5'>{lead.answer}</p>
            </li>
        ))}
        { expressQuestions.map((lead, index) => (
            <li>
                <h1 className='no-underline text-teal-400 hover:no-underline lg:text-4xl' id={`express${index}`}>{lead.question}</h1>
                <p className='lg:text-2xl text-teal-100 pt-3 pb-5'>{lead.answer}</p>
            </li>
        ))}
        { mongodbQuestions.map((lead, index) => (
            <li>
                <h1 className='no-underline text-teal-400 hover:no-underline lg:text-4xl' id={`mongo${index}`}>{lead.question}</h1>
                <p className='lg:text-2xl text-teal-100 pt-3 pb-5'>{lead.answer}</p>
            </li>
        ))}
    </div>
  )
}