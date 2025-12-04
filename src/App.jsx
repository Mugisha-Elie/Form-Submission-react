import { useState } from "react";
import './index.css'

const App = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [gender, setGender] = useState("")
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false
    });
    const [resume, setResume] = useState("")
    const [url, setUrl] = useState("")
    const [selectedOption, setSelectedOption] = useState("")
    const [about, setAbout] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const details = [
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            selectedOption,
            about
        ];

        details.forEach(detail => console.log(detail))
        
    };

    const handleSubjectChange = (sub) => {
        setSubjects ((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("")
    };

    return (
        <section className="font-ubuntu text-[0.8rem] w-[60%] flex flex-col gap-3">
            <h1 className="text-center text-[1rem] text-green-600 font-semibold">Form in React</h1>

            <form action="#" method="get" className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <label htmlFor="firstName">FirstName</label>
                    <input 
                    type="text" 
                    id="firstName" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder="Enter first Name" 
                    className="border px-1 border-gray-400 rounded" 
                    required />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName">LastName</label>
                    <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Enter last Name" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    className="border px-1 border-gray-400 rounded" 
                    required />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="border px-1 border-gray-400 rounded" 
                    required />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="contact">Contact</label>
                    <input 
                    type="text" 
                    id="lastName" 
                    value={contact} 
                    onChange={(e) => setContact(e.target.value)} 
                    placeholder="Enter Contact details" 
                    className="border px-1 border-gray-400 rounded" 
                    required/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="gender">Gender*</label>
                    <div className="self-center flex gap-3">
                        <div className="flex items-center gap-1">
                            <input 
                            type="radio" 
                            name="gender" 
                            id="female" 
                            value="female" 
                            checked={gender === "female"} 
                            onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="female">Female</label>
                        </div>
                        

                        <div className="flex items-center gap-1">
                            <input 
                            type="radio" 
                            name="gender" 
                            id="male" 
                            value="male" 
                            checked={gender === "male"} 
                            onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="male">Male</label>
                        </div>

                        <div className="flex items-center gap-1">
                            <input 
                            type="radio" 
                            name="gender" 
                            id="other" 
                            value="other" 
                            checked={gender === "other"} 
                            onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Your Best Subject</label>
                    <div className="self-center flex gap-3">
                        <div className="flex items-center gap-1">
                            <input 
                            type="checkbox" 
                            name="English" 
                            id="english" 
                            value="english"
                            checked={subjects.english === true}
                            onChange={() => handleSubjectChange("english")}
                            /> 
                            <label htmlFor="english">English</label>
                        </div>
                        
                        <div className="flex items-center gap-1">
                            <input 
                            type="checkbox" 
                            name="Maths" 
                            id="maths" 
                            value="maths"
                            checked={subjects.maths === true}
                            onChange={() => 
                                handleSubjectChange("maths")
                            } /> 
                            <label htmlFor="maths">Maths</label>
                        </div>

                        <div className="flex items-center gap-1">
                            <input 
                            type="checkbox" 
                            name="Physics" 
                            id="physics" 
                            value="physics"
                            checked={subjects.physics === true}
                            onChange={() => handleSubjectChange("physics")} /> 
                            <label htmlFor="physics">Physics</label>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="">Upload Resume</label>
                    <div>
                        <input 
                        type="file" 
                        name="file"
                        id="file"
                        onChange={(e) => 
                            setResume(e.target.files[0])
                        }
                        placeholder = "Enter upload File"
                        className="border border-gray-400 rounded p-1 " 
                        required/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="url">Enter URL</label>
                    <input 
                    type="url" 
                    value={url} 
                    name="url" 
                    id="url" 
                    onChange={(e) => 
                        setUrl(e.target.value)
                    }
                    placeholder="Enter url" 
                    className="border px-1 border-gray-400 rounded" 
                    required/>
                </div>

                <div className="flex flex-col">

                    <label htmlFor="select">Select Your Choice</label>

                    <select 
                    name="select" 
                    id="select" 
                    value={selectedOption} 
                    onChange={(e) => 
                        setSelectedOption(e.target.value)
                    }
                    className="border rounded border-gray-400 p-1 focus:outline-none">

                        <option 
                        value={selectedOption === ""}
                        disabled

                        >
                            Select your Ans
                        </option>

                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>

                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="t">MongoDB</option>
                        </optgroup>

                    </select>


                </div>

                <div className="flex flex-col">
                    <label htmlFor="about">About</label>
                    <textarea 
                    name="about" 
                    id="about" 
                    cols="30" 
                    rows="4" 
                    onChange={(e) => 
                        setAbout(e.target.value)
                    }
                    placeholder="About yourself" 
                    required 
                    className="border border-gray-400 rounded"></textarea>
                </div>

                <div className="flex justify-around px-10">
                    <button 
                    type="reset" 
                    value="reset" 
                    onClick={() => handleReset()}
                    className="bg-[#4CAF50] text-white text-[1.2rem] px-8 rounded cursor-pointer">Reset</button>

                    <button 
                    type="submit" 
                    value="submit" 
                    onClick={(e) => handleSubmit(e)}
                    className="bg-[#4CAF50] text-white text-[1.2rem] px-8 rounded cursor-pointer" >Submit</button>
                </div>
            </form>
        </section>
    )

}


export default App