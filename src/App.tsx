import Text from "./components/text";

export default function App() {

  return (
    <div className="flex flex-col gap-3">

      <Text variant="body-sm-bold" className="text-pink-base">ola mundo</Text>
      <Text  className="text-green-base">ola mundo</Text>
      <Text variant="body-md-bold">ola mundo</Text>

    </div>
  )
}
