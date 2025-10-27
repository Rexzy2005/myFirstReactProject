
const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full px-[5%] mt-32  flex flex-col items-center sm:px-[10%] sm:mt-32">
      <div className="w-full border-t border-t-slate-500/50 p-5 text-center text-slate-500/50 sm:p-10">
        <p>built with love and coffee, by DevRex</p>
        <p>&copy; copyright {year}</p>
      </div>
    </footer>
  )
}

export default Footer