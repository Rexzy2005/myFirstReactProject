import MyLogo from '../assets/MyLogo.jpg'

const HeroSection = () => {
  const brackets = '{ }';
  return (
    <div
      class="w-full px-[5%] pt-32  h-screen flex flex-col gap-10 justify-center  items-center relative sm:flex-row sm:justify-between sm:px-[10%]">
        {/* left section */}
      <div class="w-full flex flex-col justify-center items-center text-center sm:text-left sm:items-start">
        <span class="text-slate-50 text-[1rem]">Hi <span class="text-2xl">👋</span></span>
        <h1 class="text-2xl text-slate-100 mt-4">I'm Pererat Timothy</h1>
        <h2 class="text-5xl text-slate-100 font-bold">Frontend Developer</h2>
        <p class="text-[1rem] text-slate-400 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, at.
        </p>
        <div class="flex flex-row space-x-6 mt-6">
          <span class="social-icons">i</span>
          <span class="social-icons">i</span>
          <span class="social-icons">i</span>
        </div>
      </div>
      {/* right section */}
      <div class="w-full flex justify-center items-center sm:justify-end ">
        <div
          class="ring-1 ring-slate-50 size-70 rounded-full flex justify-center items-center bg-slate-200/50 backdrop-blur-lg p-3 animation relative">
          <span
            class="absolute top-[10%] right-[1%] bg-amber-50/50 backdrop-blur-3xl size-10 ring-2 ring-slate-900 rounded-full animate-bounce grid place-content-center">🚀</span>
          <span class="w-full h-full ring-1 ring-slate-50 bg-slate-200/70 rounded-full flex justify-center items-center">
            <img class="rounded-full object-cover" src={MyLogo} alt="this is an image" />
          </span>
          <span
            class="absolute bottom-[10%] left-[1%] bg-amber-50/50 backdrop-blur-3xl size-10 ring-2 ring-slate-900 rounded-full animate-bounce grid place-content-center text-slate-950 font-extrabold">{brackets}</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection