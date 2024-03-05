import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  CardHeader,
} from "reactstrap";

export const Blog: React.FC<{
  image: any;
  title: string;
  subtitle: string;
  text: string;
  color: string;
}> = (props) => {
  return (
    <Card>
      <Image
        alt="Card image cap"
        src={props.image}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Button color={props.color}>Read More</Button>
      </CardBody>
    </Card>
  );
};
