import React, { Profiler } from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
     <Container>
         <Header>
             <button>
                 <BackIcon />
             </button>

             <ProfileInfo>
                 <strong>Rogério Martins</strong>
                 <span>801 Tweets</span>
             </ProfileInfo>
         </Header>

         {/* <ProfilePage /> */}

         {/* <BottonMenu>
             <HomeIcon />
             <SerchIcon />
             <BellIcon />
             <EmailIcon />
         </BottonMenu> */}
     </Container>
  );
}

export default Main;