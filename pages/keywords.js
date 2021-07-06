import React from 'react'

export default function Keywords(props) {
  const [ phrases, setPhrases ] = React.useState([]);
  const [ focus, setFocus ] = React.useState(1);
  const activeInput = React.useRef(null);

  React.useEffect(() => {
    activeInput.current.focus();
  });

  function updatePhrases(event) {
    if (event.key != 'Enter') return;

    event.preventDefault();

    const id = parseInt(event.target.id);
    const text = event.target.value;

    if (!text) return;
    if (id > phrases.length) {
      phrases.push({ id: id, text: text });
    } else {
      for (let phrase of phrases) {
        if (phrase.id == id) {
          phrase.text = text;
          break;
        }
      }
    }

    setFocus(id + 1);
    setPhrases([...phrases]);
  }

  if (focus == phrases.length + 1) {
    return (
      <div className="keywords">
        <fieldset id={props.phraseKey}>
        <legend>{props.title}</legend>

        {phrases.map(phrase =>
          <input
            type="text"
            id={phrase.id}
            key={phrase.id}
            data-column={props.phraseKey}
            defaultValue={phrase.text}
          />
        )}

        <input
          type="text"
          id={phrases.length + 1}
          key={phrases.length + 1}
          data-column={props.phraseKey}
          onKeyDown={updatePhrases}
          ref={activeInput}
        />
        </fieldset>
      </div>
    );
  } else {
    return (
      <div className="keywords">
        <fieldset id={props.phraseKey}>
        <legend>{props.title}</legend>

        {phrases.map(phrase => {
          if (focus == phrase.id) {
            return (<input
              type="text"
              id={phrase.id}
              key={phrase.id}
              data-column={props.phraseKey}
              defaultValue={phrase.text}
              ref={activeInput}
            />);
          } else {
            return (<input
              type="text"
              id={phrase.id}
              key={phrase.id}
              data-column={props.phraseKey}
              defaultValue={phrase.text}
            />);
          }
        })}

        <input
          type="text"
          id={phrases.length + 1}
          key={phrases.length + 1}
          data-column={props.phraseKey}
          onKeyDown={updatePhrases}
        />
        </fieldset>
      </div>
    );
  }
}
