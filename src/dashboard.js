import React from 'react';
import {Link} from 'react-router-dom';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
  return (
    <div className="container">
    <div className="container-wrap">    
    <h4>Dashboard</h4>
    <div className="wrapper">
   <div  className="row">
       <div className="col-md-8">
       <h4>Lorem ipsum dolor sit amet <span className="flaticon-download"></span></h4>    
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim 
       ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       </p>
       </div>
       <div className="col-md-4 text-center anch">
       <button>click somthing</button>  
       <Link to="/">anchor tag</Link>  
       </div>
   </div>
   <div  className="row">
       <div className="col-md-4">
           <img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&dpr=2&auto=format&fit=crop&w=416&h=312&q=60" alt="" />
       </div>
       <div className="col-md-4">
       <h4>ronnie swanger</h4>
       <ul>
       <li><span className="flaticon-pin ficon"></span> sector 64, noida india.</li>
       <li><span className="flaticon-call-answer ficon"></span> (010) 56 55 56 54</li>
       <li><span className="flaticon-avatar ficon"></span> ronnieswangwr</li>
       <li><span className="flaticon-email ficon"></span> ronnie@gmail.com</li>
       <li><span className="flaticon-calendar ficon"></span> www.ronnieswgf.xyz</li>
       <li className="flag">  <span className="flaticon-avatar ficonavat"></span>
       <span className="flaticon-avatar ficonavat"></span>
       <span className="flaticon-avatar ficonavat"></span>
        </li>
       </ul>
       </div>
   </div>
   </div>
   <div className="wrapper">
   <div  className="row">
   <h4 className="head">Lorem ipsum dolor<Link to="/">Lorem ipsum dolor</Link> </h4>
       <div className="col-md-3">
           <div className="divrap">
       <h5> Lorem ipsum dolor sit  <span className="flaticon-cancel"></span></h5>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. <button>Lorem ipsum dolor</button>
        </div>
       </div>
       <div className="col-md-3">
       <div className="divrap">
       <h5> Lorem ipsum dolor sit <span className="flaticon-cancel"></span></h5>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.  <button>Lorem ipsum dolor</button>
        </div>
        </div>
        <div className="col-md-6">
        <div className="divrap">
        <h5> Lorem ipsum dolor sit <span className="flaticon-cancel"></span></h5>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim 
       ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
       consequat.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       <button className="border">Lorem ipsum dolor</button>
        </div>
        </div>
        </div>
   </div>


   <div  className="row">
       <div className="col-md-6" style={{paddingRight:0}}>
       <div className="wrapper mid">
       <h4> Lorem ipsum dolor sit <Link to="/">ipsum dolor  <span className="flaticon-download"></span></Link></h4>
       <ul>
       <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
       </ul></div></div>

       <div className="col-md-6" style={{paddingLeft:0}}>
       <div className="wrapper mid">
       <h4> Lorem ipsum dolor sit <Link to="/">ipsum dolor  <span className="flaticon-download"></span></Link></h4>
       <ul>
       <li>
       <div className="left-icon">
           <span className="flaticon-avatar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum dolo amet, <Link to="/">consectetur </Link> adipiscing iusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum dolor sit amet, <Link to="/">consectetur </Link> adipiscing elit,  eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum dolor sit amet, <Link to="/">consectetur </Link> adipiscing elit,  do eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
       </ul>
       </div></div>
   </div>

   <div  className="row">
   <div className="col-md-6" style={{paddingRight:0, marginTop:'20px'}}>
       <div className="wrapper mid">
       <h4> Lorem ipsum dolor sit <Link to="/">ipsum dolor  <span className="flaticon-download"></span></Link></h4>
       <ul>
       <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-calendar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum amet, <Link to="/"> consectetur </Link> adipiscing<Link to="/">consectetur </Link>sed eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
       </ul></div></div>
       <div className="col-md-6" style={{paddingLeft:'30px', marginTop:'20px'}}>
       <div className="wrapper mid another">
       <h4> Lorem ipsum dolor sit <Link to="/">ipsum dolor  <span className="flaticon-download"></span></Link></h4>
       <ul className="ano-ul">
       <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span><span className="tag"><Link to="/">Lorem </Link> </span>
           </div>
           <div className="right-icon">
           <span className="title"> ipsum amet</span>
           <div className="right-bar">
           <div className="bar"> <div className="minibar"></div> </div> 
           <span className="title2"> ipsum amet</span>
           <div className="bar bar2"> <div className="minibar"></div> </div>
           </div>
         
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span><span className="tag"><Link to="/">Lorem </Link> </span>
           </div>
           <div className="right-icon">
           <span className="title"> ipsum amet</span>
           <div className="right-bar">
           <div className="bar"> <div className="minibar"></div> </div> 
           <span className="title2"> ipsum amet</span>
           <div className="bar bar2"> <div className="minibar"></div> </div>
           </div>
         
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span><span className="tag"><Link to="/">Lorem </Link> </span>
           </div>
           <div className="right-icon">
           <span className="title"> ipsum amet</span>
           <div className="right-bar">
           <div className="bar"> <div className="minibar"></div> </div> 
           <span className="title2"> ipsum amet</span>
           <div className="bar bar2"> <div className="minibar"></div> </div>
           </div>
         
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span><span className="tag"><Link to="/">Lorem </Link> </span>
           </div>
           <div className="right-icon">
           <span className="title"> ipsum amet</span>
           <div className="right-bar">
           <div className="bar"> <div className="minibar"></div> </div> 
           <span className="title2"> ipsum amet</span>
           <div className="bar bar2"> <div className="minibar"></div> </div>
           </div>
         
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span><span className="tag"><Link to="/">Lorem </Link> </span>
           </div>
           <div className="right-icon">
           <span className="title"> ipsum amet</span>
           <div className="right-bar">
           <div className="bar"> <div className="minibar"></div> </div> 
           <span className="title2"> ipsum amet</span>
           <div className="bar bar2"> <div className="minibar"></div> </div>
           </div>
         
           </div>
           </li>
       </ul></div></div>
   </div>


   <div  className="row">
   <div className="col-md-6" style={{paddingRight:0, marginTop:'15px'}}>
       <div className="wrapper mid">
       <h4> Lorem ipsum dolor sit <Link to="/">ipsum dolor  <span className="flaticon-download"></span></Link></h4>
       <ul>
       <li>
       <div className="left-icon">
           <span className="flaticon-avatar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum dolo amet, <Link to="/">consectetur </Link> adipiscing iusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum dolor sit amet, <Link to="/">consectetur </Link> adipiscing elit,  eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
           <li>
           <div className="left-icon">
           <span className="flaticon-avatar"></span>
           </div>
           <div className="right-icon">
           <Link to="/">Lorem </Link> ipsum dolor sit amet, <Link to="/">consectetur </Link> adipiscing elit,  do eiusmod 
           <p>consectetur adipiscing elit, sed do </p>
           </div>
           </li>
       </ul>
       </div></div>
   
   </div>
    </div>
    </div>
  );
  }
}

export default Dashboard;
