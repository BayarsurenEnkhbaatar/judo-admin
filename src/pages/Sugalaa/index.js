import React from 'react';

const Sugalaa = () => {
  const draw_number = 8;
  const model_athlete = { id: 111, name: 'null' };

  const matches = [
    { id: 1, match_number: 1, athlete1: '', athlete2: '', round: 1 },
    { id: 2, match_number: 2, athlete1: '', athlete2: '', round: 1 },
    { id: 3, match_number: 3, athlete1: '', athlete2: '', round: 1 },
    { id: 4, match_number: 4, athlete1: '', athlete2: '', round: 1 },
  ];

  const athletes = [
    { id: 1, name: 'Athlete 1' },
    { id: 2, name: 'Athlete 2' },
    { id: 3, name: 'Athlete 3' },
    { id: 4, name: 'Athlete 4' },
    { id: 5, name: 'Athlete 5' },
    { id: 6, name: 'Athlete 6' },
  ];

  const drawRandomAthletes = () => {
    const drawnAthletes = [
      ...athletes.slice(0, draw_number),
      ...Array(8 - athletes.length).fill(model_athlete),
    ];
    const shuffledAthletes = [...drawnAthletes].sort(() => Math.random() - 0.5);

    console.log(shuffledAthletes);

    const shuffledMatches = matches.map((match, index) => {
      const athlete1Index = index * 2;
      const athlete2Index = index * 2 + 1;

      if (
        shuffledAthletes[athlete1Index].id === 111 &&
        shuffledAthletes[athlete2Index].id === 111
      ) {
        // If both athletes are model_athlete, find a replacement for athlete2
        const replacementAthleteIndex = findReplacementAthleteIndex(shuffledAthletes);
        athlete2Index = replacementAthleteIndex;
      }

      return {
        ...match,
        athlete1: shuffledAthletes[athlete1Index], // Access athlete object using index
        athlete2: shuffledAthletes[athlete2Index],
      };
    });

    console.log(shuffledMatches);
  };

  // Function to find a replacement athlete index (implement this logic)
  const findReplacementAthleteIndex = (shuffledAthletes) => {
    // ... logic to find a suitable replacement athlete index
  };

  return (
    <div>
      <button onClick={drawRandomAthletes}>Draw 8 Athletes</button>
    </div>
  );
};

export default Sugalaa;
