import { useEffect, useState } from "react"
import classes from "./styles.module.css";
import TodoItem from "./components/TodoItem";
import TodoDetail from "./components/TodoDetail";
import { Skeleton } from "@mui/material";

function App() {
  
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fethcListOfTodos(){
    try{
      setLoading(true);
      const apiresponse = await fetch('https://dummyjson.com/todos');
      const result = await apiresponse.json();

      console.log(result);
      if(result?.todos && result?.todos?.length > 0){
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      }else{
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');
      }
    }
    catch(error){
      console.log(error);
      setErrorMsg('Some error has been occured')
    }
  }
  
  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
      console.log(getCurrentTodoId);

      try{
        const apiResponse= await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
        const details = await apiResponse.json();
        if(details){
          setTodoDetails(details)
          setOpenDialog(true)
        }else{
          setTodoDetails(null)
          setOpenDialog(false)
        }
      }catch(erroe){
        console.log(error);
      }
  }

  useEffect(() => {
      fethcListOfTodos()
  },[])

  if(loading) return <Skeleton variant="rectangular" width={650} height={650}/>

  return (
    <>
      <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>Todo list</h1>
      <div className={classes.todoListWrapper}>
    {todoList && todoList.length > 0?todoList.map((todoItem)=> <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem}/>):null}
      </div>
      <TodoDetail setTodoDetails={setTodoDetails} setOpenDialog={setOpenDialog} todoDetails={todoDetails} openDialog={openDialog} />
      </div>
    </>
  )
}

export default App
