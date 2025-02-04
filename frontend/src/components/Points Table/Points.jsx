import React from 'react';
import Cards from './Cards';
import CARD1 from '/CARD1.png';
import CARD2 from '/CARD2.png';
import CARD3 from '/CARD3.png';
import CARD4 from '/CARD4.png';

function Points() {
  const eventsData = [
    { eventName: '100m Sprint', winnerName: 'John Doe', points: '1st' },
    { eventName: 'Long Jump', winnerName: 'Jane Smith', points: '2nd' },
    { eventName: 'High Jump', winnerName: 'Sam Brown', points: '3rd' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Cards houseName="Gryffindor" score={63} events={eventsData} image={CARD1} />
      <Cards houseName="Hufflepuff" score={56} events={eventsData} image={CARD2} />
      <Cards houseName="Ravenclaw" score={52} events={eventsData} image={CARD3} />
      <Cards houseName="Slytherin" score={50} events={eventsData} image={CARD4} />
    </div>
  );
}

export default Points;
