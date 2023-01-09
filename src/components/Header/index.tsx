import {
  BsFillHandbagFill,
  BsFillHeartFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo src="public/Logosite.png" />

      <Styled.ListUnordered>
        <Styled.ListItem>
          <Styled.Link href="#">Home</Styled.Link>
        </Styled.ListItem>

        <Styled.ListItem>
          <Styled.Link href="#">Pages</Styled.Link>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.Link href="#">Shop</Styled.Link>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.Link href="#">Port</Styled.Link>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.Link href="#">News</Styled.Link>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.Link href="#">Support</Styled.Link>
        </Styled.ListItem>
      </Styled.ListUnordered>

      <Styled.DivIcons>
        <Styled.Link href="#">
          <BsFillHandbagFill
            fontSize={20}
            style={{
              marginLeft: '5px',
              marginRight: '20px',
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </Styled.Link>

        <Styled.Link href="#">
          <BsFillTelephoneFill
            fontSize={20}
            style={{
              marginLeft: '5px',
              marginRight: '20px',
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </Styled.Link>

        <Styled.Link href="#">
          <BsFillHeartFill
            fontSize={20}
            style={{
              marginLeft: '5px',
              marginRight: '20px',
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </Styled.Link>

        <Styled.Link href="#">
          <AiOutlineMenu
            fontSize={20}
            style={{
              marginLeft: '5px',
              marginRight: '20px',
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </Styled.Link>
      </Styled.DivIcons>
    </Styled.Header>
  );
};
