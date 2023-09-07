import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TaskPage from "./pages/TaskPage"
import TaskFormPage from "./pages/TaskFormPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./ProtectedRoute"


import { AuthProvider } from "./context/AuthContext"
import { TaskProvider } from "./context/TaskContext";

function App ()
{
  return (
    <>
      <AuthProvider>
        <TaskProvider >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/register" element={ <RegisterPage /> } />

              <Route element={ <ProtectedRoute /> }>
                <Route path="/tasks" element={ <TaskPage /> } />
                <Route path="/add-task" element={ <TaskFormPage /> } />
                <Route path="/tasks/:id" element={ <TaskFormPage /> } />
                <Route path="/profile" element={ <ProfilePage /> } />
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>

    </>
  )
}

export default App