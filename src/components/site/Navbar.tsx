import { SiGithub } from 'react-icons/si'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
        <div className="mx-auto w-full max-w-3xl space-y-20">
          <div className="flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              <a
                href="/"
                className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
              >
                LuminousUi
              </a>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <nav className="flex items-center space-x-1">
                <a
                  href="https://github.com/Uhsendin/luminous.ui"
                  className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]"
                >
                  <SiGithub className="h-full w-full" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
