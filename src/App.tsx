import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import PlusIcon from "./assets/icons/plus.svg?react"
import Button from "./components/button";
import ButtonIcon from "./components/buttonIcon";
import InputText from "./components/inputText";
import InputCheckbox from "./components/inputCheckbox";
import Card from "./components/card";
import Container from "./components/container";

export default function App() {

  return (
    <Container>
      <div className="flex flex-col gap-3">

        <div>
          <Text variant="body-sm-bold" className="text-pink-base">ola mundo</Text>
          <Text className="text-green-base">ola mundo</Text>
          <Text variant="body-md-bold">ola mundo</Text>
        </div>


        <div>
          <TrashIcon className="fill-pink-base" />
          <Icon svg={SpinnerIcon} animate />
        </div>

        <div>
          <Badge variant="secondary">2</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>2 de 5</Badge>
        </div>

        <div>
          <Button variant="primary">Minha Tarefa</Button>
          <Button icon={PlusIcon} >Minha Tarefa</Button>
          <Button icon={PlusIcon} disabled >Minha Tarefa</Button>
        </div>

        <div>
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">ola mundo</Card>
        </div>

      </div>
    </Container>
  )
}
