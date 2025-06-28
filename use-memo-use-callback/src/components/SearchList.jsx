import CarItem from './CarItem'

export default function SearchList({ list }) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        {list.map((car, index) => (
          <CarItem key={index + car.name} car={car} />
        ))}
      </div>
    </>
  )
}
