import { CollectionProps } from '../../ts/interfaces.ts';
import './collection.scss';

function Collection({ img1, img2, img3, img4, header }: CollectionProps) {
  return (
    <div className="collection">
      <img src={img1} alt="Img" id="1" className="img-1" />
      <img src={img2} alt="Img" id="2" />
      <img src={img3} alt="Img" id="3" />
      <img src={img4} alt="Img" id="4" />
      <h4>{header}</h4>
    </div>
  );
}

export { Collection };
