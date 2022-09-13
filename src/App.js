import logo from './logo.svg';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import ActivityPage from './components/activity/ActivityPage';
import { useEffect } from 'react';
import { setVisibility } from './redux/slices/ModalSlice';
import LoginModal from './components/LoginModal';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { getActivity } from './redux/slices/ActivitySlice';

function App() {
  const visible = useSelector(state => state.modal.visible);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      dispatch(setVisibility(true));
      dispatch(getActivity('belfry-of-ghent'))
    }
  })
  return (
    <div className="App">
      {/* <LoginModal /> */}
      <ActivityPage />

    </div>
  );
}

export default App;
