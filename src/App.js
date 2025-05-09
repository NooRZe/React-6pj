import React from 'react';
import './index.scss';

const questions = [
  {
   title: 'Сколько всего играбельных фракций насчитывает трилогия Dawn of War?',
   variants: ['3', '4', '7', '10'],
   correct: 3, 
  },
  {
    title: 'Сколько существовало легионов первого основания?',
    variants: ['14', '20', '31', '23'],
    correct: 1, 
   },
   {
    title: 'Какой мод для Soulstorm считается самым масштабным по состоянию на 2025 год?',
    variants: ['Ultimate Apocalypse', 'Chaos Daemons', 'Eternal Confrontation', 'Tyranid mod'],
    correct: 0, 
   },
   {
    title: 'Кто является создателем Кодекса Астартес?',
    variants: ['Император человечества', 'Солар Махарий', 'Хорус Луперкаль', 'Робаут Жиллиман'],
    correct: 3, 
   },
   {
    title: 'Какая раса присутствует не по всех играх Dawn of War?',
    variants: ['Эльдары', 'Некроны', 'Хаос', 'Космодесант'],
    correct: 1, 
   },
   {
    title: 'Какой бог хаоса является Владыкой Перемен?',
    variants: ['Слаанеш', 'Тзинч', 'Кхорн', 'Нургл'],
    correct: 1, 
   },
   {
    title: 'У какой расы в Soulstorm можно призвать одновременно наибольшее количество эпических юнитов?',
    variants: ['Хаос', 'Некроны', 'Сестры битвы', 'Империя Тау'],
    correct: 0, 
   },
   {
    title: 'Кто из нижеперечисленных является героем Второй Войны за Армагеддон?',
    variants: ['Магистр Данте', 'Бьорн Разящая Рука', 'Комиссар Ярик', 'Хорус Луперкаль'],
    correct: 2, 
   },
   {
    title: 'Какая раса является главным противником в Dawn of War 2?',
    variants: ['Хаос', 'Орки', 'Эльдары', 'Тираниды'],
    correct: 3, 
   },
  
]

function Result ({correct}) {
  return (
    <div className="result">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvamPAgy-_jhaN3hIKjlkc8YDsyhxniMBBdhZlz36UNDQC_SsdLC2UCoUK8Dmce5DKYk&usqp=CAU" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game ({step, question, onClickVAriant}) {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className='progress'>
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
            <li onClick={() => onClickVAriant(index)} key={text} >{text}</li>
          ))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVAriant = (index) => {
    console.log(step, index);
    setStep(step +1);
    if(index === (question.correct)) {
      setCorrect(correct + 1);
    }
  };

   return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVAriant={onClickVAriant} />) : <Result correct={correct} />
      }
    </div>
  );
}

export default App;
