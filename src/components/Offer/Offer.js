import React from 'react'
import Card from './Card';
export default function Offer(){
    return(
        <>
        <div id='offer' className="offer-main-container">
            <h1>What do we offer?</h1>
        <div className="offer-container">
            <Card img="images/image4.png" desc="At Chota Vakil, we recognize that traditional methods of learning can often be dry and uninspiring, especially for children. That's why we've embraced the concept of gamification. Gamification is the art of incorporating elements of play and game design into educational content. Our platform takes this approach to heart, turning the process of learning about children's rights into an enjoyable adventure."/>

        <Card img="images/image5.png" desc="We are deeply committed to ensuring that every child, regardless of their background or circumstances, has equal access to high-quality legal education. In India, disparities in educational opportunities are all too common, with many underserved communities facing significant barriers to accessing quality resources. At Chota Vakil, we are dedicated to breaking down those barriers."/>

        <Card img="images/image6.png" desc="Our mission extends beyond mere education; it centers on empowerment. We firmly believe that knowledge is only the first step towards meaningful change. We aspire to equip children with the confidence, skills, and awareness they need to stand up for their rights and advocate for themselves and their peers."/>
        </div>
        </div>
        </>
    );
}