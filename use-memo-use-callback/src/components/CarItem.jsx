export default function CarItem({ car }) {
  return (
    <div className="join-item flex gap-2 py-3 border-b-2">
      <span className="font-bold">{car.name}</span>
      <span className="">{car.model}</span>
      <span className="">{car.year_produced}</span>
      <span className="flex-auto text-end">$ {car.price}</span>
    </div>
  )
}
