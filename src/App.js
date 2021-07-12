import './css/styles.css';
import './css/fonts.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import M from 'materialize-css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContents from './components/HomeContents';

function App() {
  document.addEventListener('DOMContentLoaded', function() {
    var elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy);

    var elemsTabs = document.querySelectorAll('.tabs');
    M.Tabs.init(elemsTabs);
  });

  return (
    <div className="App">
      {/*---==== Navbar Section  ====---*/}
      <Navbar />
      {/*---==== end of Navbar Section  ====---*/}

      {/*---==== Contents Sections  ====---*/}
      <HomeContents />
      {/*---==== end of Contents Sections  ====---*/}

      {/*---==== Footer Section ====---*/}
      <Footer />
      {/*---==== end of Footer Section ====---*/}
    </div>
  );
}

export default App;
