export default function CarItem({ car }) {
  return (
    // <div className="join-item flex gap-2 py-3 border-b-2">
    //   <span className="font-bold">{car.name}</span>
    //   <span className="">{car.model}</span>
    //   <span className="">{car.year_produced}</span>
    //   <span className="flex-auto text-end">$ {car.price}</span>
    // </div>
    <div className="card card-border border-accent w-96 shadow-sm ">
      <div className="card-body">
        <span className="badge badge-md badge-success">{car.name}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{car.model}</h2>
          <div className="space-y-2 text-end">
            <div className="text-xl">$ {car.price}</div>
            <span className="badge badge-sm badge-neutral">
              Year: {car.year_produced}
            </span>
          </div>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {car.safety_features.map(feature => (
            <li key={feature}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
