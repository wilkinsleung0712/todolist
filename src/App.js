import './App.css';
import TodoList from "./pages/Todolist";
import {Provider as TodoProvider} from "./context/TodoContext"
import NewTodo from "./pages/NewTodo";
import {Container} from "@material-ui/core";
import WithErrorBoundary from "./hocs/ErrorBoundary";
import {APIErrorContextProvider} from "./context/ErrorContext";
import APIErrorNotification from "./components/APIErrorNotification";


function App() {
  return (
    <div className="App">
        {/*<WithErrorBoundary>*/}
        <APIErrorContextProvider>
            <TodoProvider>
                <Container>
                    <NewTodo />
                    <TodoList/>
                    <APIErrorNotification/>
                </Container>
            </TodoProvider>
        </APIErrorContextProvider>
        {/*</WithErrorBoundary>*/}
    </div>
  );
}

export default App;
