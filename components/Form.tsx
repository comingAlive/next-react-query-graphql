import CalendarIcon from "@/components/icons/CalendarIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import StarIcon from "@/components/icons/StarIcon";
import UsersIcon from "@/components/icons/UsersIcon";

const Form = () => {
  return (
    <div className="my-auto z-10">
      <div className="p-8 space-y-6 bg-white rounded-t-lg">
        <div className="flex ml-2 space-x-12 text-lg">
          <div className="flex items-center space-x-4">
            <input type="radio" id="huey" name="drone" placeholder="test"/>
            <label htmlFor="huey">Round Trip</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="radio" id="dewey" name="drone" value="dewey"/>
            <label htmlFor="dewey">One Way</label>
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          />
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
              <LocationIcon/>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block pr-12 pl-12 w-full font-medium rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Leaving from..."
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          />
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
              <LocationIcon/>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block pr-12 pl-12 w-full font-medium rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Going to..."
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            />
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                <CalendarIcon/>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block pr-12 pl-12 w-full font-medium rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Depart"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            />
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                <CalendarIcon/>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block pr-12 pl-12 w-full font-medium rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Return"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            />
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                <UsersIcon/>
              </div>
              <div className="flex items-center w-full">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="pl-12 w-full h-full text-lg text-gray-500 bg-transparent bg-gray-100 rounded-md border-transparent focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option>1 passenger</option>
                  <option>2 passengers</option>
                  <option>3 passengers</option>
                  <option>4 passengers</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            />
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                <StarIcon/>
              </div>
              <div className="flex items-center w-full">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="pl-12 w-full h-full text-lg text-gray-500 bg-transparent bg-gray-100 rounded-md border-transparent focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option>Economy class</option>
                  <option>Business class</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="p-4 w-full text-lg font-medium tracking-wider leading-loose text-white uppercase break-words bg-blue-800 rounded-b-lg hover:text-blue-50 hover:ring-4">
        Search Flights
      </button>
    </div>
  );
};
export default Form;
