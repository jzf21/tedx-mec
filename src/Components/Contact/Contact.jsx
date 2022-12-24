import React from 'react'
import './Contact.scss'
const Contact = () => {
  return (
    <div className="bg-red flex flex-col items-center">
      <h1 className="mx-5 text-white text-5xl my-5">Contact</h1>
      <p className="mx-5 text-white my-5">
        Have queries regarding our event? Leave us a mail at tedx@mec.ac.in or
        give us a call on the following numbers.
      </p>
      <div className="flex flex-col md:flex-row  items-center gap-8 md:gap-16">
        <div className="card">
          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-[#101010] max-w-sm my-5">
              <h5 class="text-white text-xl leading-tight font-medium mb-2">
                Amith Tony Joseph
              </h5>
              <p class="text-white text-base mb-4">Operations Head</p>
              <p className="text-white">Phone: 91974239232</p>
              {/* <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-[#101010] max-w-sm my-5">
              <h5 class="text-white text-xl leading-tight font-medium mb-2">
                Janice Maria Jons
              </h5>
              <p class="text-white text-base mb-4">Co-organizer</p>
              <p className="text-white">Phone: 91974239232</p>
              {/* <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-[#101010] max-w-sm my-5">
              <h5 class="text-white text-xl leading-tight font-medium mb-2">
                Vishnumaya S Unni
              </h5>
              <p class="text-white text-base mb-4">Licensee</p>
              <p className="text-white">Phone: 91974239232</p>
              {/* <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact