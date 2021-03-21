import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { loadTasks } from '../../../redux/tasksRedux'


const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.data)

  useEffect(() => {
    dispatch(loadTasks())
  },[])

  return (
    <div>
      {tasks?.map((task, id) => { return <div key={id}>{task.description}</div>})}
      { children }
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;