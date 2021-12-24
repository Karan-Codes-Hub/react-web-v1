import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/practice.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='PRACTICE'
              path='/Practice'
            />
           
          </ul>
         
          <CardItem
              src='images/opportunity.jpg'
              text='Get to know about the various opportunities and jobs'
              label='Opportunities/Jobs'
              path='/Opportunity'
            />
            <CardItem
              src='images/event.jpg'
              text='Take part in the Events to get updated'
              label='Events'
              path='/Events'
            />
            
            <CardItem
              src='images/community.jpg'
              
              text='A place where developers meet'
              label='Community'
              path='/community'
            />
            <CardItem
              src='images/contactt.jpg'
              text = 'Feel free to contact us we are very close to you'
              label='Contact Us'
              path='/contact'
            />
          
        </div>
      </div>
    </div>
  );
}

export default Cards;