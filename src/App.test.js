// src/App.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

test("renders Task Form and allows adding a task", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Simulate user input for task title, description, and due date
  fireEvent.change(screen.getByPlaceholderText(/task title/i), {
    target: { value: "New Task" },
  });
  fireEvent.change(screen.getByPlaceholderText(/task description/i), {
    target: { value: "This is a new task" },
  });

  fireEvent.click(screen.getByText(/add task/i));

  // Check if the task is added to the list
  expect(screen.getByText(/new task/i)).toBeInTheDocument();
});
