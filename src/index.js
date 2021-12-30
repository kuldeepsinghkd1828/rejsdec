import reactDom from "react-dom";
import Header from './components/header'
import Footer from './components/footer'
import Body from './components/body'
reactDom.render(<Header></Header>, document.getElementById('header'))
reactDom.render(<Body></Body>, document.getElementById('body'))
reactDom.render(<Footer></Footer>, document.getElementById('footer'))