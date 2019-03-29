import React , {Component} from 'react' ;
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Header extends Component{
    render()
    {
        return(
            <div>

                
            <div align="center">
             <h1>Expert-Tech Dental Lab &reg;</h1> 
             <input  type="search" placeholder="Search ..."/>
             <input  type="submit" value="search"/>    
             </div>
             <hr/>
     
     
             
             <span>
                <details>
                     <summary>Menu</summary>
              <a href="#about">About</a><br/>
              <a href="#portfolio">Portfolio</a><br/>
              <a href="#contact">Contact</a><br/>
            </details>
           </span>
     <center>        
     <span  > 
             <a href="#about">About</a> |
          
             <a href="#portfolio">Portfolio</a> |
           
             <a href="#contact">Contact</a> 
          
        </span>
      </center>
     <hr/>
     </div>
        );
    }
}
class Home extends Component{
    render()
    {
        return(
            <div id="portfolio">
                
                  <h2 >Portfolio</h2>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis arcu vel mollis finibus. Nunc facilisis 
                        vel nisl lacinia cursus. Cras suscipit augue sed volutpat 
                        tincidunt. Aenean dictum tincidunt urna, quis eleifend 
                        quam mattis eu. Integer sollicitudin, nisl faucibus aliquam 
                        ullamcorper, metus sapien scelerisque lorem, at ornare dui 
                        orci non orci. Integer tempus consectetur metus, vitae 
                        blandit nibh aliquam nec. Pellentesque vestibulum arcu eget 
                        ante sollicitudin, id accumsan dui molestie. Suspendisse 
                        vehicula semper dui id congue. Suspendisse sed velit sit 
                        amet velit luctus varius. Ut condimentum tincidunt consequat. 
                        Sed eu ligula non magna scelerisque auctor.
                     </p>
                     <audio controls  loop="audio">
                           <source src="horse.ogg" type="audio/ogg"/>
                           <source src="horse.mp3" type="audio/mpeg"/>
                         Your browser does not support the audio element.
                         </audio>
                     
                     <p>
                        Maecenas feugiat iaculis imperdiet. Duis vitae pellentesque 
                        nunc, eget elementum metus. Nulla sollicitudin bibendum nibh, 
                        sit amet semper tortor. Nunc rhoncus non arcu in scelerisque. 
                        Donec magna mauris, congue ac dignissim rutrum, tincidunt 
                        quis leo. Maecenas dictum orci in magna iaculis, in elementum 
                        felis viverra. Aenean sit amet sapien odio. Donec molestie 
                        est et nisl mattis dictum. Nullam at nibh aliquet, tincidunt 
                        lorem et, facilisis enim. Praesent id felis sit amet quam 
                        dignissim volutpat. Nam nec cursus mi, quis tincidunt justo.
                        Fusce sit amet rutrum lacus.
                        Sed efficitur laoreet nisl,ac faucibus velit hendrerit sit amet. 
                        Phasellus ac orci eget nisi porta accumsan a eget ex. Nam lacinia 
                        dolor at mi tristique rhoncus.Maecenas nisl est, rhoncus id cursus 
                        non, tempor a neque.
                     </p>
                     <p>
                            <b>Sed efficitur laoreet nisl,</b><br/> 
                            <i>ac faucibus velit hendrerit sit amet.</i><br/> 
                            <u>Phasellus ac orci eget nisi porta accumsan a eget ex.</u><br/>
                            <em>Nam lacinia dolor at mi tristique rhoncus.</em><br/>
                            <strong>Maecenas nisl est, rhoncus id cursus non, tempor a neque.</strong>
                     </p>
                  
                  <table>
                        <tr>
                           <th>Month</th>
                           <th>Rent</th>
                           <th>Utilities</th>
                           <th>Groceries</th>
                           <th>Eating Out</th>
                           <th>Entertainment</th>
                        </tr>
                        <tr>
                           <td>August</td>
                           <td>$1500</td>
                           <td>$150</td>
                           <td>$350</td>
                           <td>$100</td>
                           <td>$50</td>
                        </tr>
                     </table>
                     <table border="1" cellpadding="10" cellspacing="0">
                            <tr>
                               <th></th>
                               <th>Month</th>
                               <th>Rent</th>
                               <th colspan="2">Utilities</th>
                               <th>Groceries</th>
                               <th>Eating Out</th>
                               <th>Entertainment</th>
                            </tr>
                             <tr>
                               <td rowspan="3">Fall</td>
                               <td>June</td>
                               <td>$1500</td>
                               <td>$100</td>
                               <td>$50</td>
                               <td>$350</td>
                               <td>$100</td>
                               <td>$50</td>
                            </tr>
                            <tr>
                               <td>July</td>
                               <td>$1500</td>
                               <td>$100</td>
                               <td>$50</td>
                               <td>$350</td>
                               <td>$100</td>
                               <td>$50</td>
                            </tr>
                            <tr>
                               <td>August</td>
                               <td>$1500</td>
                               <td>$100</td>
                               <td>$50</td>
                               <td>$350</td>
                               <td>$100</td>
                               <td>$50</td>
                            </tr>
                         </table>
                         <hr/>
              </div>
        )
    }
}
class Cotact extends Component{
    render()
    {
        return(
            <div id="contact">
                <a id="contact" class="smooth"></a>
                <center>
                <h2 >Contact</h2>
                  <div class="container">
                        <form >
                      
                          <label for="fname">First Name</label> <br/>
                          <input type="text" id="fname" name="firstname" placeholder="Your name.." width="1500px"/> <br/>
                      
                          <label for="lname">Last Name</label> <br/>
                          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/> <br/>
                      
                          <label for="country">Country</label> <br/>
                          <select id="country" name="country"> 
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                          </select> <br/>
                      
                          <label for="subject">Subject</label> <br/>
                          <textarea id="subject" name="subject" placeholder="Write something.."></textarea><br/>
                      
                          <input type="submit" value="Submit"/>
                      
                        </form>
                        </div>
                     </center>
                     <hr/>
                      </div>

        )
    }
}
class Footer extends Component{
    render()
    {
        return(

            <center>
<div id="nav" >
        <h2>Footer</h2>
        
            <a href="#about">About</a> | 
            <a href="#portfolio">Portfolio</a> | 
            <a href="#contact">Contact</a>
        
        <h3>All Copyrights Reserved &copy;</h3>
    </div>
   </center>
        )
    }
}



class Mycomponenet extends Component{
    render()
    {
        return(
            <h1>ANNi dya bs kr na</h1>
            
        )
    }
    
}
ReactDOM.render(<Mycomponenet/>, document.getElementById("anni"));



ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Cotact />, document.getElementById('contact'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
