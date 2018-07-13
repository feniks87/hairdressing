import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading'
import './OurTeamPage.css';
import Pic1 from '../../../assets/images/2.jpg';
import Pic2 from '../../../assets/images/3.jpg'
import Pic3 from '../../../assets/images/5.jpg'
import Pic4 from '../../../assets/images/4.jpg'
import TeamMember from '../../pageComponents/OurTeamPage/TeamMember/TeamMember';

const PATH_STYLISTS = 'http://localhost:3000/api/stylists';

class OurTeamPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };

        this.setStylists = this.setStylists.bind(this);
    }

    setStylists(result) {
        this.setState({ result });
    }

    componentDidMount() {
        fetch(`${PATH_STYLISTS}`)
            .then(response => response.json())
            .then(result => this.setStylists(result))
            .catch(error => console.log(error));
    }

    render() {
        const result = this.state.result;

        console.log(result);
        if (!result) { return null; }

        return (
           <div className="container">
               <Heading>Our Team</Heading>
               {result.map(stylist =>
                   <TeamMember src={Pic1} alt="Anna Stylist" name={stylist.name} description={stylist.description}/>
               )}

           </div>
        )
    }
}

export  default OurTeamPage;


