import React from 'react';
import storage from '../../../fb/storage';
import {ref, uploadString} from 'firebase/storage';
import {v4 as uuidv4} from 'uuid';


const handleClick = () => {
  const name = `${uuidv4()}.txt`;
  const storageRef = ref(storage, name);
  const message = 'This is my message.';
  uploadString(storageRef, message).then((snapshot) => {
    console.log('Uploaded a raw string!', snapshot);
  });
};

const HelloWorld: React.FunctionComponent = (): React.ReactElement => <div >
  <button onClick={handleClick} type="button" >
    Upload
  </button >
</div >;

export default HelloWorld;
