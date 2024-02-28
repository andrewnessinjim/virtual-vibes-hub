import { cookies } from 'next/headers';
import React from 'react';
import BrowserUserProvider from './BrowserUserProvider';
import {hri} from "human-readable-ids";
import { createNewUser, findUser } from '@/utils/userDb';

async function ServerUserProvider({children}) {  
  const savedUUID = cookies().get("uuid");
  const uuid = savedUUID?.value || crypto.randomUUID();
  
  let user = await findUser(uuid)
  
  if(!user) {
    user = {
      uuid,
      username: hri.random(),
    }
    await createNewUser(user);
  }

  return (
    <BrowserUserProvider user={{
      uuid: user.uuid,
      username: user.username
    }}>
      {children}
    </BrowserUserProvider>
  );
}

export default ServerUserProvider;
