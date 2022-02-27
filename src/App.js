import Title from "./Title";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import data from "./data.json";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const prevPerson = () => {
    if (index <= 0) {
      setIndex(index - 1);
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextPerson = () => {
    setIndex(index + 1);
    if (index >= data.length - 1) {
      setIndex(0);
    }
    console.log(index);
  };

  const randomPerson = () => {
    let rndmNumber = Math.floor(Math.random() * data.length);
    if (rndmNumber === index) {
      randomPerson();
    } else {
      setIndex(rndmNumber);
    }
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center  text-center mx-auto bg-blue-100  '>
      <Title />
      <div className='card max-w-fit bg-base-100 shadow-xl mt-20  '>
        <figure className='px-10 pt-10'>
          <img src={image} alt='Shoes' className='inline-block object-cover h-44 w-44 rounded-full ring-4 bg-auto shadow-sky-600 shadow-2xl ring-sky-600' />
        </figure>
        <div className='card-body items-center text-center gap-4 prose'>
          <h2 className='my-0 uppercase '> {name} </h2>
          <h4 className='text-sky-600 uppercase '>{job}</h4>
          <p>{text}</p>
          <div className='card-actions flex flex-col'>
            <div className='mx-auto '>
              <button className='mr-3'>
                <FaArrowAltCircleLeft className='text-4xl fill-sky-600 hover:fill-sky-900 ' onClick={prevPerson} />
              </button>
              <button className='ml-3  '>
                <FaArrowAltCircleRight className='text-4xl  fill-sky-600 hover:fill-sky-900 ' onClick={nextPerson} />
              </button>
            </div>
          </div>
        </div>
        <button className='btn btn-primary bg-sky-600 hover:bg-sky-900   border-0' onClick={randomPerson}>
          Random Person
        </button>
      </div>
    </div>
  );
}

export default App;
