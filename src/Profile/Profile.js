import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; 
import './Profile.css';
function Profil({fullName,bio,profession,handleName,children}){
    return (
        <div className='mise'>
        <div className='name'>
        <h1>FullName</h1>
        <h3>{fullName}</h3><Button variant="info" onClick={() =>handleName(fullName)}>Full Name</Button>
        </div>
        <div className='bio'>
        <h1>BIO</h1>
        <p>{bio}</p>
        </div>
        <div className='pro'>
        <h1>Profession</h1>
        <h3>{profession}</h3>
        {children}
        </div>
        
        </div>

    )
}

export default Profil
Profil.defaultProps = {
    fullName:"ALADIN",
    bio:"Vide",
    profession:"#"
}


Profil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName:PropTypes.func
        
    }