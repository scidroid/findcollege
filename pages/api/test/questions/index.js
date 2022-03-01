import questions from 'datasets/sat';

const allQuestions = (req, res) => {
  res.status(200).json(questions);
};

export default allQuestions;
