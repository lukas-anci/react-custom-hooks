import Section from '../UI/Section';
import TaskForm from './TaskForm';
import { dbUrl } from './../../config';
import useHttp from './../../hooks/use-http';

const NewTask = (props) => {
  const makeTask = () => {
    props.onAddTask();
  };

  const reqConfig = {
    url: `${dbUrl}tasks.json`,
    method: 'POST',
    body: true,
    headers: {
      'Content-tyoe': 'application/json',
    },
  };

  const {
    sendRequest: enterTaskHandler,
    isLoading,
    error,
  } = useHttp(reqConfig, makeTask);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
