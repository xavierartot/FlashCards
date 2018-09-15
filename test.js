  Object.values(state).forEach((key) => {
    alert(key.title) // the name of the current key.
    Object.entries(key.questions)
      .map(e => alert(e))
    // alert(state[key]) // the value of the current key.
  })

  Object.values(state).forEach((key) => {
    alert(key.title, key.questions)
    key.questions.map( (e) => {
      return alert(e.answer)
    })
  })
{
  "JavaScript": Object {
    "questions": Array [
      Object {
        "answer": "The combination of a function and the lexical environment within which that function was declared.",
        "question": "What is a closure?",
      },
    ],
    "title": "JavaScript",
  },
  "React": Object {
    "questions": Array [
      Object {
        "answer": "A library for managing user interfaces",
        "question": "What is React?",
      },
      Object {
        "answer": "The componentDidMount lifecycle event",
        "question": "Where do you make Ajax requests in React?",
      },
    ],
    "title": "React",
  },
}
