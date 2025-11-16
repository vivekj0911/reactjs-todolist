import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

export default function TodoItem({todo,fetchDetailsOfCurrentTodo}) {
    console.log(todo);
  return (
    <Card sx={{
        maxWidth:500,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    }}>
        <CardContent>
            <Typography variant='h5' color={"text.secondary"}>
                {todo?.todo}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>{fetchDetailsOfCurrentTodo(todo?.id)}} sx={{
                backgroundColor:'#000000',
                color:'#fff',
                opacity:'0.75',
                '&:hover':{
                    backgroundColor:'#000000',
                    color:'#fff',
                    opacity:'1',
                }

            }}>Details
            </Button>
        </CardActions>
    </Card>
  )
}
