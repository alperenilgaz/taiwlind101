import React from 'react'

const Container = () => {
  return (
<>
    <div className=" container mx-auto  text-white text-3xl font-bold underline tex dark:bg-slate-700 bg-black p-8 text-center mt-5">
        This is a Container
    </div>

    <main>
        <div className="container text-3xl h-96 mx-auto bg-gray-300">
                MainContent
        </div>
    </main>

    <footer>
        <div className="container text-white text-3xl mx-auto h-40 mb-5 bg-slate-700 ">
            Footer
        </div>
    </footer>
</>
  )
}

export default Container