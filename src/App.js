import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Stepper from './components/Stepper';
import data from './data/stepper.json';
function App() {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [otp, setOtp] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [social, setSocial] = useState([])


  const handleNext = () => {
    setStep(step + 1);
  }

  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  return (
    <div>
      <Navbar />
      {
        step > 1 &&
        <div className='w-50 m-auto'>
          <button
            onClick={() => { setStep(step - 1) }}
            className="btn btn-primary d-block mt-5"
          >
            Back
          </button>
        </div>
      }
      {step === 1 &&
        <Stepper
          data={data.value.data1}
          next={handleNext}
          disabled={userName !== "" ? false : true}
          value1={userName}
          set1={setUserName}
        />
      }
      {step === 2 &&
        <Stepper
          data={data.value.data2}
          next={handleNext}
          value1={fullName}
          value2={email}
          value3={password}
          set1={setFullName}
          set2={setEmail}
          set3={setPassword}
          disabled={
            fullName !== "" ? email.includes("@") && email.includes(".com") && !email.includes("@.com") ? re.test(password) ? false : true : true : true
          }
        />
      }
      {step === 3 &&
        <Stepper
          data={data.value.data3}
          next={handleNext}
          email={email}
          value1={otp}
          set1={setOtp}
          disabled={otp !== "" ? false : true}
        />
      }
      {step === 4 &&
        <Stepper
          data={data.value.data4}
          next={handleNext}
          value1={location}
          set1={setLocation}
          disabled={location !== "" ? false : true}
        />
      }
      {step === 5 &&
        <Stepper
          data={data.value.data5}
          next={handleNext}
          value1={title}
          set1={setTitle}
          disabled={title !== "" ? false : true}
        />
      }
      {step === 6 &&
        <Stepper
          data={data.value.data6}
          next={handleNext}
          value4={about}
          set4={setAbout}
          disabled={about !== "" ? false : true}
        />
      }
      {step === 7 &&
        <Stepper
          data={data.value.data7}
          next={handleNext}
          gender={gender}
          setGender={setGender}
          disabled={gender !== "" ? false : true}
        />
      }
      {step === 8 &&
        <Stepper
          data={data.value.data8}
          next={handleNext}
          social={social}
          setSocial={setSocial}
        />
      }

    </div>
  );
}

export default App;
