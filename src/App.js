
import './App.css';
import Profil from './Profile/Profile';

function App() {
  const handleName=(name)=>{alert(name)}
  var prof = {
    fullName : "Hakim Ala Eddine",
    bio : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    profession: "Technicien supérieur en informatique"
  };
  return (
    <div className="App">
        
        <Profil fullName={prof.fullName} bio={prof.bio} profession={prof.profession} handleName={handleName}>
         <div className='image'> <img src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg" alt="#"></img></div>
        </Profil>
        
    </div>
  );
}

export default App;
