export const GeneralLayout = ({ children }) => {

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <footer className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <p>Footer</p>
      </footer>
    </div>
  )
}