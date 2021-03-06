import React from 'react'
import Keywords from './keywords.js'

function pickRandomElementFrom(list) {
  if (list.length == 0) return '-';
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export default function Shuffle() {
  const [combo, setCombo] = React.useState(['-', '-', '-', '-']);

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
      let column;
      for (let attr of element.attributes) {
        if (attr.name == 'data-column') {
          column = attr.nodeValue;
          break;
        }
      }
      if (!column) continue;
      data[column].push(value);
    }

    setCombo([
      pickRandomElementFrom(data.interests),
      pickRandomElementFrom(data.important),
      pickRandomElementFrom(data.skills),
      pickRandomElementFrom(data.likes)
    ]);
  }

  let i = 0;
  return (
    <div>
      <div className="combo">
        <ul>
          {combo.map(part => <li key={i++}>{part}</li>)}
        </ul>
      </div>

      <form onSubmit={shuffle} className="shuffle">
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

        <div className="action">
          <button type="submit">Shuffle!</button>
        </div>
      </form>
    </div>
  );
}
