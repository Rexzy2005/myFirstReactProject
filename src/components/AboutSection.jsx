import MyPic from '../assets/MyPic.jpg'
import JobCard from './JobCard'

const AboutSection = () => {
  return (
    <div id="about"
      className="w-full px-[5%] pt-32 sm:h-screen flex flex-col justify-center  items-center gap-10 sm:flex-row sm:justify-between sm:px-[10%]">
      <div className="w-full text-center sm:text-left">
        <span
          className="shadow shadow-slate-800 rounded-full p-1 px-4 text-sky-600 text-[1rem] bg-slate-800/70 backdrop-blur-lg">About
          Me</span>
        <h1 className="text-2xl text-slate-100 mt-4">A Tech Enthusiast</h1>
        <p className="text-[1rem] text-slate-400 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          odit illo eveniet adipisci aliquam quaerat facilis tempore, explicabo quibusdam! Temporibus voluptas placeat
          aperiam ipsa voluptate similique illum quia culpa? Cumque enim ut maiores ea assumenda laudantium veniam nobis?
          Delectus, numquam!
        </p>
        <p className="text-slate-500 text-[1rem] font-bold mt-5">Available for:</p>
        <div className="text-slate-500 flex justify-center items-center gap-4 mt-4 sm:justify-start">
          <JobCard title={'Remote jobs'} />
          <JobCard title={'on-site jobs'} />
          <JobCard title={'hybrid jobs'} />
        </div>

      </div>
      <div className="w-full flex justify-center items-center sm:justify-end">
        <div
          className="ring-1 ring-slate-50 size-80 rounded-md flex justify-center items-center bg-slate-200/40 backdrop-blur-lg p-3 relative">

          <span className="w-full h-full ring-1 rounded-md ring-slate-50 bg-slate-200/70 flex justify-center items-center">
            <img className="w-full h-full object-cover rounded-md" src={MyPic} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutSection