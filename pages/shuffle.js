import React from 'react'
import Keywords from './keywords.js'

function shuffle(event) {
  event.preventDefault();

  const data = {
    interests: [],
    important: [],
    skills: [],
    likes: [],
  };

  for (let element of event.target.elements) {
    const value = element.value;
    if (!value) continue;
    // TODO
  }

  console.log(JSON.stringify(data));
  
  // TODO generate random 4-phrase combination
}

export default function Shuffle() {
  return (
    // TODO div for showing Output

    <form onSubmit={shuffle}>
      <Keywords
        title="Interessiert mich"
        phraseKey="interests"
        phrases={[]}
      />

      <Keywords
        title="Ist mir wichtig"
        phraseKey="important"
        phrases={[]}
      />

      <Keywords
        title="Kann ich gut"
        phraseKey="skills"
        phrases={[]}
      />

      <Keywords
        title="Tue ich gerne"
        phraseKey="likes"
        phrases={[]}
      />

      <button type="submit">Shuffle!</button>
    </form>
  );
}
