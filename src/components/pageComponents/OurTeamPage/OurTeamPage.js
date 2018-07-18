import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading'
import './OurTeamPage.css';
import TeamMember from '../../pageComponents/OurTeamPage/TeamMember/TeamMember';

const PATH_STYLISTS = process.env.REACT_APP_API_PATH;

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
        fetch(`${PATH_STYLISTS}/stylists`)
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
                   <TeamMember src={stylist.image} alt={stylist.alt} name={stylist.name} description={stylist.description}/>
               )}

           </div>
        )
    }
}

export  default OurTeamPage;


