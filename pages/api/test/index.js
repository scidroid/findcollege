import questions from 'datasets/sat';

const getRandomQuestions = (arrs, n) =>
  arrs.map((arr) => arr.sort(() => 0.5 - Math.random()).slice(0, n));

const getTest = (req, res) => {
  res
    .status(200)
    .json([
      ...getRandomQuestions([...questions.math, ...questions.writing], 5)
    ]);
};

export default getTest;
