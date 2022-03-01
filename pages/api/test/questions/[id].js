import questions from 'datasets/sat';

const getQuestion = (req, res) => {
  let result;

  const id = req.query.id;

  if (id.charAt(0) === 'm') {
    result = questions.math.find((q) => q.id === id);
  } else if (id.charAt(0) === 'w') {
    result = questions.writing.find((q) => q.id === id);
  }

  if (result !== undefined) {
    res.status(200).json(result);
  } else {
    res.status(404).end();
  }
};

export default getQuestion;
