import Card from '../Card';
import CounterPages from '../CounterPage';
import * as styled from './styles';

export default function GalleryCards() {
  return (
    <>
      <styled.GalleryCard>
        <Card />
        <Card />
        <Card />
        <Card />
      </styled.GalleryCard>
    </>
  );
}
