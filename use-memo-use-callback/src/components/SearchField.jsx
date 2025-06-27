export const SEARCH_NAME = 'search-car'

export default function SearchField({ action }) {
  return (
    <form action={action} className="join">
      <div>
        <label className="input validator join-item">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            name={SEARCH_NAME}
          />
        </label>
        <div className="validator-hint hidden">Enter valid car name</div>
      </div>
      <button type="submit" className="btn btn-info join-item">
        Search
      </button>
    </form>
  )
}
