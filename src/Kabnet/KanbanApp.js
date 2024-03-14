import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
} from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const BoardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
}));

const BoardContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const ColumnContainer = styled(Grid)(({ theme }) => ({
  justifyContent: 'flex-start',
}));

const Column = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  minWidth: 250,
  backgroundColor: theme.palette.background.paper,
}));

const TaskList = styled(Box)(({ theme }) => ({}));

const Task = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.grey[200],
}));

function KanbanApp() {
  const [boards, setBoards] = useState([
    {
      title: 'Platform Launch',
      columns: [
        { title: 'To Do' },
        { title: 'In Progress' },
        { title: 'Done' },
      ],
      tasks: {
        'To Do': [
          { id: 1, content: 'Task 1' },
          { id: 2, content: 'Task 2' },
        ],
        'In Progress': [],
        'Done': [],
      },
    },
  ]);

  const handleAddTask = (boardTitle, columnTitle, taskContent) => {
    setBoards((prevBoards) => {
      const newBoards = [...prevBoards];
      const boardIndex = newBoards.findIndex((board) => board.title === boardTitle);
      const newColumnTasks = newBoards[boardIndex].tasks[columnTitle].slice();
      newColumnTasks.push({ id: Date.now(), content: taskContent });
      newBoards[boardIndex].tasks[columnTitle] = newColumnTasks;
      return newBoards;
    });
  };

  return (
    <Container>
      <Header>
        <BoardTitle>III Kanban</BoardTitle>
        <Button variant="contained" size="small">
          Add New Board
        </Button>
      </Header>
      <BoardContent>
        {boards.map((board) => (
          <Box key={board.title}>
            <Typography variant="h6">{board.title}</Typography>
            <ColumnContainer container spacing={2}>
              {board.columns.map((column) => (
                <Column key={column.title}>
                  <Typography variant="subtitle1">{column.title}</Typography>
                  <TaskList>
                    {board.tasks[column.title].map((task) => (
                      <Task key={task.id}>{task.content}</Task>
                    ))}
                  </TaskList>
                </Column>
              ))}
            </ColumnContainer>
            <Button variant="contained" size="small" onClick={() => handleAddTask(board.title, 'To Do', '')}>
              Add New Task
            </Button>
          </Box>
        ))}
      </BoardContent>
    </Container>
  );
}

export default KanbanApp;
