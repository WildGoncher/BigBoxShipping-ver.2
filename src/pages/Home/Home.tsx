import { Button } from '../../components/ui/Button';
import { Card, CardHeader, CardBody, CardFooter, CardSlider } from '../../components/ui/Card';

export const Home = () => {
  return (
    <div style={{backgroundImage: 'url(../../../public/images/backgrounds/Sea_bg.png'}}>
      <h1>Button test</h1>
      <Button onClick={() => alert('Hello World!')}>Заказать</Button>
      <Button disabled={true}>test btn disabled</Button>
      <Card variant='default'>
  <CardHeader>
    <h3>Card Mc cardey</h3>
  </CardHeader>
  <CardBody>
    <img src='#' alt="Контейнер"/>
    <h3>40 Dry Van</h3>
    <p>Lorem ipsum set alor amet pupupupu eoeo oe dljkdfjdlfkj...</p>
  </CardBody>
  <CardFooter>
    <Button variant="arrow">Unwrap</Button>
    <Button variant="dot">Order</Button>
  </CardFooter>
  <CardSlider>
    <ul>
      <li>alpha</li>
      <li>beta</li>
      <li>gamma</li>
    </ul>
  </CardSlider>
</Card>
      <div className="flex flex-col items-start gap-4">
        <Button variant="arrow">Toggle стрелка</Button>
        <Button variant="dot">Toggle точка</Button>  
        <Button variant="primary">Обычная кнопка</Button>
      </div>
    </div>
  );
}
