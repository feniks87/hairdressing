import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading'
import './OurTeamPage.css';
import Pic1 from '../../../assets/images/2.jpg';
import Pic2 from '../../../assets/images/3.jpg'
import Pic3 from '../../../assets/images/5.jpg'
import Pic4 from '../../../assets/images/4.jpg'
import TeamMember from '../../pageComponents/OurTeamPage/TeamMember/TeamMember';

class OurTeamPage extends Component {

    render() {
        return (
           <div className="container">
               <Heading>Our Team</Heading>
               <TeamMember src={Pic1} alt="Anna Stylist" name="Anna" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />
               <TeamMember src={Pic2} alt="Bella Stylist" name="Bella" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />
               <TeamMember src={Pic3} alt="Peter Stylist" name="Peter" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />
               <TeamMember src={Pic4} alt="Valentina Stylist" name="Valentina" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                   pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                   hendrerit risus, sed porttitor quam." />

           </div>
        )
    }
}

export  default OurTeamPage;


