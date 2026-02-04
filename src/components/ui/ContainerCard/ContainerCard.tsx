import { Card, CardHeader, CardBody, CardFooter, CardSlider } from "../Card";
import { Button } from "../Button";
import type { Container } from "../../../data/containers";

interface ContainerCardProps {
  container: Container;
  isOpen: boolean;
  onToggle: () => void;
  onOrder?: () => void;
}

export const ContainerCard = ({
  container,
  isOpen,
  onToggle,
  onOrder,
}: ContainerCardProps) => {
  return (
    <Card variant="default" isOpen={isOpen} onToggle={onToggle}>
      <CardHeader>
        <h3 className="text-xl font-semibold text-white">{container.title}</h3>
        <p className="text-gray-400 text-sm">{container.subtitle}</p>
      </CardHeader>
      <CardBody className="space-y-4">
        {/* Изображение контейнера */}
        <div className="pb-4">
          <div className="w-full h-60  rounded flex items-center justify-center mb-3">
            <img 
              src={container.imageUrl} 
              alt={container.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <h4 className="text-lg font-medium text-white mb-2">
            {container.name}
          </h4>
          <p 
            className="text-gray-300 text-md"
            dangerouslySetInnerHTML={{ __html: container.description }}
          />
        </div>

        
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button
          variant="arrow"
          toggled={isOpen}
          onClick={onToggle}
          width="160px"
        >
          {isOpen ? "Скрыть" : "Показать"}
        </Button>
        <Button variant="dot" onClick={onOrder}>
          Заказать
        </Button>
      </CardFooter>
      <CardSlider>
        <ul className="space-y-2">
          {container.features.map((feature, idx) => (
            <li key={idx} className="text-gray-300 text-md">
              {feature}
            </li>
          ))}
        </ul>
      </CardSlider>
    </Card>
  );
};
