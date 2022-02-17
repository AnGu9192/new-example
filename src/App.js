import logo from './logo.svg';
import './App.css';
import Great from './components/Greet';
import Welcome from './components/Welocome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClasClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
function App() {
  return (
    <div className="App">
      <Inline />
         {/*<StyleSheet primary={true} />
     <NameList />
      <UserGreeting />
      <ParentComponent />
   <EventBind />
    <FunctionClick />
    <ClasClick />
    <Counter />
    <Message />
    <Great name='ann'/>
   <p>I am Child</p>
   <Great name='mat' />
   <Great name='tik' />

 <Welcome />
 <Hello /> */}
    </div>
  );
}

export default App;
